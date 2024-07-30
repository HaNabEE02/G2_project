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
  const buttonContainer = document.querySelector(".button-container");
  const buttonContainer2 = document.querySelector(".button-container2");
  const subButtonContainers = document.querySelectorAll(".sub-button-container");
  const modoriButton = document.querySelector(".modori-main");
  const sound = document.getElementById("button-sound");

  const dialogData = [
    { name: "Son", text: "石崎さんの自己紹介お願いします。" },
    { name: "Nozomi", text: "石崎希と申します。今1998年生まれなので、日本だったら今25、6になる年で、韓国だと多分27になるだと思います。大学卒業してから就職、すぐ就職してit系の会社に勤めていて、今もその会社で仕事をしてます。", annotation: "※コメント欄" },
    { name: "Jeon", text: "現在、どのようなプログラミング言語使って仕事をなさっているのか聞きたいです！" },
    { name: "Nozomi", text: "私が今やってるのは、webサイトでホテルの予約とかができるようなサイトのフロントエンドの開発をしてるんですけど、基本的にはリアクトタイプ、スクリプト、その辺を使ってます。" },
    { name: "Jan", text: "今のオープンリソース株式会社に就職したいと決めたきっかけなどがありますか。その会社のどこが好きで、この会社にしなければという気持ちを持ったのか、それも少し聞いてみたいと思います。" },
    { name: "Nozomi", text: "今の会社にまずなんだ面接をしに行ったきっかけとしては、日本だと就職サイトに登録するとこう、オファーみたいな、あっちから面接に来てみませんか。みたいなオファーをいただくっていうタイプの、そういうサイトがあるんですけど、そこでオファーをいただいて、" },
    { name: "Nozomi", text: "今、そのオープンリソースって会社が、私が勤めてるit系の会社なんですけど、もう1個、グッドデイズかなっていう、も1個、不動産の会社をやってるとことグループの会社になってまして。そのグッドデイズっていう方をサービスとして、その不動産サービスをやってるのを知っていたので、ちょっと話聞きに行ってみようってことで、面接に行きました。" },
    { name: "Nozomi", text: "その時に面接担当してくださった人事の方が、すごい話をよく聞いてくださって、でも、なんか簡単な、こう、筆記試験みたいなとかをして、グッドデイズに関心を持ってきてくれたと思うんだけど、エンジニアって仕事もどうな会うと思うんだけどどうかな。っていうふうにご提案いただいて、その道もありかなと思ってきめました。" },
    { name: "Jun", text: "今、会社でit業界で働いているんですけれど、元々の専攻は、なんか音楽系、メディア系だったと思うんですけど、何の専攻か、ちょっと教えていただきたいです。" },
    { name: "Nozomi", text: "比較芸術っていう、学科だったんですけど、基本的に音楽っていうのと演劇、映像ていうのと美術っていうの、半分野があって、それを統括的に学ぶみたいなことをしてました。自分がこう、作品を作ったりとか、そういうことではなくて、作品を見に行ったりだとか、鑑賞したりとかして、比較芸術って名前にもあるように、aって作品を見て、bって作品を見て、違う比較して、比較することでより見えてくるものがあるんですけど、そういうのを、、評価したりとかていうことをしてました。" },
    { name: "Nozomi", text: "勉強っていうよりは趣味みたいな要素が強くて、一緒に勉強してた学校の友達もすごい、歌舞伎がすごい好きだったりとか、あと宝塚っていう、女性が男性役も全部やるっていう演劇があるんですけど、そういうのがすごい好きっていう友達がいたりとか、実際ミュージカル自分でやってるっていう友達もいたりとか、そういう、ちょっと面白い学科に所属してました。" },
    { name: "Jeon", text: "私たちのテーマについて簡単に説明すると、新しい環境に適応して活躍する方法を学びたいということで、そこに関してで色々な質問をさせていただきたいと思います。非専攻として、it業界に興味を持ったきっかけなどがあったらぜひ聞いてみたいと思います。" },
    { name: "Nozomi", text: "最初に就職活動してた時は、専攻と関連してエンタメ系、音楽とか映画とか映像とか、そういうのをやりたいなって思ってたんですけど、技術だったりとか、実際に何かしたっていうところがないと、やっぱり就職するのが難しくで、そっちの方面は途中で諦めて、その他に興味があったitっていうところにたどり着いた感じです。" },
    { name: "Nozomi", text: "日本だと、専攻に関係なくても結構いろんなとこに就職することが新卒だったらできるので、そういうのもあってit業界に入りました。itが良いというよりは、他に特に興味があることがなかったっていうのと、今後it関係のところにいればもう成長していくだろうなっていう考えもあって、そこに入りました。" },
    { name: "Jeon", text: "日本it業界に就職する、今、働いているその会社に就職する前には相手の勉強をしたことが全然なかったという話を聞いたんですけれども、内定をもらってからitの勉強をされたとかが、ありますか。" },
    { name: "Nozomi", text: "ほんとに全然勉強してなくて、な一応、未経験でも大丈夫っていう形で内定をいただいて就職することにしたんですけど、不安ではあったので、人事の方に「こういうの勉強した方がいいのってありますか。」っていうのは質問して、簡単な資格みたいなところは一応、勉強はしましたね。ただ、技術的なこととか、そういうのは全く触ってなかったです。" },
    { name: "Jan", text: "新入社員研修の中で、具体的に何を学ぶのかも少し聞きたいと思います。" },
    { name: "Nozomi", text: "新入社員研修の時は、私の会社の中でも年によって結構変化していて、どういうのが適切なのかっていうのをちょっと測ってる最中ではあるんですけど、私の第の時は、最初の1ヶ月に関しては、基本的な知識、インターネットってなんだろうみたいな、そういうところから座学的な研修をして、その間は基本的に在宅でみんなこういう感じでオンラインでやって、そのあとの2ヶ月はsqlとシーシャープの研修を一通りた感じですね。それは普通に出社してみんなで集まってって感じで個人作業を進めるっていう形でやってました。" },
    { name: "Jun", text: "就職して会社に入った直後に、厳しかったこととか、本当に辛いなという経験が特にあったら少し話し聞いてみたいと思います。" },
    { name: "Nozomi", text: "新卒で入ってからもう3ヶ月ぐらいは研修っていう期間があったんですけど、その期間でやっぱり同期の中で私と同じように何も経験してきてない人もいれば、理系の学校出たの経験者っていうんですかね、その差は若干感じて、ちょっと全然自分わかってないなっていうふうに不安になることはありました。" },
    { name: "Jun", text: "最初にit業界に興味を持って就職生活をしてからは就職して、その前まで持っていたit業界への印象と印象と今持っているit業界への印象が変わったとか、最初はこんな印象だったのに今はこんな認証ですよという説明少しもらえますか。今なさっている仕事の中でも、全然大丈夫です。" },
    { name: "Nozomi", text: "仕事の中だと、最初の研修の時は、言語がわかってソースがかけるようになれば、こう、いくらでも自分で開発できるんだろうなっていう、そういう結構安直な考えでいたんですけど、言語がわかるようになったとて、いいコードかけるかっていうと、そうじゃないんだなっていうのはすごい感じていて。" },
    { name: "Nozomi", text: "一緒に仕事をしている上司の中で、すごくなんか、プログラミングももちろんすごく知識もありますし、Itっていうもの全体に対して、結構こう、知識を持ってるかがいて、そういう方を見てると、ただ動くコードを書くだけじゃなくて、いろんな面を考えてコードを書いてるんだなっていうのをすごく感じるので、コードがかけるだけじゃなくて、どういうの書いたらもっとうまく動くかとか、ほかの人が読みやすいかとか、その要件を満たすことができるかみたいな、思考力っていうのがあるのも大事なんだなっていうの、最近すごく感じてます。" }
  ];

  modoriButton.addEventListener("click", function (event) {
    event.preventDefault();
    const targetUrl = this.getAttribute("data-target-url");
    sound.currentTime = 0;
    sound.play();
    setTimeout(() => {
      window.location.href = targetUrl;
    }, 1000);
  });


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
    buttonContainer2.classList.toggle("show");
    const buttons = buttonContainer.querySelectorAll('button');
    const buttons2 = buttonContainer.querySelectorAll('button');
    buttons.forEach(button => {
      button.classList.remove('hidden');
    });
    buttons2.forEach(button => {
      button.classList.remove('hidden');
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

  const buttons2 = buttonContainer2.querySelectorAll('button');
  const skipButton = buttons2[0];
  const speedButton = buttons2[1];
  skipButton.addEventListener("click", () => {
    currentTextIndex = dialogData.length - 1;
  });

  speedButton.addEventListener("click", (event) => {
    event.stopPropagation();
    switch (typeSpeed) {
      case 1:
        typeSpeed = 2;
        break;
      case 2:
        typeSpeed = 4;
        break;
      case 4:
        typeSpeed = 1;
        break;
      default:
        typeSpeed = 1;
        break;
    }
  });

  startTyping();

});
