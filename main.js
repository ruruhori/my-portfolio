// ボタンの要素を取得
const button1 = document.getElementById("button-1");
const button2 = document.getElementById("button-2");
const button3 = document.getElementById("button-3");

// ボタンをクリックするとそれぞれのページへ移動、履歴は残す
button1.onclick = function () {
  location.assign("https://dept.sophia.ac.jp/fgs/");
};

button2.onclick = function () {
  location.assign("https://ceeksophia2011.wixsite.com/ceek2020");
};

button3.onclick = function () {
  location.assign("https://hanshintigers.jp/");
};

// クイズの要素を取得
const quizText = document.getElementById("quiztext");
const choice1 = document.getElementById("choice-1");
const choice2 = document.getElementById("choice-2");
const choice3 = document.getElementById("choice-3");
const feedback = document.getElementById("feedback");

// クイズの中身
const quiz = {
  text: "私が好きなアーティストはどれでしょう？",
  choices: [
    {
      text: "King Gnu",
      feedback:
        "残念！King Gnuはもちろん素敵だけど、日本のバンドで私が好きなのはback numberだよ。",
    },
    {
      text: "日向坂46",
      feedback: "大正解！！！！！ちなみに推しは丹生明里ちゃんだよ！💙💙💙",
    },
    {
      text: "BTS",
      feedback: "残念！k-popアーティストで好きなのはNCTだよ。",
    },
  ],
};

// クイズを画面に表示
const reloadQuiz = function () {
  quizText.textContent = "Q. " + quiz.text;

  // 選択肢を表示
  choice1.textContent = quiz.choices[0].text;
  choice2.textContent = quiz.choices[1].text;
  choice3.textContent = quiz.choices[2].text;
};

// feedbackを表示
const choose = function (choiceNumber) {
  feedback.textContent = quiz.choices[choiceNumber].feedback;
};

//　King Gnu
choice1.onclick = function () {
  choose(0);
};
// 日向坂
choice2.onclick = function () {
  choose(1);
};
// BTS
choice3.onclick = function () {
  choose(2);
};

// 関数を実行
reloadQuiz();
