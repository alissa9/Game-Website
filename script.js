const startButton = document.getElementById("startbtn");
const nextButton = document.getElementById("nextbtn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answerbuttons");

// windows onload for the leader board to get updated with score

window.onload = () => {
  let scores = localStorage.getItem("scores");
  document.getElementById("score1").innerHTML = scores;
};
var mySound;
mySound = new Audio("../images/GameSound.mp3");
let shuffledQuestions, currentQuestionIndex;
startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

// here are the question of the quiz using arrays with their values
const questions = [
  {
    question: "How many hearts does an octopus have?",
    answers: [
      { text: "3", correct: true },
      { text: "4", correct: false },
      { text: "1", correct: false },
      { text: "2", correct: false },
    ],
  },
  {
    question: "what is the most spoken language in 2020?",
    answers: [
      { text: "English", correct: false },
      { text: "Spanish", correct: false },
      { text: "Arabic", correct: false },
      { text: "Mandarin Chinese", correct: true },
    ],
  },
  {
    question: " What does GIF stand for?",
    answers: [
      { text: "Gifting in Photos", correct: false },
      { text: " Graphics interchange format", correct: true },
      { text: "Gaming interfere format ", correct: false },
      { text: "Graphical images free", correct: false },
    ],
  },
  {
    question: "What is the most used programming language?",
    answers: [
      { text: "Java", correct: false },
      { text: "Python", correct: true },
      { text: "C#", correct: false },
      { text: "C++", correct: false },
    ],
  },
  {
    question: "What is the largest country in the world?",
    answers: [
      { text: "China", correct: false },
      { text: "Russia", correct: true },
      { text: "America", correct: false },
      { text: "Europe", correct: false },
    ],
  },
  {
    question: "What is the biggest animal in the world?",
    answers: [
      { text: "Brown Bear", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Lion", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },
  {
    question: "What are the primary colours?",
    answers: [
      { text: "Blue,Golden,silver", correct: false },
      { text: "Red,Yellow,Blue", correct: true },
      { text: "Green,Orange,Red", correct: false },
      { text: "Purple,Blue,Brown", correct: false },
    ],
  },
  {
    question: "What currency is used in Spain?",
    answers: [
      { text: "Dollar", correct: false },
      { text: "Franc", correct: false },
      { text: "Euros", correct: true },
      { text: "Shing", correct: false },
    ],
  },
  {
    question: "What is the busiest airport in the world?",
    answers: [
      { text: "Hong Kong Airport", correct: false },
      { text: "Dubai International Airport", correct: false },
      { text: "Atlanta International Airport", correct: true },
      { text: "Heathrow Airport", correct: false },
    ],
  },
  {
    question: "Who invented the World Wide Web, and when?",
    answers: [
      { text: "Evan spiegel, 1995", correct: false },
      { text: "Mark Zuckerberg, 1992", correct: false },
      { text: "Tim Berners-Lee, 1990", correct: true },
      { text: "Elon Musk, 1998", correct: false },
    ],
  },
  {
    question: "What was Nike originally called?",
    answers: [
      { text: "Niky", correct: false },
      { text: "Tick Sports", correct: false },
      { text: "Blue Ribbon Sports", correct: true },
      { text: "Black Ribbon Sports", correct: false },
    ],
  },
  {
    question: "How many sports are there in the world?",
    answers: [
      { text: "800", correct: true },
      { text: "600", correct: false },
      { text: "150", correct: false },
      { text: "450", correct: false },
    ],
  },
];

/* the start game function it includes the sound effect-
- the start button to disappear, 
-shuffling the question so they aren't in a order using the
math random to give a random array 
*/
function startGame() {
  startButton.classList.add("hide");
  mySound.play();
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
}
var scores = 0;
var ctr = 0;
function setNextQuestion() {
  score++;
  ctr++;
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}
console.log("score" + scores);

/* WHEN QUIZ ENDS, UPDATE SCORE
  FInd the loged in user
  Load their data structure
  Compare score with the score in data structure.
  store data structure again.

*/



function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

// the select function (variables ) also an array to loop through all the button

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");

    if (startButton.innerHTML == "Restart") {
      score = 0;
      ctr = 0;

      localStorage.removeItem("scores");
      localStorage.removeItem("counter");
    }
  }
}

// here are the variables for the leader board
// the users get the score
// the score to hold the users score and update it
let user = "ikbalissa89@gmail.com";
let users = JSON.parse(localStorage.getItem(user));
let score = localStorage.getItem("scores");
let ctr2 = localStorage.getItem("counter");

function setStatusClass(element, correct) {
  clearStatusClass(element);

  // show score
  let counter = JSON.parse(localStorage.getItem("counter"));

  if (counter > 11) {
    document.getElementById("finalscore").style.display = "block";
    document.getElementById("finalscore").innerHTML = "Your Final Score is " + score +"★";
  }
  if (counter < 11) {
    document.getElementById("finalscore").style.display = "none";
  }
 
  if (correct) {
    localStorage.setItem("scores", score + 1);
    localStorage.setItem("counter", ctr2 + ctr);
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

let userscores = { Name: users.Name, Score: score };

localStorage.setItem("userScores", JSON.stringify(userscores));
console.log(score);

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

console.log(questions.length);

 function gameEnd() {
  document.getElementById("finalscore").display = "block";
  document.getElementById("finalscore").innerHTML =
    "Your Final Score is " + " " + score + "★";
 }
