document.addEventListener("DOMContentLoaded", function () {
  const dialogText = document.getElementById("dialog-text");
  const dialogName = document.getElementById("dialog-name");
  const dialogAnnotation = document.getElementById("dialog-annotation");
  const dialogBoxName = document.querySelector(".dialog-box-name");
  const charA = document.querySelector(".Char-G2_EXP2");
  const charB = document.querySelector(".char-Suzuki");
  const menu_ico = document.querySelector(".menu-ico");
  const buttonContainer = document.querySelector(".button-container");
  const subButtonContainers = document.querySelectorAll(".sub-button-container");
  const dialogData = [
    { name: "A", text: "最初に就職活動してた時は、専攻と関連してエンタメ系、音楽とか映画とか映像とか、そういうのをやりたいなって思ってたんですけど、技術だったりとか、実際に何かしたっていうところがないと、やっぱり就職するのが難しくて、そっちの方面は途中で諦めて、その他に興味があったitっていうところにたどり着いた感じです。", annotation: "※コメント欄" },
    { name: "B", text: "日本だと、専攻に関係なくても結構いろんなとこに就職することが新卒だったらできるので、そういうのもあってit業界に入りました。", annotation: "※コメント欄" },
    { name: "A", text: "次のテキストを 추가하세요.", annotation: "※コメント欄" },
    { name: "A", text: "最初に就職活動してた時は、専攻と関連してエンタメ系、音楽とか映画とか映像とか、そういうのをやりたいなって思ってたんですけど、技術だったりとか、実際に何かしたっていうところがないと、やっぱり就職するのが難しくて、そっちの方面は途中で諦めて、その他に興味があったitっていうところにたどり着いた感じです。" },
    { name: "B", text: "日本だと、専攻に関係なくても結構いろんなとこに就職することが新卒だったらできるので、そういうのもあってit業界に入りました。" },
    { name: "A", text: "次のテキストを 추가하세요." },
    { name: "A", text: "最初に就職活動してた時は、専攻と関連してエンタメ系、音楽とか映画とか映像とか、そういうのをやりたいなって思ってたんですけど、技術だったりとか、実際に何かしたっていうところがないと、やっぱり就職するのが難しくて、そっちの方面は途中で諦めて、その他に興味があったitっていうところにたどり着いた感じです。" },
    { name: "B", text: "日本だと、専攻に関係なくても結構いろんなとこに就職することが新卒だったらできるので、そういうのもあってit業界に入りました。" },
    { name: "A", text: "次のテキストを 추가하세요." },
    { name: "A", text: "最初に就職活動してた時は、専攻と関連してエンタメ系、音楽とか映画とか映像とか、そういうのをやりたいなって思ってたんですけど、技術だったりとか、実際に何かしたっていうところがないと、やっぱり就職するのが難しくて、そっちの方面は途中で諦めて、その他に興味があったitっていうところにたどり着いた感じです。" },
    { name: "B", text: "日本だと、専攻に関係なくても結構いろんなとこに就職することが新卒だったらできるので、そういうのもあってit業界に入りました。" },
    { name: "A", text: "次のテキストを 추가하세요." },
    { name: "A", text: "最初に就職活動してた時は、専攻と関連してエンタメ系、音楽とか映画とか映像とか、そういうのをやりたいなって思ってたんですけど、技術だったりとか、実際に何かしたっていうところがないと、やっぱり就職するのが難しくて、そっちの方面は途中で諦めて、その他に興味があったitっていうところにたどり着いた感じです。" },
    { name: "B", text: "日本だと、専攻に関係なくても結構いろんなとこに就職することが新卒だったらできるので、そういうのもあってit業界に入りました。" },
    { name: "A", text: "次のテキストを 추가하세요." },
    { name: "A", text: "最初に就職活動してた時は、専攻と関連してエンタメ系、音楽とか映画とか映像とか、そういうのをやりたいなって思ってたんですけど、技術だったりとか、実際に何かしたっていうところがないと、やっぱり就職するのが難しくて、そっちの方面は途中で諦めて、その他に興味があったitっていうところにたどり着いた感じです。" },
    { name: "B", text: "日本だと、専攻に関係なくても結構いろんなとこに就職することが新卒だったらできるので、そういうのもあってit業界に入りました。" },
    { name: "A", text: "次のテキストを 추가하세요." }
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

      if (currentDialog.name === "A") {
        dialogBoxName.classList.remove("right");
        dialogBoxName.classList.add("left");
        charA.classList.remove("dimmed");
        charB.classList.add("dimmed");
      } else {
        dialogBoxName.classList.remove("left");
        dialogBoxName.classList.add("right");
        charA.classList.add("dimmed");
        charB.classList.remove("dimmed");
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
    if (event.target.closest(".sub-button-container") || event.target.closest(".button-container")) {
      return;
    }
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
  });

  menu_ico.addEventListener("click", () => {
    buttonContainer.classList.toggle("show");
    // 버튼들이 다시 온전히 표시되도록 설정
    const buttons = buttonContainer.querySelectorAll('button'); // 모든 버튼 요소
    buttons.forEach(button => {
      button.classList.remove('hidden');; // 모든 버튼을 다시 표시
    });
    const subButtonContainers = document.querySelectorAll('.sub-button-container');
    subButtonContainers.forEach(container => {
      container.classList.remove('active');
    });
  });

  buttonContainer.addEventListener('click', (event) => {
    // 클릭된 요소가 버튼인지 확인
    if (event.target.tagName === 'IMG') {
      const clickedButton = event.target.closest('button'); // 클릭된 버튼 요소
      const buttons = buttonContainer.querySelectorAll('button'); // 모든 버튼 요소

      if (buttonContainer.classList.contains('show')) {
        let clickedIndex = -1;
        buttons.forEach((button, index) => {
          if (button === clickedButton) {
            clickedIndex = index;
          }
        });

        buttons.forEach(button => {
          if (button !== clickedButton) {
            button.classList.toggle('hidden');
          }
        });

        const activeSubButtonContainer = document.querySelector(`.sub-button-container${clickedIndex}`);
        if (activeSubButtonContainer) {
          activeSubButtonContainer.classList.toggle('active');
        }
      }
    }
  });

  document.querySelectorAll('.sub-button-container').forEach((container, containerIndex) => {
    container.querySelectorAll('.sub-custom-button').forEach((button, buttonIndex) => {
      button.addEventListener('click', () => {
        // Calculate the overall index
        const overallIndex = containerIndex * container.querySelectorAll('.sub-custom-button').length + buttonIndex;

        // Display the overall index
        console.log('Overall index:', overallIndex);
        let indexValue;
        switch (overallIndex) {
          case 0:
            indexValue = 2;
            break;
          case 1:
            indexValue = 4;
            break;
          case 2:
            indexValue = 6;
            break;
          case 3:
            indexValue = 7;
            break;
          case 4:
            indexValue = 10;
            break;
          default:
            indexValue = null; // or any default value
            break;
        }
        if (indexValue != null) {
          currentTextIndex = overallIndex
        }
      });
    });
  });

  startTyping();
});
