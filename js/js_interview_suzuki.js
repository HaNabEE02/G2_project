document.addEventListener("DOMContentLoaded", function () {
  const dialogText = document.getElementById("dialog-text");
  const dialogName = document.getElementById("dialog-name");
  const dialogAnnotation = document.getElementById("dialog-annotation");
  const dialogBoxName = document.querySelector(".dialog-box-name");
  const charA = document.querySelector(".Char-G2_EXP2");
  const charB = document.querySelector(".char-Suzuki");
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
    { name: "チームExp.", text: "まず、鈴木和夫様の自己紹介をお願いします。"},
    { name: "鈴木さん", text: "はい、自己紹介ですね。鈴木和夫と申します。和歌山県で生まれました。大学は、京都にある大学に行きまして、就職がですね、1番最初、大学卒業してすぐですね。大学はね、法学部、法律を学んでました。就職した先は、石油化学、ペトロケミカルの会社で、日本ではかなり大手の会社ですね。4万人ぐらいの従業員が会社に行きました。最初に配属されたのは大阪の工場です、コンビナートで、物流とかですね、生産計画とか、5年間ぐらいやってました。そのあと移動で、東京の本社が東京にありましたんで、本社に行って、そこからは営業とかマーケティングですね。"},
    { name: "鈴木さん", text: "そのあとシンガポールに子会社で生産拠点もあったんで、6年ぐらいシンガポール行って、また日本本社に戻って、15年ぐらい経ったんですね。そこから転職。神戸にある会社で、ベンチャー企業に入って、短かったんですけど、1年ぐらいですね。それからまた会社を変わって、今私がいる会社なんですけど、BANDO化学っていうところなんですけど、そこに移って、今に至る。今に至るんですけど、本社で5年定で、その後、アメリカ、シカゴ、シカゴには、その子会社があって、シカゴに移動して、8年で、さらに韓国に移動して、今2年目ですね。趣味は運動することで、テニスとかゴルフをやってます。今もやってますね。"},
    { name: "チームExp.", text: "今、韓国で仕事をしてると思うんですけれど、今の会社に入ったきっかけとかあったら教えてください。" },
    { name: "鈴木さん", text: "BANDO化学に入ったきっかけは、ちょっとさかのぼると、1社目のその石油化学の会社ですね。仕事のね、不満は全然なかったんです。転職するときも。ただ、シンガポールに駐在して、シンガポールの時、私がそのマーケティングのジェネラルマネージャーとか、セールスとか、マーケティングですね。" },
    { name: "鈴木さん", text: "お客さんっていうのも、大きな企業、普通もありますけど、個人でやられてる企業もあるんですよね。そのお父さんは、会長さんぐらいでいらっしゃって、息子さんが、英才教育ってわかるんですかね、すごい教育熱心で、2代目の人たちが、結構、アメリカの大学行ったり、mbaとか取って、ビジネスの勉強をして、後を都合としてるような、そんな会社が割と多かったんですね。", annotation: "※mba(アメリカ式経営大学院で主に3~7年前後の経歴者がフルタイムで修了する実務中心の経営学修士課程教育)" },
    { name: "鈴木さん", text: "私も、勉強頑張らないといけないなと思って、私もそのmbaを取ったんですね。オーストラリアの大学で、それがきっかけで、その最初の会社から次のベンチャーにちょっといろんなチャレンジをしてみたいなと思って転職したんです。今の会社のそのBANDO化学で、ベンチャーっていうのは当たりもあるし、外れもあって、ヨーロッパとか、出張が多かって、すごい経験にはなったんだけど、やはり生活も大事なんで。その今の会社に入ったきっかけっていうのが、その時に色々チャレンジができるような会社ですね。" },
    { name: "鈴木さん", text: "グローバルで4000人ぐらいの規模なんで、そこまで大きくないけど、そこまでちっちゃくもないで、まずまず安定してますっていう会社だったんで、色々チャレンジするにはいいかなと思って入ったんですけど、入る時の条件がまた海外に行きますよっていう前提で入ったんですね。部署も海外の会社の面倒を見る部署で1番最初はね、神戸で。そこに5年いて、その時担当したのが、アメリカとインドと韓国だったんです。そのうちどっかに行くかなと思ってて、アメリカになりましたね。きっかけはそんなとこですね。" },
    { name: "チームExp.", text: "自分が専攻した科目ではなくても、他の色々なところに就職することが多かったという理由でしたんですけど、なぜ石油化学の会社を選んだのか理由がありますか？"},
    { name: "鈴木さん", text: "私は製造業に行きたかったんです。物を作って世の中に出していくっていうところで製造業受けたっていうか、最後、その石油化学の会社と、電気、電気の会社、おっきな、両方とも規模は同じぐらいですね、両方とも、こう、内定をもらったんですけど、あんまりこだわりがなかったんですよ、こういうものを出したいとかっていうのです。やっぱりそこで、事務系なんすよね、法学部なんでの立場からして、サポート、いろんな活躍の場がある会社を探そうと思ったんです。" },
    { name: "鈴木さん", text: "こちらの電気系は割とね、もうこう狭いエリアをずっと行くようなキャリアで、先輩、両方先輩に会って、どんなこうキャリアを歩んでるのかな。私が22歳ぐらいの時ですから、30歳ぐらいまでの人しか会ってないんですけど、それより上っていうと、ちょっと会ってないんですけど、30歳ぐらいまでで、どんなこうキャリアを歩んでるんかなっていうのをちょっと見て、その石油化学の会社の先輩の方が、エリアも広く、やってることもこう幅が広かったですね。だから、こっちの方が色々やれるのかな、チャレンジする場所があるのかなと思って、その石油化学にしてたんですね。" },
    { name: "チームExp.", text: "新しい環境でどうやったら適応してうまく生きることができるのかっていうテーマがあるんですけど、それに関してはなんか考えていただけますか。"},
    { name: "鈴木さん", text: "やってみるしかないと思うんですよね。あんまりこうしたらうまくいくっていうのは王道ってないですね。これをやれば大丈夫ということはあまりないと思うんですね。だから、やっぱり基本は言葉も含めて、言葉。頑張る。そこの文化、歴史はやっぱり勉強する。それはレスペクト。やっぱどんな国であっても歴史があって、その文化があるんで、そこの人の考え方とかをまず理解しようとするのが大事だと思いますね。" },
    { name: "チームExp.", text: "はい。では、アメリカに派遣してから英語の勉強を始まりましたか。" },
    { name: "鈴木さん", text: "私がよかったなって思うのは、やっぱり海外で働きたい。働かないといけないって、これからね、海外に出ていかないといけないっていう意識があったんで、まず英語は勉強しようと思ったんですね。別の話になるかもしれないですけど、皆さんも社会人になられた時に。" },
    { name: "鈴木さん", text: "新入社員に知ってもらいたいこと。言語はやっぱりしっかりやらないといけないですね。プラス、じゃあこの先自分のこうキャリアがこう、方向がいくつかある上で、ここになったらこういう資格なりこういうスキルを身につけないといけないなっていうのは常に意識して、仕事は全力で頑張る。プラスちょっと余力でここを頑張っていくっていうのをやると、やっぱ成長できると思うんですね。" },
    { name: "鈴木さん", text: "チャンスをものにできる。なんでかというと、私の場合は、まず語学ですよ。皆さんもう大学4年生で、日本語がそれなりにね、勉強してできてて、多分他の意識も高いと思います。私は法学部ですけどね、私はもう会社入ってからもう勉強した感じですね。でも、良かったのは、まず英語をやらないといけないこと。英語はもうコツコツやっていきました。その次に、直接仕事に全然関係なかったんですけど、やはり事業とか企画をやっていく上では経理、会計、財務知識っていうのがいるんで、それも英語でやろうと思って、cpaを受けようと思って、アメリカの大学の、そのcpaに必要な大学の単位を取ったんです。", annotation: "※cpa(アメリカの公認会計士)"  },
    { name: "鈴木さん", text: "たまたま私、シンガポールのこう転勤があったんで、cpaの試験はね、アメリカに行かないと受けれないんですよね。なので受けなかったんですけど、受けれなかったんですけど、でも大学でその財務の単位を取ったのが良かったな。その次はmbaですね。もうその東南アジアに行った時に、我々のお客さんのその2代目とかがやっぱ海外でmbaとって、我々、私より遥かに高いその経営の知識を持ってるんですね。これはまずいなと思って、そのmbaを取りに行っきました。それも英語で撮るっていうのを意識して、英語は一貫性持ってやりつつ、プラスアルファの知識、これをそれなりの年代の時にやっぱりやり始めた。" },
    { name: "チームExp.", text: "アメリカ人がなんか仕事をする時に、方法とかが違くなるということですかね" },
    { name: "鈴木さん", text: "やっぱ仕事のやり方とか、それはやっぱ来るまでわからなかったんですよね。韓国の場合は徴兵とか行かれるじゃないですか。軍隊を経験されて会社に来られて、私のポジションとかでもね、言ったことを本当軍隊みたいにこうやっていってくれるんですよね。それはね、すごいびっくりしますね。アメリカ人は正反対ですね。上司の言うことを納得しないとやらないとかね。日本人と韓国はとりあえずやる。おかしいなと思いながらもやるでしょ。" },
    { name: "鈴木さん", text: "これね、アメリカ人は納得しないと、アウトプットがもう望むものじゃないとやらない。だから、インストラクションをちゃんとやらないと、期待するものがね、出てこないんです。これは大事ですね。やっぱり行く場所の文化なりを理解しないと、ほんとにね、そのチームでのアウトプットが出せない。" },
    { name: "チームExp.", text: "行く場所の文化とか歴史とかを話したんですけれど、そのためになんか勉強を事前にやって、その国に行く方がいいということでしょうか。" },
    { name: "鈴木さん", text: "そうですね。多分いくらでも本とかで歴史は分かるし、韓国と違って、アメリカなんかは2、300年ぐらいしか歴史がないんで。すごくわかりやすいんですけど、でも、そういうのは一応理解して、場所によっても、その東海岸、西海岸、中西部でまたね、人柄が変わったりするんでね。そういうのはちょっと前もってちょっと勉強した方がいいけで、やっぱり接してみないとわからないんで、そっからまた学んでいきますね。" },
    { name: "チームExp.", text: "いろんな海外で働いた経験があると聞きましたけど、そこで、なんか海外で働いている状況に関しては、海外の就職に関しては、どのような考えを持っているのかがしたいと、お聞きしたいと思います。" },
    { name: "鈴木さん", text: "皆さんは今は日本で働こうと考えられて、私の場合は日本で就職してそこから派遣されるんでちょっと違いますもんね。これからは、韓国もそうかもしれない。韓国自体の成長っていうのは国内だけ見てたら成長はなかなかないですよね。日本にもあるかもしれないけど少ない。海外に出るっていうのはもう早いうちにやった方がいいと思いますね。どんどん出て、日本でもどこでもいいと思うんですけど、出て経験を積むっていうのは将来役立つと思うんですね。最初は大変かもしれないですけど、やってみたらいいと思います。必ず将来ちょっと先を見たら役に立つと思いますね。" },
    { name: "チームExp.", text: "海外経験の中で特に面白かった国があれば、聞いてみたいです。" },
    { name: "鈴木さん", text: "どこも面白いですね、やっぱり。インドとかに行ったら、また違う文化で、インド人の方って、こう、ハチみたいな、あるんです。私、セールスの方だったらね、マーケティングで、こう、価格の交渉で行くんですけど、これでどうですかって言ったら、紙を見て、こう（頭でハチみたいに横に振る）、こうやるんです。僕もその時知らなかった。NOですよね。これ、納得してないかな。で、ちょっとこう、これぐらいの値段やったらどう。また下げるわけですよね。で、またこう、同じことをするんです。ずっと受けていないから、決めずに戻ったんです。インドに詳しい人になると、これね、YESなんですよ。だから、僕が1番最初に出した価格でね、通ってたのに、僕は値下げしちゃった。" },
    { name: "鈴木さん", text: "これはちょっと極端ですけど、インドとか、頭を触ったらダメとかね、ちっちゃい子とかでも、頭を触っちゃう。こう、撫でるって、こうね、褒める時とかもあるでしょ。日本だとあるんですよ。よくできましたねって。こう、ちっちゃい子に対してこんなもん触ったらダメとかで。アメリカは当然指立てるのもダメだし、こうやって人をこうやって指名するもダメなんですよね。だからこういうのはやっぱりわかっとかないと、勘違いされたりするんで、そういうのは勉強していった方がいいかなっていう気はしますね。" },
    { name: "チームExp.", text: "なんか外国人の立場として海外で生きる中、嫌いなこととか、なんか辛い思いもあるんじゃないかなって思うんですが…" },
    { name: "鈴木さん", text: "そうですね、やっぱりね、英語ビジネスでこう会話する分には、私も英語はそこまで問題ないです。けど、やっぱり、あの夜、みんなでお酒飲みながらとか、もうちょっとこう、砕けた場所で話すのとかっていうのは、やっぱりしんどいんですよね。日本語だと、ここで冗談を言って笑わせるとかね、というのができるのに、英語だとできないんですよね。それがこう、もどかしいってわけですよ。日本語で言えたら、盛り上げることができるのになとか、割と固い話しかできないですよね。それはアメリカもそうだし、韓国もそうですね。" },
    { name: "鈴木さん", text: "皆さんは、日本人の彼女とか、だから日本語で会話しないといけないとかなると、多分最初のうちなんかは、もうちょっとこう、こういう思いをね、言えるのにな～、みたいなのがあると思うんですよね。でも、それは言えないですよね。こう、Papagoでやってもあんまり意味がないですからね。そうですね、タイミングが大事なんで。そうなんですよ。やっぱりもどかしいですよね。" },
    { name: "チームExp.", text: "もし私たちが日本で差別を受ける状況になると、どう対処するのがいいと思っているのかも少し聞きたいと思いますが。はい。ちょっと私たちより年寄りの方の意見を聞いてみたいです。" },
    { name: "鈴木さん", text: "気にしないことですよね。多分、日本で、まだね、そういうところで差別発言をするとか、はい態度を取るっていう人は、かなりもう限定、限られた人だと思うんです。で、かなりこう偏った方で、今も、グローバルで言うと、もう本当、その少数だと思うんですよね。だから、もうあんまり気にしないことだと思いますね。あまり気にしなくて、ただ、無視すればいいということです。" },
    { name: "チームExp.", text: "海外で一応長く働いていたと思うんですけど、日本の中で働きたいっていう気持ちはなかったんでしょうか。" },
    { name: "鈴木さん", text: "あまりないですね。まだまだ体も大丈夫ですし、病気もしてないですし、海外でまだ、得るものが、やっぱり新しくこうあってこう気づくようなことが、やっぱり海外の方が多いですよね。当然、日本に行ったらもうよく知ってることばっかりなんで、多分脳みそあんまり使わなくていいんですよね、普段の生活で。けど、ここにいると、普段の生活からびっくりするようなことが、韓国だけじゃなくて、アメリカとかでもあるんで、それはすごく新鮮ですよね。" },
    { name: "チームExp.", text: "自分が思っているキャリアプランが、なんか思い通りにできなかった場合の克服方法とかありますかね。" },
    { name: "鈴木さん", text: "自分がどうなるかはわからないんですよね、多分。こうなりたいっていうのは、ずっと持っていたらいいと思います。こうなるためにこのスキルを身につけないといけないとか、今これを頑張ろうとかっていうのは、どんどんやったらいいと思いますけど、だから、ここに行けるかっていうと、わからないんです。" },
    { name: "鈴木さん", text: "スティーブジョブズのスタンフォード大学の卒業の時のスピーチって聞いたことありますか。Youtubeとかで出てるんで、見られたらいいかなと思うんですけど、彼もね、同じことを言ってました。apple立ち上げたんですよね。彼は、大学行って、中退っていうかね、そこで、大学行って取ってた科目があって、それが、カリグラフィーってやつで、このフォントを作る。これが楽しかったらしいですね。でも、その時は、何のためにっていうのは目的がなかったんですよね。でも、結局、そのマックを作った時に、フォントを変える、いろんなフォントを使える、使えるっていうのを初めて入れたのがappleだったんですよね。" },
    { name: "鈴木さん", text: "だから、そういうのっていうのは、彼は、ここの点とここの点とここの点（それぞれ他のところを指しながら）、こう、自分の生きていく中いろんな点があります。このドットをつなぐ、点をつなぐのは、ここに行ってみないとわからないっていうんですよね。だから、そこまでね、このためにこれとこれとこれをやるんだじゃなくていいから、その時その時で、自分が楽しいと思うこととか、一生懸命やろうと思うことをやっていけば、多分、あと振り返ったら、これ、この経験がすごい生きてたと、この経験が生きてたとかっていうことになると思うんですよね。" },
    { name: "鈴木さん", text: "なんかになりたいなと。思いは大事です。大事だけど、まっすぐ行けるとは限らない。もっと違う良い道があるかもしれないと思ってやっていけばいいんじゃないかなと思いますよ。どうしてもね、なりたいものがあれば、もうひたすらそこに向かったらいいと思うんですけど。それでも変わるかもしれないですよね。" },
    { name: "チームExp.", text: "最初に、その化学は、石油化学の勉強をされる時に、元々自分が勉強してきた専攻と違う、専攻っていうか、違う、事業を学ぶことにおいて大変だったところとかございましたらお願いします。" },
    { name: "鈴木さん", text: "当時のね、日本、今もその大学卒の人を採用するときは、よっぽどその、経理とか、財務系以外は割と経験ないとこにこう行っちゃうんですよね。そんなに経験がない、実用的な経験がないままこう行くことになります。どんな部署にいても、例えば私の場合は法律、法律も当然どこに行ってもいるんですよね、どこに行っても、最初行ったのは、ほんと、物流とか、その生産計画とか、そしたら、原材料の工場に契約して、原材料のメーカーとこう色々やるとか、その契約書とかは必ず出てくるし、それは使えるんですよね。全部じゃないですよ、ほとんど使わないんですけどね。そういう時は使えますとか。あとはもう勉強するしかないですね。もう、どこに行っても多分そうなると思いますね。" },
    { name: "チームExp.", text: "少し話をずれて、企業経営者の立場として、新入社員に対して話してみたいこととか。" },
    { name: "鈴木さん", text: "常に。まずはつまらないかもしれないけど、その最初に与えられたポジションの仕事をきっちりやる。それで認められないといけないんで。プラス、何かを頼まれた時には日本語で言うと1を言ったら10が返ってくるっていうんですよね。そこまでじゃなくていいんですけど、出されたものに対して、「こういう背景でこういうバックグラウンドで出してるんだな」って考えること。" },
    { name: "鈴木さん", text: "だから僕は回答は100パーセントの回答はするんだけど、プラスアルファをちょっと出すと、この人はよく考えてるねってやっぱ思うんですよね。悪くはないんですけど、言ったことだけ返ってくる人と、きっちり自分の範囲だけの人に比べて、プラスアルファで返ってくる人っていうのは、やっぱりその次のポジションとかにね、行きやすいと思うんですよね。いろんなことを試せるっていうかね、チャレンジしてもらいたいなと思います。上からすると、そういうところはポイントじゃないですかね。" },
    { name: "チームExp.", text: "海外企業で働いた期間が長いとおしゃったんですが、その中に社員と考えとその自身の考えが違うことがあったことがあると思います。それをどうやって解決するのか。" },
    { name: "鈴木さん", text: "そうですね、どうしてもね、日本の会社に勤めてて、日本の会社からこう派遣されてると、現地の人と情報量が違うんですね。日本の会社のグローバルの考え方とか進め方とか、会社全体のこう進め方とかの理解度がこっちの方が上なんです。だから、アメリカのこの会社でこういうことをやりたいって最初言っても、理解できないんですよね。だから、それはやっぱりそこから説明しないといけないですね。" },
    { name: "鈴木さん", text: "ほんとに合わない時があるんです。確かに現地の人の方が正しいこともあります。その時はやっぱりちゃんとそれを考えてあげないといけないですね。それを対応して、逆に日本に対しては、アメリカはこういう方針でやらないと進みません、だからこういうことをやりますって、逆にこうフィードバックが必要ですね。" },
    { name: "チームExp.", text: "企業を経営してる立場として、1番大事な、心がけとか、こういうのをしなければならないとかがあったら、ちょっと教えていただけますか。" },
    { name: "鈴木さん", text: "従業員に対しては、フェアに接するのと、常にもうリスペクトですね。敬意を持って接することも、これがほんと大事だと思いますね。日本でもアメリカでも、たまにね、やっぱポジションね、与えられた時に、「俺は偉いんだ」こう接してしまう人も多いんですけど、たまたまそのポジションです。知識は多いかもしれないし、日本とのコネクションがあるから情報量も多いかもしれないけど、それだけなんですよね。" },
    { name: "鈴木さん", text: "なんで、まずはそのフェアに接するのと、やっぱ経緯を持って皆さんに接する。これが大事ですね。経営なんで、やっぱ会社をこれからどうやっていくかっていうのは常に考えないといけないですね。リスクとかそういうのは考えないといけないですね。" }
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
