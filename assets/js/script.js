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
        text: "Opossum",
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
        text: "Churchill",
        correct: false,
      },
      {
        text: "JF Kennedy",
        correct: true,
      },
      {
        text: "Hitler",
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
    question: " Which 'C' is an ornamental moulding running around the walls of a room near the ceiling?",
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
        text: "Rabbit",
        correct: true,
      },
      {
        text: "Dog",
        correct: false,
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
  {
    question: "Arabica, Robusta and Liberica are types of which bean?",
    answers: [{
        text: "Coffee",
        correct: true,
      },
      {
        text: "Kidney",
        correct: false,
      },
      {
        text: "Soy",
        correct: false,
      },
    ],
  },
  {
    question: "If you take credit for someone's work, or take limelight where it's not deserved, you said to be stealing their what?",
    answers: [{
        text: "Credit",
        correct: false,
      },
      {
        text: "Thunder",
        correct: true,
      },
      {
        text: "Work",
        correct: false,
      },
    ],
  },
  {
    question: " Which classic cocktail, often said to be a mojito without the mint, takes it's name from a small village in Cuba?",
    answers: [{
        text: "Daiquirí",
        correct: true,
      },
      {
        text: "Martini",
        correct: false,
      },
      {
        text: "Sazerac",
        correct: false,
      },
    ],
  },
  {
    question: "Which Beatles song includes the line 'When I was younger, so much younger than today'?",
    answers: [{
        text: "Hello, Goodbye",
        correct: false,
      },
      {
        text: "Help",
        correct: true,
      },
      {
        text: "Yes it is",
        correct: false,
      }

    ]
  },
  {
    question: " Eric Yuan is CEO of which video communication technology company which shot to prominence in 2020?",
    answers: [{
        text: "Zoom",
        correct: true,
      },
      {
        text: "Skype",
        correct: false,
      },
      {
        text: "Facetime",
        correct: false,
      },
    ]
  }
]

/**
 * Main loop for running the quiz.
 */

function runGame() {
  startButton.classList.add("hide");
  score = 0;
  rules.classList.add("hide");
  questionContainerElement.classList.remove("hide");
  currentQuestionIndex = 0;
  displayQuestion();
  checkAnswer();
  console.log(runGame);
}

/**
 * Displays questions and answers in sequence.
 * Creates button containing answers.
 * Calls checkAnswer once buttn is clicked.
 */

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

/**
 * Checks that the answer is correct.
 * If correct answer turns green and score is incremented.
 * If wrong answer turns red.
 * Buttons are disabled after a button is clicked.
 * setTimeout clicks hidden next question once it times out.
 */

function checkAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {

    // alert(`You Answered CORRECTLY!`);
    selectedBtn.classList.add("correct");
    score++;
  } else {
    // alert(`WRONG ANSWER!!!!`);
    selectedBtn.classList.add("wrong");
  }
  Array.from(answerContainer.children).forEach(button => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");

    }
    button.disabled = true;
    console.log(checkAnswer);
  });
  setTimeout(clickNextButton, 1);
}

/**
 * Clears questions and displays score.
 * Removes hidden next buton and adds text 'Try Again'.
 */

function displayScore() {
  resetState();
  questionArea.innerHTML = `You scored ${score} out of ${listOfQuestions.length}!`;
  nextButton.innerHTML = "Try Again";
  nextButton.classList.remove('hide');
  if (score < 10) {
    swal(`Not too bad but try harder next time`);
  }
  if (score > 10) {
    swal(`Very impressive, but theres still room for improvement!`);
  }
  if (score === 15) {
    swal(`Amazing, you got everything right!!!!`);
  }
  if (score < 5) {
    swal(`Not great, time to pick up a few books :)`);
  }
  console.log(displayScore);
}

/**
 * Removes the previous answers.
 */

function resetState() {
  nextButton.classList.add("hide");
  while (answerContainer.firstChild) {
    answerContainer.removeChild(answerContainer.firstChild);
  }
  console.log(resetState);
}

/**
 * When next button is clicked, runs through the lenght of
 * listOfQuestions.
 */

function clickNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < listOfQuestions.length) {
    displayQuestion();
  } else {
    displayScore();
  }
  console.log(clickNextButton);
};

//Listens for click on next button.

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < listOfQuestions.length) {
    clickNextButton();
  } else {
    runGame();
  }
});


//Listens for click on start button. Calls main quiz loop.

startButton.addEventListener("click", runGame);