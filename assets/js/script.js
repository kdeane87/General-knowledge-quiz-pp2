//Declare constants for DOM elements

const startButton = document.getElementById('start-btn');
const questionArea = document.getElementById("questions");
const correctScore = document.getElementById("score");
const incorrectScore = document.getElementById("incorrect");
const questionContainerElement = document.getElementById('question-container');
const answerButtonsElement = document.getElementById('answer-buttons');

let randomQuestionsArray, currentQuestion;
 

 
// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
  let buttons = document.getElementsByClassName("ans-btn");

  for (let button of buttons) {
      button.addEventListener("click", function() {
          if (this.getAttribute("data-type") === "a") {
              alert("You clicked Answer a!");
          } else {
              let choice = this.getAttribute("data-type");
              alert(`You clicked Answer ${choice}!`);
          }
      });
  }
});

startButton.addEventListener('click', runGame);


function runGame() {
  startButton.classList.add('hide');
  questionContainerElement.classList.remove('hide');
  randomQuestionsArray = questions.sort(() => Math.random() - .5);
currentQuestion = 0;
  console.log('game running');
  nextQuestion();
}


function checkAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {
 
}

function displayQuestion(question) {
  questionArea.innerText = question.question
  }

  function nextQuestion() {
  displayQuestion(randomQuestionsArray[currentQuestion])
  }

function displayAnswers() {

}



 let questions = [
  {
      question: 'Blondie was the name of the dog belonging to which dictator?',
      answers: [
          {text: 'Hitler', correct: true},
          {text: 'Mussolini', correct: false},
          {text: 'Stalin', correct: false}
      ]


  }
]