document.addEventListener("DOMContentLoaded", function () {
  const sound = document.getElementById("button-sound");
  const buttons = document.querySelectorAll(".custom-button");

  sound.volume = 0.5;
  buttons.forEach(button => {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      const targetUrl = this.getAttribute("data-target-url");
      sound.currentTime = 0;
      sound.play();
      setTimeout(() => {
        window.location.href = targetUrl;
      }, 1000);
    });
  });
});

document.addEventListener('click', function () {
  const audioElement = document.getElementById("bgm");
  audioElement.volume = 0.4;
  audioElement.play().catch(error => {
    console.log('Playback prevented:', error);
  });
}, { once: true });
