document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.getElementById('sidebar');
  const sidebarToggle = document.getElementById('sidebar-toggle');
  const closeBtn = document.getElementById('close-btn');
  const backToTopBtn = document.getElementById('back-to-top');
  const theEndScreen = document.querySelector('.the-end-screen');

  if (!sidebar || !sidebarToggle || !closeBtn || !backToTopBtn || !theEndScreen) {
    console.error('필수 HTML 요소가 누락되었습니다.');
    return;
  }

  // 사이드바 열기
  sidebarToggle.addEventListener('click', () => {
    sidebar.classList.add('show');
  });

  // 사이드바 닫기
  closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('show');
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
});
