let correctAnswers = 0;
//elements
const button1 = document.getElementById("option1");
const button2 = document.getElementById("option2");
const button3 = document.getElementById("option3");
const button4 = document.getElementById("option4");
const question = document.getElementById("question");
const progress = document.getElementById("progress");
const content = document.getElementById("quizContent");
//mock data
const questionSet = [
  {
    questionNumber: 0,
    question: "Which language is used for styling web pages?",
    options: ["HTML", "JQuery", "CSS", "XML"],
    correctOption: "CSS",
  },
  {
    questionNumber: 1,
    question: "What is the full form of CSS?",
    options: [
      "Cascading Style Sheets",
      "Coloured Speacial Sheets",
      "Color and Style Sheets",
      "None",
    ],
    correctOption: "Cascading Style Sheets",
  },
  {
    questionNumber: 2,
    question: "How many sizes of headers are available in HTML by default?",
    options: ["5", "1", "3", "6"],
    correctOption: "6",
  },
];
let currentQuestionSet = questionSet[0];
let currentQuestion = 0;

const generateNextQuestion = () => {
  currentQuestionSet = questionSet[currentQuestion];
  question.innerHTML = currentQuestionSet.question;

  button1.innerHTML = currentQuestionSet.options[0];
  button1.value = currentQuestionSet.options[0];

  button2.innerHTML = currentQuestionSet.options[1];
  button2.value = currentQuestionSet.options[1];

  button3.innerHTML = currentQuestionSet.options[2];
  button3.value = currentQuestionSet.options[2];

  button4.innerHTML = currentQuestionSet.options[3];
  button4.value = currentQuestionSet.options[3];

  progress.innerHTML = `Question ${currentQuestionSet.questionNumber + 1} of ${
    questionSet.length
  }`;
};
generateNextQuestion(); //default
const optionButtons = [button1, button2, button3, button4];
optionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.value === currentQuestionSet.correctOption) {
      correctAnswers += 1;
    }
    if (currentQuestion + 1 < questionSet.length) {
      currentQuestion += 1;
      generateNextQuestion();
    } else {
      content.innerHTML = `Percentage : ${parseFloat(
        (correctAnswers / questionSet.length) * 100
      ).toFixed(2)}!
       You got ${correctAnswers} out of ${questionSet.length} questions right!`;
      progress.innerHTML = "";
    }
  });
});
