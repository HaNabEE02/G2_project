document.addEventListener("DOMContentLoaded", function () {
  const dialogText = document.getElementById("dialog-text");
  const dialogName = document.getElementById("dialog-name");
  const dialogAnnotation = document.getElementById("dialog-annotation");
  const dialogBoxName = document.querySelector(".dialog-box-name");
  const characters = {
    石崎さん: document.querySelector(".nozomi"),
    ソンスンジュン: document.querySelector(".son"),
    ジャンドンヒョク: document.querySelector(".jan"),
    ジョンビョンチャン: document.querySelector(".jeon"),
    ジョンヘスン: document.querySelector(".jun")
  };
  const menu_ico = document.querySelector(".menu-ico");
  const buttonContainer = document.querySelector(".button-container");
  const buttonContainer2 = document.querySelector(".button-container2");
  const subButtonContainers = document.querySelectorAll(".sub-button-container");
  const modoriButton = document.querySelector(".modori-main");
  const sound = document.getElementById("button-sound");

  const dialogData = [
    { name: "ジョンビョンチャン", text: "まず、石崎さんの自己紹介をお願いします。" },
    { name: "石崎さん", text: "石崎希と申します。今1998年生まれなので、日本だったら今25、6になる年で、韓国だと多分27になるだと思います。大学卒業してから就職、すぐ就職してit系の会社に勤めていて、今もその会社で仕事をしてます。"},
    { name: "ジョンビョンチャン", text: "現在、どのようなプログラミング言語使って仕事をなさっているのか聞きたいです！" },
    { name: "石崎さん", text: "私が今やってるのは、webサイトでホテルの予約とかができるようなサイトのフロントエンドの開発をしてるんですけど、基本的にはリアクトタイプ、スクリプト、その辺を使ってます。" },
    { name: "ジョンヘスン", text: "今のオープンリソース株式会社に就職したいと決めたきっかけなどがありますか。その会社のどこが好きで、この会社にしなければという気持ちを持ったのか、それも少し聞いてみたいと思います。" },
    { name: "石崎さん", text: "今の会社にまずなんだ面接をしに行ったきっかけとしては、日本だと就職サイトに登録するとこう、オファーみたいな、あっちから面接に来てみませんか。みたいなオファーをいただくっていうタイプの、そういうサイトがあるんですけど、そこでオファーをいただいて、" },
    { name: "ジョンヘスン", text: "今、そのオープンリソースって会社が、私が勤めてるit系の会社なんですけど、もう1個、グッドデイズかなっていう、も1個、不動産の会社をやってるとことグループの会社になってまして。そのグッドデイズっていう方をサービスとして、その不動産サービスをやってるのを知っていたので、ちょっと話聞きに行ってみようってことで、面接に行きました。" },
    { name: "石崎さん", text: "その時に面接担当してくださった人事の方が、すごい話をよく聞いてくださって、でも、なんか簡単な、こう、筆記試験みたいなとかをして、グッドデイズに関心を持ってきてくれたと思うんだけど、エンジニアって仕事もどうな会うと思うんだけどどうかな。っていうふうにご提案いただいて、その道もありかなと思ってきめました。" },
    { name: "ジョンヘスン", text: "今、会社でit業界で働いているんですけれど、元々の専攻は、なんか音楽系、メディア系だったと思うんですけど、何の専攻か、ちょっと教えていただきたいです。" },
    { name: "石崎さん", text: "比較芸術っていう、学科だったんですけど、基本的に音楽っていうのと演劇、映像ていうのと美術っていうの、半分野があって、それを統括的に学ぶみたいなことをしてました。自分がこう、作品を作ったりとか、そういうことではなくて、作品を見に行ったりだとか、鑑賞したりとかして、比較芸術って名前にもあるように、aって作品を見て、bって作品を見て、違う比較して、比較することでより見えてくるものがあるんですけど、そういうのを、、評価したりとかていうことをしてました。" },
    { name: "石崎さん", text: "勉強っていうよりは趣味みたいな要素が強くて、一緒に勉強してた学校の友達もすごい、歌舞伎がすごい好きだったりとか、あと宝塚っていう、女性が男性役も全部やるっていう演劇があるんですけど、そういうのがすごい好きっていう友達がいたりとか、実際ミュージカル自分でやってるっていう友達もいたりとか、そういう、ちょっと面白い学科に所属してました。" },
    { name: "ソンスンジュン", text: "非専攻ながら、it業界に興味を持ったきっかけなどがあったらぜひ聞いてみたいと思います。それとも、itいいなと思い始めたきっかけなどとか…"},
    { name: "石崎さん", text: "最初に就職活動してた時は、専攻と関連してエンタメ系、音楽とか映画とか映像とか、そういうのをやりたいなって思ってたんですけど、技術だったりとか、実際に何かしたっていうところがないと、やっぱり就職するのが難しくで、そっちの方面は途中で諦めて、その他に興味があったitっていうところにたどり着いた感じです。" },
    { name: "石崎さん", text: "日本だと、専攻に関係なくても結構いろんなとこに就職することが新卒だったらできるので、そういうのもあってit業界に入りました。itが良いというよりは、他に特に興味があることがなかったっていうのと、今後it関係のところにいればもう成長していくだろうなっていう考えもあって、そこに入りました。" },
    { name: "ジョンビョンチャン", text: "日本it業界に就職する、今、働いているその会社に就職する前には相手の勉強をしたことが全然なかったという話を聞いたんですけれども、内定をもらってからitの勉強をされたとかが、ありますか。" },
    { name: "石崎さん", text: "ほんとに全然勉強してなくて、な一応、未経験でも大丈夫っていう形で内定をいただいて就職することにしたんですけど、不安ではあったので、人事の方に「こういうの勉強した方がいいのってありますか。」っていうのは質問して、簡単な資格みたいなところは一応、勉強はしましたね。ただ、技術的なこととか、そういうのは全く触ってなかったです。" },
    { name: "ソンスンジュン", text: "新入社員研修の中で、具体的に何を学ぶのかも少し聞きたいと思います。" },
    { name: "石崎さん", text: "新入社員研修の時は、私の会社の中でも年によって結構変化していて、どういうのが適切なのかっていうのをちょっと測ってる最中ではあるんですけど、私の第の時は、最初の1ヶ月に関しては、基本的な知識、インターネットってなんだろうみたいな、そういうところから座学的な研修をして、その間は基本的に在宅でみんなこういう感じでオンラインでやって、そのあとの2ヶ月はsqlとシーシャープの研修を一通りた感じですね。それは普通に出社してみんなで集まってって感じで個人作業を進めるっていう形でやってました。" },
    { name: "ジョンビョンチャン", text: "就職して会社に入った直後に、厳しかったこととか、本当に辛いなという経験が特にあったら少し話し聞いてみたいと思います。" },
    { name: "石崎さん", text: "新卒で入ってからもう3ヶ月ぐらいは研修っていう期間があったんですけど、その期間でやっぱり同期の中で私と同じように何も経験してきてない人もいれば、理系の学校出たの経験者っていうんですかね、その差は若干感じて、ちょっと全然自分わかってないなっていうふうに不安になることはありました。" },
    { name: "ジャンドンヒョク", text: "最初にit業界に興味を持って就職生活をしてからは就職して、その前まで持っていたit業界への印象と印象と今持っているit業界への印象が変わったとか、最初はこんな印象だったのに今はこんな認証ですよという説明少しもらえますか。今なさっている仕事の中でも、全然大丈夫です。" },
    { name: "石崎さん", text: "仕事の中だと、最初の研修の時は、言語がわかってソースがかけるようになれば、こう、いくらでも自分で開発できるんだろうなっていう、そういう結構安直な考えでいたんですけど、言語がわかるようになったとて、いいコードかけるかっていうと、そうじゃないんだなっていうのはすごい感じていて。" },
    { name: "石崎さん", text: "一緒に仕事をしている上司の中で、すごくなんか、プログラミングももちろんすごく知識もありますし、Itっていうもの全体に対して、結構こう、知識を持ってるかがいて、そういう方を見てると、ただ動くコードを書くだけじゃなくて、いろんな面を考えてコードを書いてるんだなっていうのをすごく感じるので、コードがかけるだけじゃなくて、どういうの書いたらもっとうまく動くかとか、ほかの人が読みやすいかとか、その要件を満たすことができるかみたいな、思考力っていうのがあるのも大事なんだなっていうの、最近すごく感じてます。" },
    { name: "ソンスンジュン", text: "it業界で私たちが聞くには、割とコミュニケーション能力が大事ということなんですけれど、それは本当になんかコミュニケーション能力が一番大事という会社もあって、それがどうなのか少し聞きたいです。"},
    { name: "石崎さん", text: "1番ではないとは思うんですけど。さっき話したように、コーディングできるだけじゃダメだなっていうのはすごく感じていて。例えば、自分がわかんないことがあった時に、人に質問したいってなった時に、こう、自分が今どういう状況で、どういうところがわからなくて、何を知りたい。みたいなのをうまく伝えられる力っていうのは大事だなって思ってます。" },
    { name: "ジョンヘスン", text: "it業界で残業とか、仕事の両が多いとご存じなんですけれど、そういうストレスちょっと溜まると思います。そういうストレスの発散とかはどうしたら大丈夫か今どうしてるのかがお聞きしたいと思ってます。" },
    { name: "石崎さん", text: "結構、友達に話して解消するタイプなので、友達と遊びに行って、最近こうですっていう風に近況報告したりとかして、解消したり。友達と会えない時は、悩み事があるのを結構書いて整理するのが落ち着くタイプなので、日記を書いてみたりとか、自分が今何に悩んでて、ん。その原因は何で、じゃ何解決すればいいのかなっていうのを割とバーって書き出して、そういうことだったのかって整理してみて落ち着くっていう形で解消してます。" },
    { name: "石崎さん", text: "日記は具体的なことは特に書かないんですけど、今こういうところで詰まってて、詰まってる原因は何かみたいな、感情的な面を基本的には書いてるかなと思います。技術面とかでわからないことはしょうがないので、上司に結構こういうとこが分かんなくて、こういうとこで詰まっててっていうのは話すようにしてます。" },
    { name: "ジョンビョンチャン", text: "非専攻者として協力に入って、専攻者の同期がいると言いましたが、そのような人とどんな差があったと感じましたか？そのような差を乗り越えるためにどのような努力をしましたか？" },
    { name: "石崎さん", text: "最初の研修の方は時は本当に良かったんですけど、途中から本当に全然分からなくなって。これはまずいなと思って、自主的にちょっと勉強不足で勉強したりして、その分からないところを補いましたね。その後、同じチームじゃなかったら、結構人それぞれやってる言語も違いますし、関わってるシステムも全然違いますので、それをちゃんと理解して、もちろんすごくできる人を目標にすることは大事だと思いますけど、自分には今何ができて、逆に何が足りてないのかを見て、自分に足りないところを補っていくっていうのが大事かなと思います。" },
    { name: "ジャンドンヒョク", text: "非専攻者に向けて、何かもう一言、なんか頑張ってほしいなとか、これからこういうのはちょっと辛 いかもしれないっていうことがあったら、ちょっと一言お願いします。" },
    { name: "石崎さん", text: "もちろん、最初に持っている知識の差や、自分に合うか、合わないかもあると思うので、一概にすごくできる人とか、前からやっている人と比べて、自分のできてないところを見すぎると落ち込むのですね。 自分には何ができて、逆に何ができないのかっていうのをちゃんと見るのが大事なのかなと思ってます。あとは、やっぱり関心を持ってる人とか、自分がそれを好きだと思っている人はやっぱりそれが大きいな力になるし、強みになるとおもうので、専攻だったからどうとかではなくて、自分が今これやっているから、ここに関心を持とうとする気持ちで関心を持って取り組むのが大事なのかなと思ってます。私ができているかどうか、ちょっと心がけが大事かなと思ってます。" },
    { name: "ジョンヘスン", text: "韓国に6ヶ月間留学に来ましたが、留学したきっかけとどのように行ったのか教えて下さい。" },
    { name: "石崎さん", text: "最初にと、2020年にコロナの時に家で過ごす時間が長くて、外にもなかなか遊びに行けないしってことで、自分で家で何か時間使えることないかなって思ってドラマ見始めたのがきっかけ。1番最初のきっかけで。ただドラマ見てるだけなのでちょっともったいないなっていう風に感じて。そん時大学4年生だったんですけど、日本だと結構大学4年生って授業もないし、就職活動も終わってれば他に本当にやることがなくて。っていう状態だったので、見てるだけじゃもったいないから勉強してみるかって思って韓国語を勉強し始めました。" },
    { name: "石崎さん", text: "留学は去年（2023年）9月から今年（2024年）の2月末ぐらいまで約半年間行っていました。その間、仕事に関しては休職して行きました。釜慶大学校の語学堂に通って、平日は朝から昼過ぎぐらいまで授業受けて、その後は自由時間でした。きっかけとしては、韓国ドラマ見るのは好きです。自分がこれまでハマったことがなかったので、もっと極めてみる気持ちで行きました。そして、これだけ好きで、自分でずっと続けられるものだったら、もっと頑張りたい気持ちで決断しました。" },
    { name: "ジョンヘスン", text: "韓国にいる時に大変だったことが特になかったんですか？" },
    { name: "石崎さん", text: "最初の2日3日ぐらいは若干自分が知ってる人が誰もいない状態だったので、ここでうまくやっていけるかなっていう不安はありました。" },
    { name: "ジョンヘスン", text: "そのような不安はどう解決したのでしょうか？" },
    { name: "石崎さん", text: "まず自分で周辺を1人で探索して、ここがどういう、お店が周りにあるのか、どういう町なのかっていうのは見に行って。もう1つおっきかったのは、元々その語学堂に通う予定だった人と元々snsで繋がってたんですけど、その人も寮に同じ寮に住んでいて、一緒にご飯食べようってことになって、うん、なんだろうな、お互い知ってる人がいない状態だったっていうのがあって、割とすぐ仲良くなって、結局ずっと留学してる間一緒に仲良くいろんなとこに行ったりとかしてたので、なんだろうな、1人でもいいから自分が知ってて、自分と一緒に頑張れる人がいるっていうのは結構大きかったなと思います。" },
    { name: "ジョンビョンチャン", text: "留学来た時に、交流会のスタッフして仲良くなったけど、このような交流会のスタッフやボランティア活動で日本人の友だちが出来るかな？" },
    { name: "石崎さん", text: "勿論、一緒の職場で仕事をしている人と仲良くなることも方法だと思いますが、仕事をしていると思ったより仲良くなり難いかも知れません。人によりますし、職種にもよりますが、私の体感的には、ITやコーディングなどの仕事についた人だと若干難しいと思います。実際の交流会もいいですし、SNSなどでもいいと思います。日本人でも韓国人でも自分がなれる人なら良いと思いますが、日本にいる韓国人の方や韓国語を勉強している日本人、そのような形で自分のこと助けてくれる人、一緒に協力し合ってできる人はいた方が良いと思います。" },
    { name: "ソンスンジュン", text: "最後に何か一言したいことがあったらお願いします。" },
    { name: "石崎さん", text: "自分がやろうって決めたことだったら、一生懸命やればいくらでもできるようになると思いますし、適応できると思うので,その選択が間違ってないんだっていう確信を持って進めるように、うまく選択できることを祈ってます。" }
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

      if (currentDialog.name === "石崎さん") {
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
