// 오디오 플레이어 기능
document.addEventListener('DOMContentLoaded', () => {
  const bgm = document.getElementById('bgm');
  const muteToggle = document.getElementById('mute-toggle');
  const volumeControl = document.getElementById('volume-control');

  // Mute/unmute toggle
  muteToggle.addEventListener('click', () => {
    if (bgm.muted) {
      bgm.muted = false;
      muteToggle.textContent = '🔊'; // Sound on
    } else {
      bgm.muted = true;
      muteToggle.textContent = '🔈'; // Sound off
    }
  });

  // Volume control
  volumeControl.addEventListener('input', () => {
    bgm.volume = volumeControl.value;
  });

  // 반복 재생 설정
  bgm.loop = true;
});

// 페이지 클릭 시 오디오 재생
document.addEventListener('click', function () {
  const audioElement = document.getElementById("bgm");

  audioElement.play().catch(error => {
    console.log('Playback prevented:', error);
  });
}, { once: true });
