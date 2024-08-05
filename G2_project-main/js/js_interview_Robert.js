document.addEventListener("DOMContentLoaded", function () {
  const dialogText = document.getElementById("dialog-text");
  const dialogName = document.getElementById("dialog-name");
  const dialogAnnotation = document.getElementById("dialog-annotation");
  const dialogBoxName = document.querySelector(".dialog-box-name");
  const charA = document.querySelector(".Char-G2_EXP2");
  const charB = document.querySelector(".char-Robert");
  const menu_ico = document.querySelector(".menu-ico");
  const buttonContainer = document.querySelector(".button-container");
  const buttonContainer2 = document.querySelector(".button-container2");
  const subButtonContainers = document.querySelectorAll(".sub-button-container");
  const modoriButton = document.querySelector(".modori-main");
  const sound = document.getElementById("button-sound");
  const buttons = buttonContainer.querySelectorAll('button');
  const buttons2 = buttonContainer2.querySelectorAll('button');
  const skipButton = buttons2[0];
  const speedButton = buttons2[1];
  const dialogData = [
    { name: "チームExp.", text: "まず、Robertさんの自己紹介をお願いします。" },
    { name: "Robertさん", text: "92年生まれ、名前はRobert、以上です。"},
    { name: "チームExp.", text: "幼いことから様々な海外の経験がある方だとお聞きしておりますが、その中で、アメリカに行こうとした理由があれば聞きたいです。"},
    { name: "Robertさん", text: "アメリカ合衆国は外国からの人材の受け入れに非常に寛容な国です。アメリカは移民の国であり、特定のアイデンティティを持たない国です。ナチスが敗北した後、ナチスの才能が持ち込まれたことを見ても、アメリカがいかに優れているかが分かります。つまり、アメリカほど実力主義で成果主義の社会はありません。自分自身と自分の能力に信頼を持てる社会は他にないのです。自信があればアメリカに行かない理由はないと考えました。アメリカは最もシンプルな形で自分の潜在能力を発揮できる場所です。" },
    { name: "Robertさん", text: "韓国では飛躍や挑戦の障害が多いですが、アメリカにはそのようなものはありません。韓国では仕事でミスをしても解雇されることはありませんが、アメリカでは明日にも解雇される可能性があります。つまり、上手くやれば24歳でも非常に高いレベルに達することができるのです。競争自体が非常に公平な社会であったと思います。私の家族全員がアメリカの大学を卒業し、中学を中退して韓国の教育に対して多くの懐疑的な意見を持っていたため、当時直面していたすべての状況を考慮して、自分の能力が高く評価されるアメリカに行くことを決めました。" },
    { name: "チームExp.", text: "最初に海外にでなければって思った理由がありますか？" },
    { name: "Robertさん", text: "目を開けたらイギリスにいました。これは自分の意志というよりも、家族環境の影響だと思います。フィリピンの場合、さまよいの時期に韓国から出たいと思い行きました。アメリカに行ったのは、そこで勉強したいと思ったからです。学ぶことに対する情熱がありました。中国も学ぶことに情熱を持っていると思います。中国語を学びたかったし、東洋学を専攻していたので、その経験を積むために行きました。その文化を学びたかったのです。好奇心に基づく行動が多かったです。" },
    { name: "チームExp.", text: "元の名前ではなく、自分で決めた名前を使う理由がありますか？" },
    { name: "Robertさん", text: "私は自分自身の名前で独立して生きようとしています。親から与えられた名前ではなく、「私」として生きるために、自分で選んだ名前を使っています。" },
    { name: "チームExp.", text: "海外就職についてどのように考えているのか聞いてみたいです。" },
    { name: "Robertさん", text: "できるならやったほうがいいと思います。とりあえず就職しなさい。 絶対仕事をしてほしい若いうちにできるだけ多くの経験を積むべきだと思います。それが将来のスペックになるでしょう。海外に行くこと自体が文化を体験し、他の言語に触れることを意味します。言語は文化と最も密接に関連しているので、海外に行って生活するだけで自然に言語を学び、それをマスターすることができます。その過程で多くを学び、大きな成長が得られると信じています。" },
    { name: "チームExp.", text: "私たちのテーマそのままの質問になりますが、新しい環境によく適応して活躍するためにはどうすればよいでしょうか" },
    { name: "Robertさん", text: "持っているものを捨て、アメリカに行くときはアメリカ人のように生活することです。ローマに行ったらローマ法に従えと言いますが、今でもそれは変わりません。個人の能力が重視される時代です。努力して自分を現地に適応させ、人々と一体となって生活することが大切です。そうすれば、いずれ不快感を感じることなくうまくやっていけるでしょう。その文化に適応するためには柔軟性が必要です。韓国人だからと言って韓国人のようにするという考えは捨てましょう。彼らがやっていることを一緒にやってみることです。やってみてできないと言うのと、試しもせずにできないと言うのは違います。できるだけ多くの失敗を経験し、受け入れられることを受け入れることが重要です。" },
    { name: "Robertさん", text: "変化こそが適応であり、環境の変化を拒まないことです。それを拒めば、現地の人々からも奇妙に思われるでしょう。そのルールの中で動き、決断することが求められます。最も重要なのは、個人の能力が優れていることです。意識的にそれを捨てる努力をするのと、考えずに感情的な努力をするのは違います。常に意識し、自分の意志を実行することが大切です。自分は韓国人だと言うより、自分は自分だと認識して生きるべきです。海外に行くと、最初は誰でも難しいものです。しかし、それを続けることで、多くの経験と成長が得られると思います。" },
    { name: "チームExp.", text: "韓国と海外の文化の違いや、韓国とアメリカの文化の違いを聞いてみたいです。" },
    { name: "Robertさん", text: "韓国とアメリカの最大の文化的違いは、韓国が謙虚さを美徳と考える一方で、アメリカは謙虚さを罪と考えることです。謙虚さは無価値さを意味します。英語で「謙虚（humble）」という言葉は、韓国では恐れや挑戦しないこと、見せないこととして偽装されていますが、アメリカでは自分が持っているものを完全に明らかにし、それを活用する方法を見つけます。自分の価値をよく見せることが重視されます。謙虚さは自分の価値を明らかにするのを防ぐ役割を果たしていると思います。" },
    { name: "Robertさん", text: "あまり持っていないものを明らかにしないことが、時には謙虚さとして偽装されていることが多いと思います。最大の違いは国民性、儒教文化とキリスト教文化の違いだと思います。韓国は基本的に、学校の制服から始まり、多くの個性を放棄させる社会です。だから、多くの韓国人は自分が本当に何を望んでいるのかも知らずに生きていると思います。しかし、アメリカはむしろ自己客観化が得意だと思います。" },
    { name: "Robertさん", text: "韓国では基本的に社会が定めた幸せの基準に自分を合わせようとします。そのため、自分が幸せだと感じることが少なく、常に苦しんでいるように感じます。人によって異なりますが、基本的に韓国人は明るさが不足していると思います。" },
    { name: "チームExp.", text: "個性を放棄させる社会とのことでしたが、個性がある人になるためにはどうすればよいでしょうか" },
    { name: "Robertさん", text: "恥を捨てましょう。気にしないようにしましょう。アメリカでは「I like summer」のように主語、動詞、目的語が正確に現れますが、韓国語では主語や目的語の省略が多く、「聞き手の察し」に依存する結果を生むことがあります。理解できなければ理解しない人を非難する文化もあります。論理構造が欠如している韓国語は、多くの言い回しができ、聞き手に任せて解釈させるという意味で言い換えることができます。" },
    { name: "Robertさん", text: "このようなコミュニケーションは聞き手の洞察力に依存しています。コミュニケーション方法自体が曖昧で直接的に見られることを嫌う韓国文化を表していると思います。韓国語では、議論を理解するために最後まで聞かなければならないのは非効率だと思います。今日は韓国の悪い点ばかり話している気がします。韓国にも良い点がたくさんあると思います。韓国は個人の価値よりも共同利益を優先したため、組織の利点を活かして急速に発展したと思います。しかし、現在は個別化が進行中なので、この面は自然に変わるべきだと思います。そして、韓国は交通と公共医療において大きな強みを持つ国だと思います。" },
    { name: "Robertさん", text: "韓国は特に努力しなくても生活できる国だと思います。しかし、人々の意識のレベルがまだ環境に完全に満足している段階に達していないため、幸福感を感じていないようです。" },
    { name: "チームExp.", text: "アメリカやイギリスで差別を受けた経験がありますか？" },
    { name: "Robertさん", text: "最初にイギリスに行ったとき、何も知らず、幼かったです。私にリンゴを投げる子供たちがいましたが、行ったイギリスの地域はかなり裕福な地域で、学校では私だけがアジア人でした。イギリスにはまだ階級があり、貴族的な英語が話されていました。その地域に住んでいたため、最初は差別を受けましたが、韓国に戻る前には逆にその子供たちをいじめていたと思います。" },
    { name: "Robertさん", text: "結局、それを克服したいならできると思いますし、最大の要因はどんな心構えで生きるかだと思います。その時、私は自分をイギリス人だと思っていました。イギリスに行ってから約2週間後には現地の人のように話し始めたと母親に言われたのを覚えています。" },
    { name: "チームExp.", text: "差別に対処する方法についてもう一度聞いてもらえますか" },
    { name: "Robertさん", text: "既に持っているすべてを捨てて生きることです。韓国人だからイギリスで自分なりに生き残ろうと考えるのではなく、「イギリスにいるからイギリス人だ」と思って生きることです。それだけで十分だと思います。イギリス人が私をイギリス人だと感じ始めたら、人種差別は起こりません。私は自分をどの人種にも属しているとは思っていません。韓国人やアメリカ人のように考えるのではなく、自分をただ地球人だと思っています。韓国語を話すために韓国人である必要はなく、英語を話すためにアメリカ人である必要はありません。" },
    { name: "Robertさん", text: "そもそも人種というのは非常に曖昧な概念です。100％遺伝的なものは存在しないので、人種差別は最終的にはその人の国籍や国民性に起因します。ですから、彼ら（イギリス人）と全く同じ言語を話し、同じように考え行動すれば、相手は違和感を感じることはありません。人文学の分野でもよく言われているように、言語は最も重要です。彼らの言語（文化）を受け入れて適応すれば、その国のネイティブになるのです。" },
    { name: "チームExp.", text: "差別以外に、外国で住むことで大変だったことがありましたらお聞きしたいです。" },
    { name: "Robertさん", text: "基本的に、人生において人は困難に直面せざるを得ないと思います。若い頃、人生の不条理さを感じました。目を覚ましたら既にイギリスにいたこと自体が非常に不愉快な経験でした。長期間の安定感を感じたことは一度もありません。しかし、それは避けられないことでした。それが私の現在の状況（様々な外国に連続して移動する）であり、適応せざるを得ませんでした。適応しなければ取り残され、そうなれば成長が止まります。私が言えることは、私が同年代の人々よりも多くの克服や失敗の経験を持っているということです。" },
    { name: "Robertさん", text: "人々からよく「そんなふうに生きると疲れないの？」と聞かれることが多いです。私にとってそれが当たり前なので、周囲の人々の認識から、私は怠け者であっても普通に一生懸命生きている人々よりも一生懸命生きていると感じ、実際にそのように生きてきたと思います。これまでの環境が私をこのようにしたのだと思います。" },
    { name: "Robertさん", text: "だからこそ、他の人々には挑戦し、失敗し、克服することを勧めることが多いです。しかし、人々は失敗を非常に恐れています。同時に、何かに挑戦して失敗する人々を批判する社会だとも思います。私の観点から見ると、勝とうとして失敗した人々と、勝とうともせず何もしないで悪口を言う人々がいます。前者のほうが良いと思います。実際に私は多くのそのような経験をしており、人生は本質的に不条理であり、一連の苦痛だと思います。少なくとも、自分で選んだ環境で苦しみたいと思っています。" },
    { name: "チームExp.", text: "Robertさんは人を接するときにどのような態度で接しようと努力するのか聞きたいです。" },
    { name: "Robertさん", text: "その人を好きになる努力をします。その人を好きになる努力をすると、その人に対して質問が増え、その人も私に好意を示しやすくなると思います。意図的に人を好きになる努力をします。そうしないと、私は人の欠点をすぐに見てしまう癖がある人だと思います。基本的に私は批判的な人間なので、このような考えを減らして、より多くの人々と会うようにしています。その人と深い会話をするためにはこれが必要です。最も重要なのは、その人を好きになる努力をすることだと思います。それが本当でないと判断するまでにどれだけの時間がかかるかが重要です。" },
    { name: "Robertさん", text: "この人と十分に深い会話をし、その人の暗い部分を見たとき、その人のある側面を見て嫌いになるのは間違っていると思いますし、そこに到達する前に既に嫌いな態度で接するべきではないと思います。そのように慎重に人と会話をしても、その人が自分を嫌いだと判断した場合、その人に関与する必要はないと思います。" },
    { name: "チームExp.", text: "英語はもちろん、日本語、中国語もできる方だと聞いたのですが、学ぶときに難しかったところがあったら聞いてみたいです。" },
    { name: "Robertさん", text: "困難よりも喜びが多かったです。まず、私の知的欲求が多く満たされましたし、言語を学ぶ過程で知らなかった文化の一部を理解する瞬間があり、それが非常に興味深かったです。基本的に私は勉強が好きです。新しいことを学ぶのは楽しいです。ほとんどのことは楽しく学べると思います。本を読むのが好きで、昨日もブッククラブに行きました（インタビューの日基準）し、今日もまた行く予定です。本を読んで話し、新しい情報を学ぶのは楽しいと思います。" },
    { name: "Robertさん", text: "言語も同じだと思います。この人と会話をするためには、この人の文化や言語を知る必要があり、常に話しています。だからこそ、私が話す言語は学校で暗記したり勉強したりするような言語ではなく、むしろ文化を受け入れるものです。言語には多くの例外があり、すべての言語は比喩だと思います。携帯電話は携帯電話ではなく、私たちが携帯電話と呼ぶことに決めたから携帯電話なのです。言語自体には意味がありません。言語はコミュニケーションの一つの方法であり、最終的には文化を理解するための最良の方法だと信じています。" },
    { name: "チームExp.", text: "文化を理解するためには言語を学ぶことが最もだとおしゃったのですが、そういうことを感じた経験がありますか？" },
    { name: "Robertさん", text: "例えば、日本語の「違う」という言葉は異なる意味を持ちますが、「間違っている」という意味もあります。日本では、違うことが間違いを意味することがあります。これは無意識のうちにそのように受け入れてしまう人が多く、小さな文化になる可能性があります。韓国にも同じような人がたくさんいます。異なることを間違いだと言う人が多いです。無意識にそのような考えが根付いていると、人々は違いや個性を恐れるようになります。これが、文化が言語に現れる部分だと思います。" },
    { name: "Robertさん", text: "もう一つの例を挙げると、アメリカでは「I have nothing」と言います。これは否定的な文ではありません。この文を見れば、私は何も持っていない状態ではなく、何も持っていないという形です。これは何も持っていないことを意味します。ゼロの概念はインドで最初に登場しました。このようなことを考えると、文化が言語に現れることは明らかだと思います。" },
    { name: "チームExp.", text: "自分が本当にやりたい仕事を探す方法は何だと思いますか？" },
    { name: "Robertさん", text: "すべてを試してみる必要があります。基本的に、人々は考えているという錯覚を抱いています。それは普通の思考ではなく、心配です。これをやったらどうなるのか？この考えは心配です。量子力学を例に挙げると、シュレディンガーの猫を考えてみてください。箱の中を見て初めて猫が生きているか死んでいるかが分かりますが、見る前に箱の中に何があるのかを心配して恐れることが心配です。" },
    { name: "Robertさん", text: "基本的に、中を見て猫が死んでいるか生きているかを確認し、次の選択肢を持つことが必要です。なぜ見てもいないのに心配するのか考えてみると、それは恐怖からだと思います。 結局、これは続く話です。壁に頭をぶつけて血が出たら血を拭き、目の前の壁が崩れたら勝ったと思うのは簡単です。挑戦と経験が何よりも重要だと思います。 " },
    { name: "Robertさん", text: "心配と考えを区別するようにしています。思考は基本的に創造的な行為であり、選択をする際に考えることでその選択肢を選ぶことができ、これをするとどうなるのかを考えるのは心配と懸念です。正しい考え方は、選択をし、その結果を見て再び考えることです。何かを達成するには0から100が必要だとしましょう。すべての100を作る必要はありません。" },
    { name: "Robertさん", text: "しかし、0から1を作るためには、まず自分で取り組む必要があります。まず始めなければなりません。2年間で英語をマスターすると言う人がいれば、それは何も知らないと言っているのと同じです。自国の文化が2年で終わることがないのに、他国の文化が2年で終わると期待するのは無意味です。運動も同じです。2ヶ月間運動した後、一生懸命頑張ったと誤解することがあります。率直に言えば、30年間豚のように生きて（運動せず）2ヶ月間人間のように生きること（運動する）は、人間（運動する人）になることではありません。" },
    { name: "Robertさん", text: "私はこれが正しい意見であり、正しいと思います。人々は大きな間違いを犯しています。変化は繰り返しから生じ、違いを生むためには絶え間ない繰り返し、挑戦、試みが必要です。試みの後に結果が出て、修正し再び挑戦することで違いが積み重なり、大きな変化が生じます。それがその人を形成する要素になります。難しいと思うのではなく、ルールを作り、そのルールを剣のように守ることです。" },
    { name: "Robertさん", text: "週6日運動することを決めたら、それを考えずに実行するだけです。 でも、人々はそれが難しいと言います。しかし、難しいと言い続けるなら、なぜ生きているのでしょうか？基本的に、人々は情熱を持って生きていません。これまで話してきたような情熱を持つ機会が一度もなかったからです。" },
    { name: "チームExp.", text: "インタビューは以上ですが、何か最後に一言お願いします。" },
    { name: "Robertさん", text: "失敗し、修正しましょう。修正するには失敗が必要です。他人の目を気にせずに生きましょう。世界はあなたが思うほどあなたに関心がありません。成功は保証されませんが、基本的に成功している人々は多くの失敗を経験している人々です。" }
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

      if (currentDialog.name === "チームExp.") {
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
          dialogText.textContent = "もう一度クリックして、メイン画面に戻る";
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
