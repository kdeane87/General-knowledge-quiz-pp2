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
let correct = 0;
let incorrect = 0;

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
  {
    question: "Which politician famously said ‘Ich bin ein Berliner’?",
    answers: [{
        text: "Winston Churchill",
        correct: false,
      },
      {
        text: "JF Kennedy",
        correct: true,
      },
      {
        text: "Adolf Hitler",
        correct: false,
      },
    ],
  },
  {
    question: " In chemistry what is the smallest part of an element that can take part in a chemical reaction?",
    answers: [{
        text: "Atom",
        correct: true,
      },
      {
        text: "Electron",
        correct: false,
      },
      {
        text: "Microbe",
        correct: false,
      },
    ],
  },
  {
    question: " Which American president became known as ‘Tricky Dicky’?",
    answers: [{
        text: "Nixon",
        correct: true,
      },
      {
        text: "Clinton",
        correct: false,
      },
      {
        text: "Trump",
        correct: false,
      },
    ],
  },
  {
    question: " Which ‘C’ is an ornamental moulding running around the walls of a room near the ceiling?",
    answers: [{
        text: "Corner",
        correct: false,
      },
      {
        text: "crevice",
        correct: false,
      },
      {
        text: "Cornice",
        correct: true,
      },
    ],
  },
  {
    question: " The Chinese year 2023 is represented by which animal?",
    answers: [{
        text: "Rat",
        correct: false,
      },
      {
        text: "Dog",
        correct: false,
      },
      {
        text: "Rabbit",
        correct: true,
      },
    ],
  },
  {
    question: " Ganymede is the largest moon of which planet? ",
    answers: [{
        text: "Neptune",
        correct: false,
      },
      {
        text: "Pluto",
        correct: false,
      },
      {
        text: "Jupitor",
        correct: true,
      },
    ],
  },
  {
    question: "Which insect lives in a Formicary?",
    answers: [{
        text: "Mole",
        correct: false,
      },
      {
        text: "Tarruntula",
        correct: false,
      },
      {
        text: "Ant",
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
  displayQuestion();
  checkAnswer();
  console.log(runGame);
}

function displayQuestion() {
  resetState();
  let currentQuestion = listOfQuestions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
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
  setTimeout(clickNextButton, 3000);
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

function clickNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < listOfQuestions.length) {
    displayQuestion();
  } else {
    alert(`there was a problem`);
  }
};



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



nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < listOfQuestions.length) {
    clickNextButton();
  } else {
    alert(`game over`);
  }
});


startButton.addEventListener("click", runGame);