document.addEventListener("DOMContentLoaded", function () {
  const dialogText = document.getElementById("dialog-text");
  const dialogName = document.getElementById("dialog-name");
  const dialogAnnotation = document.getElementById("dialog-annotation");
  const dialogBoxName = document.querySelector(".dialog-box-name");
  const characters = {
    nozomi: document.querySelector(".nozomi"),
    son: document.querySelector(".son"),
    jan: document.querySelector(".jan"),
    jeon: document.querySelector(".jeon"),
    jun: document.querySelector(".jun")
  };
  const menu_ico = document.querySelector(".menu-ico");
  const dialogData = [
    { name: "Nozomi", text: "最初に就職活動してた時は、専攻と関連してエンタメ系、音楽とか映画とか映像とか、そういうのをやりたいなって思ってたんですけど、技術だったりとか、実際に何かしたっていうところがないと、やっぱり就職するのが難しくて、そっちの方面は途中で諦めて、その他に興味があったitっていうところにたどり着いた感じです。", annotation: "※コメント欄" },
    { name: "Jun", text: "日本だと、専攻に関係なくても結構いろんなとこに就職することが新卒だったらできるので、そういうのもあってit業界に入りました。", annotation: "※コメント欄" },
    { name: "Nozomi", text: "次のテキストを 추가하세요.", annotation: "※コメント欄" },
    { name: "Jeon", text: "最初に就職活動してた時は、専攻と関連してエンタメ系、音楽とか映画とか映像とか、そういうのをやりたいなって思ってたんですけど、技術だったりとか、実際に何かしたっていうところがないと、やっぱり就職するのが難しくて、そっちの方面は途中で諦めて、その他に興味があったitっていうところにたどり着いた感じです。" },
    { name: "Jun", text: "日本だと、専攻に関係なくても結構いろんなとこに就職することが新卒だったらできるので、そういうのもあってit業界に入りました。" },
    { name: "Jan", text: "次のテキストを 추가하세요." },
    { name: "Jan", text: "最初に就職活動してた時は、専攻と関連してエンタメ系、音楽とか映画とか映像とか、そういうのをやりたいなって思ってたんですけど、技術だったりとか、実際に何かしたっていうところがないと、やっぱり就職するのが難しくて、そっちの方面は途中で諦めて、その他に興味があったitっていうところにたどり着いた感じです。" },
    { name: "Nozomi", text: "日本だと、専攻に関係なくても結構いろんなとこに就職することが新卒だったらできるので、そういうのもあってit業界に入りました。" },
    { name: "Jeon", text: "次のテキストを 추가하세요." },
    { name: "Jun", text: "最初に就職活動してた時は、専攻と関連してエンタメ系、音楽とか映画とか映像とか、そういうのをやりたいなって思ってたんですけど、技術だったりとか、実際に何かしたっていうところがないと、やっぱり就職するのが難しくて、そっちの方面は途中で諦めて、その他に興味があったitっていうところにたどり着いた感じです。" },
    { name: "Jan", text: "日本だと、専攻に関係なくても結構いろんなとこに就職することが新卒だったらできるので、そういうのもあってit業界に入りました。" },
    { name: "Nozomi", text: "次のテキストを 추가하세요." },
    { name: "Jeon", text: "最初に就職活動してた時は、専攻と関連してエンタメ系、音楽とか映画とか映像とか、そういうのをやりたいなって思ってたんですけど、技術だったりとか、実際に何かしたっていうところがないと、やっぱり就職するのが難しくて、そっちの方面は途中で諦めて、その他に興味があったitっていうところにたどり着いた感じです。" },
    { name: "Jun", text: "日本だと、専攻に関係なくても結構いろんなとこに就職することが新卒だったらできるので、そういうのもあってit業界に入りました。" },
    { name: "Jun", text: "次のテキストを 추가하세요." },
    { name: "Jan", text: "最初に就職活動してた時は、専攻と関連してエンタメ系、音楽とか映画とか映像とか、そういうのをやりたいなって思ってたんですけど、技術だったりとか、実際に何かしたっていうところがないと、やっぱり就職するのが難しくて、そっちの方面は途中で諦めて、その他に興味があったitっていうところにたどり着いた感じです。" },
    { name: "Jan", text: "日本だと、専攻に関係なくても結構いろんなとこに就職することが新卒だったらできるので、そういうのもあってit業界に入りました。" },
    { name: "Jeon", text: "次のテキストを 추가하세요." }
  ];

  let currentTextIndex = 0;
  let isTyping = false;
  let isComplete = false;
  let typingTimeout;
  let typeSpeed = 1;

  function typeWriter(text, i, callback) {
    if (i < text.length) {
      dialogText.textContent += text.charAt(i);
      i++;
      typingTimeout = setTimeout(() => typeWriter(text, i, callback), 50 / typeSpeed);
    } else {
      if (callback) callback();
    }
  }

  function typeAnnotation(annotation, i, callback) {
    if (i < annotation.length) {
      dialogAnnotation.textContent += annotation.charAt(i);
      i++;
      typingTimeout = setTimeout(() => typeAnnotation(annotation, i, callback), 50 / typeSpeed);
    } else {
      if (callback) callback();
    }
  }

  function startTyping() {
    if (!isTyping) {
      isTyping = true;
      isComplete = false;
      dialogText.textContent = "";
      dialogAnnotation.textContent = "";
      const currentDialog = dialogData[currentTextIndex];
      dialogName.textContent = currentDialog.name;

      Object.values(characters).forEach(character => {
        character.classList.add("dimmed");
        character.classList.remove("char-border");
      });

      const currentCharacter = characters[currentDialog.name.toLowerCase()];
      currentCharacter.classList.remove("dimmed");
      currentCharacter.classList.add("char-border");

      if (currentDialog.name === "Nozomi") {
        dialogBoxName.classList.remove("left");
        dialogBoxName.classList.add("right");
      } else {
        dialogBoxName.classList.remove("right");
        dialogBoxName.classList.add("left");
      }

      typeWriter(currentDialog.text, 0, () => {
        if (currentDialog.annotation) {
          typeAnnotation(currentDialog.annotation, 0, () => {
            isTyping = false;
            isComplete = true;
            dialogText.style.animation = "none";
          });
        } else {
          isTyping = false;
          isComplete = true;
          dialogText.style.animation = "none";
        }
      });
    }
  }

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".menu-ico")) {
      if (isTyping) {
        clearTimeout(typingTimeout);
        const currentDialog = dialogData[currentTextIndex];
        dialogText.textContent = currentDialog.text;
        if (currentDialog.annotation) {
          dialogAnnotation.textContent = currentDialog.annotation;
        }
        isTyping = false;
        isComplete = true;
      } else if (isComplete) {
        currentTextIndex++;
        if (currentTextIndex < dialogData.length) {
          startTyping();
        } else {
          dialogText.textContent = "End of texts.";
          /* 여기다가 끝나고 나서 나올 버튼 등 추가 */
        }
      }
    }
  });

  menu_ico.addEventListener("click", (event) => {
    event.stopPropagation();
    menu_ico.classList.add("shake-horizontal");

    menu_ico.addEventListener('animationend', function handleHorizontalShakeEnd() {
      menu_ico.classList.remove("shake-horizontal");
      menu_ico.classList.add("shake-vertical");

      menu_ico.addEventListener('animationend', function handleVerticalShakeEnd() {
        menu_ico.classList.remove("shake-vertical");
        menu_ico.removeEventListener('animationend', handleVerticalShakeEnd);
      });

      menu_ico.removeEventListener('animationend', handleHorizontalShakeEnd);
    });
    /* 여기다가 다른 버튼들 왼쪽으로 아래로 추가되는거 넣고 */
    const lastIndex = dialogData.length - 1;
    currentTextIndex = lastIndex;
  });

  startTyping();
});
