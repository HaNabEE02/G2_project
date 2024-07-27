document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.getElementById('sidebar');
  const sidebarToggle = document.getElementById('sidebar-toggle');
  const closeBtn = document.getElementById('close-btn');
  const backToTopBtn = document.getElementById('back-to-top');
  const theEndScreen = document.querySelector('.the-end-screen');
  const bgm = document.getElementById('bgm');
  const muteToggle = document.getElementById('mute-toggle');
  const volumeControl = document.getElementById('volume-control');
  const introOverlay = document.getElementById('intro-overlay');
  const animatedElements = document.querySelectorAll('.animated');

  if (!sidebar || !sidebarToggle || !closeBtn || !backToTopBtn || !theEndScreen || !bgm || !muteToggle || !volumeControl || !introOverlay) {
    console.error('필수 HTML 요소가 누락되었습니다.');
    return;
  }

  // 사이드바 토글 (열기/닫기)
  sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('show');
  });

  closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('show');
  });

  // 부드러운 스크롤 기능 추가
  sidebar.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      
      if (href.startsWith('#')) { // 내부 링크인 경우
        e.preventDefault(); // 기본 동작 방지

        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });
        }

        // 사이드바 닫기 기능 추가
        sidebar.classList.remove('show');
      } else { // 외부 링크인 경우
        // 기본 동작 유지
      }
    });
  });

  // 스크롤 위치에 따라 "Back to Top" 버튼 표시/숨기기
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      backToTopBtn.style.display = 'block';
    } else {
      backToTopBtn.style.display = 'none';
    }

    // 페이지 하단에 도달했는지 확인
    const documentHeight = document.documentElement.scrollHeight;
    const viewportHeight = window.innerHeight;
    const scrollPosition = window.scrollY + viewportHeight;

    if (scrollPosition >= documentHeight) {
      theEndScreen.classList.add('show'); // "THE END" 화면 표시
    } else {
      theEndScreen.classList.remove('show'); // "THE END" 화면 숨기기
    }
  });

  // 부드러운 스크롤로 상단으로 이동
  backToTopBtn.addEventListener('click', (event) => {
    event.preventDefault(); // 기본 동작 방지
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // 오디오 플레이어 기능
  muteToggle.addEventListener('click', () => {
    if (bgm.muted) {
      bgm.muted = false;
      muteToggle.textContent = '🔊'; // Sound on
    } else {
      bgm.muted = true;
      muteToggle.textContent = '🔈'; // Sound off
    }
  });

  volumeControl.addEventListener('input', () => {
    bgm.volume = volumeControl.value;
  });

  // 반복 재생 설정
  bgm.loop = true;

  // 페이지 클릭 시 오디오 재생
  document.addEventListener('click', function () {
    bgm.play().catch(error => {
      console.log('Playback prevented:', error);
    });
  }, { once: true });

  // 애니메이션을 트리거하는 함수
  const triggerAnimation = () => {
    const windowHeight = window.innerHeight;
    animatedElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;

      if (elementTop < windowHeight * 0.75) { // 화면의 75% 위치까지 오면 애니메이션 실행
        // 애니메이션이 이미 실행된 경우, 클래스를 제거하고 다시 추가하여 애니메이션 재시작
        element.classList.remove('show-animation');
        void element.offsetWidth; // Reflow trigger
        element.classList.add('show-animation');
      }
    });
  };

  // 페이지 로드 시 애니메이션 트리거
  triggerAnimation();

  // 스크롤 시 애니메이션 트리거
  window.addEventListener('scroll', triggerAnimation);

  // 페이지 로드 시 intro-overlay 서서히 사라지게 하기
  const fadeOutIntroOverlay = () => {
    introOverlay.style.opacity = '0'; // 서서히 사라지도록 설정
    setTimeout(() => {
      introOverlay.style.display = 'none'; // 완전히 사라지도록 설정
    }, 2000); // 애니메이션이 끝나는 시간과 맞추기
  };

  // 사용자 클릭 또는 키보드 입력 시 intro-overlay 서서히 사라지게 하기
  document.addEventListener('click', fadeOutIntroOverlay);
  document.addEventListener('keydown', fadeOutIntroOverlay);

  // 2초 후 intro-overlay 서서히 사라지게 하기
  setTimeout(fadeOutIntroOverlay, 2000);
});
