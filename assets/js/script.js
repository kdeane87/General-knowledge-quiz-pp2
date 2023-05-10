//Declare constants for DOM elements

const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionArea = document.getElementById("questions");
const correctScore = document.getElementById("score");
const incorrectScore = document.getElementById("incorrect");
const questionContainerElement = document.getElementById("question-container");
const answerButtonsElement = document.getElementsByClassName("ans-btn");
const rules = document.getElementById("rules");
const answerContainer = document.getElementById("answer-container");

let currentQuestionIndex = 0;
let score = 0;

/**
 * list of quiz questions
 */

const listOfQuestions = [{
    question: "Blondie was the name of the dog belonging to which dictator?",
    answers: [{
        text: "Stalin",
        correct: false,
      },
      {
        text: "mussolini",
        correct: false,
      },
      {
        text: "Hitler",
        correct: true,
      },
    ],
  },
  {
    question: " Related to the llama, which South American mammal has long shaggy hair?",
    answers: [{
        text: "Alpaca",
        correct: true,
      },
      {
        text: "Common opossum",
        correct: false,
      },
      {
        text: "Silky anteater",
        correct: false,
      },
    ],
  },
  {
    question: "According to the proverb, Necessity is the mother of…What?",
    answers: [{
        text: "Creation",
        correct: false,
      },
      {
        text: "Discovery",
        correct: false,
      },
      {
        text: "Invention",
        correct: true,
      },
    ],
  },
];

// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them
// Code used from Love Maths project


function runGame() {
  startButton.classList.add("hide");
  rules.classList.add("hide");
  questionContainerElement.classList.remove("hide");
  currentQuestionIndex = 0;
  score = 0;
  displayQuestion();
  checkAnswer();
  console.log(runGame);
}

function displayQuestion() {
  resetState();
  let currentQuestion = listOfQuestions[currentQuestionIndex];
  let questionNo = (currentQuestionIndex = 1);
  questionArea.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerContainer.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", checkAnswer);
  });
  console.log(displayQuestion);
}

function checkAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    alert(`You Answered CORRECTLY!`);
    selectedBtn.classList.add("correct");
  } else {
    alert(`WRONG ANSWER!!!!`);
    selectedBtn.classList.add("wrong");
  }
  Array.from(answerContainer.children).forEach(button => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");

    }
    button.disabled = true;
    console.log(checkAnswer);
  });
  nextButton.classList.remove("hide")
}

function incrementScore() {}

function incrementWrongAnswer() {}

function resetState() {
  nextButton.classList.add("hide");
  while (answerContainer.firstChild) {
    answerContainer.removeChild(answerContainer.firstChild);
  }
  console.log(resetState);
}


document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.getElementById("answer-container");

  for (let i = 0; i < buttons.lenght; i++) {
    buttons.addEventListener("click", function () {
      if (this.getElementById("answer-container")) {
        alert(`You Answered ${choice}!`);
      } else {
        let choice = this.getElementById("button");
        alert(`You Answered ${choice}!`);
      }
    });
  }
});

startButton.addEventListener("click", runGame);