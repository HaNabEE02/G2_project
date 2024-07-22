document.addEventListener("DOMContentLoaded", function () {
  const dialogText = document.getElementById("dialog-text");
  const button = this.getElementById("button");
  const texts = [
    "最初に就職活動してた時は、専攻と関連してエンタメ系、音楽とか映画とか映像とか、そういうのをやりたいなって思ってたんですけど、技術だったりとか、実際に何かしたっていうところがないと、やっぱり就職するのが難しくで、そっちの方面は途中で諦めて、その他に興味があったitっていうところにたどり着いた感じです。",
    "日本だと、専攻に関係なくても結構いろんなとこに就職することが新卒だったらできるので、そういうのもあってit業界に入りました。",
    "次のテキストを 추가하세요."
  ];
  let currentTextIndex = 0;
  let isTyping = false;
  function typeWriter(text, i, callback) {
    if (i < text.length) {
      dialogText.textContent += text.charAt(i);
      i++;
      setTimeout(() => typeWriter(text, i, callback), 50); // Adjust typing speed here
    } else {
      if (callback) callback();
    }
  }

  function startTyping() {
    if (!isTyping) {
      isTyping = true;
      dialogText.textContent = "";
      typeWriter(texts[currentTextIndex], 0, () => {
        isTyping = false;
        dialogText.style.animation = "none"; // Stop the typing animation after the text is fully displayed
      });
    }
  }

  button.addEventListener("click", () => {
      if (!isTyping) {
        currentTextIndex++;
        if (currentTextIndex < texts.length) {
          startTyping();
        } else {
          dialogText.textContent = "End of texts."; // End message
        }
      }
    });

  startTyping(); // Start typing the first text
});
