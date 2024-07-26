document.addEventListener("DOMContentLoaded", function () {
  const sound = document.getElementById("button-sound");
  const buttons = document.querySelectorAll(".custom-button");


  buttons.forEach(button => {
    button.addEventListener("click", function (event) {
      event.preventDefault(); // 기본 동작을 막음
      const targetUrl = this.getAttribute("data-target-url"); // 버튼의 목적지 URL 가져오기
      sound.currentTime = 0;  // 오디오를 처음부터 재생
      sound.play();
      setTimeout(() => {
        window.location.href = targetUrl;
      }, 1000); // 0.5초 후에 페이지 이동
    });
  });
});

document.addEventListener('click', function () {
  const audioElement = document.getElementById("bgm");

  audioElement.play().catch(error => {
    console.log('Playback prevented:', error);
  });
}, { once: true });
