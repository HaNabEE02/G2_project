document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('toggle-button');
  const mainButtonWrapper = document.getElementById('main-button-wrapper');
  const mainButton = document.getElementById('main-button');

  // 메뉴 버튼 클릭 시 메인 버튼 토글
  toggleButton.addEventListener('click', () => {
      mainButtonWrapper.classList.toggle('show');
      triggerAnimation(toggleButton, 'shake-horizontal'); // 애니메이션 클래스 추가
  });

  // 메인 버튼 클릭 시 페이지 이동
  mainButton.addEventListener('click', () => {
      window.location.href = 'index_main.html';
  });

  // 애니메이션을 트리거하고 일정 시간 후 클래스 제거
  function triggerAnimation(element, animationClass) {
      // 기존 애니메이션이 있으면 제거
      element.classList.remove(animationClass);
      
      // 클래스 추가
      void element.offsetWidth; // Reflow hack: 애니메이션을 강제로 재시작
      element.classList.add(animationClass);

      // 애니메이션이 끝난 후 클래스 제거
      element.addEventListener('animationend', () => {
          element.classList.remove(animationClass);
      }, { once: true });
  }
});
