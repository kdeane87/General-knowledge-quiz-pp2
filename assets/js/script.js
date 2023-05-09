//Declare constants for DOM elements

const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionArea = document.getElementById("questions");
const correctScore = document.getElementById("score");
const incorrectScore = document.getElementById("incorrect");
const questionContainerElement = document.getElementById('question-container');
const answerButtonsElement = document.getElementsByClassName('ans-btn');
const rules = document.getElementById('rules');

let currentQuestionIndex = 0;
let score = 0;


 

 
// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them
// Code used from love maths project

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
  rules.classList.add('hide');
  questionContainerElement.classList.remove('hide');
  currentQuestionIndex = 0;
  score = 0;
  displayQuestion();
  console.log('game running');
}




function displayQuestion() {
    let currentQuestion = listOfQuestions[currentQuestionIndex];
    let questionNo = currentQuestionIndex = 1;
    questionArea.innerHTML = questionNo + ". " + currentQuestion.question;
    
    currentQuestion.answers.forEach(answer => {
      const button = document.createElement('button');
      button.innerHTML = answer.text;
      button.classList.add('btn')
      answerButton.appendChild(button);
    });
    
  }
  

function checkAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {
 
}

const listOfQuestions = [
    {
        question: "Blondie was the name of the dog belonging to which dictator?",
        answers: [
              {text: 'Stalin', correct: false},
              {text: 'mussolini', correct: false},
              {text: 'Hitler', correct: true},
        ]
    },
    {
      question: " Related to the llama, which South American mammal has long shaggy hair?",
 answers: [
              {text: 'Alpaca', correct: true},
              {text: 'Common opossum', correct: false},
              {text: 'Silky anteater', correct: false},
        ]
    },
    {
       question: "According to the proverb, Necessity is the mother of…What?",
       answers: [
              {text: 'Creation', correct: false},
              {text: 'Discovery', correct: false},
              {text: 'Invention', correct: true},
        ]
    }]
          
       