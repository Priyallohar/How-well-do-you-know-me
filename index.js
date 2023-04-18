let readlineSync = require("readline-sync");

let score = 0

let userScores = [];

let userName = readlineSync.question("What is your good name? ")

function welcome() {
  console.log("Welcome " + userName + " in HOW WELL YOU KNOW PRIYAL")
}

welcome()


let questions = [
  { question: "Where Priyal is from? ", answer: "Sirohi" },
  { question: "What is Priyal hobby? ", answer: "Drawing" },
  { question: "What is Priyal favorite Movie? ", answer: "Harry Potter" },
  { question: "What is Priyal favorite book? ", answer: "gita" },
  { question: "Do Priyal like horror movie? ", answer: "No" }
];

for (let i = 0; i < questions.length; i++) {
  let currentQuestion = questions[i];
  gameStart(currentQuestion.question, currentQuestion.answer)
}

function gameStart(question, answer) {
  let userAnswer = readlineSync.question(question)
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Great! That's right")
    score++
  }
  else {
    console.log("Oops! you got it wrong!!")
  }
}

function addUserScore(name, score) {
  let UserPoints = {
    name: name,
    score: score
  }
  userScores.push(UserPoints)
}
addUserScore(userName, score)

function yourScore(){
  console.log(`${userName} your score is ${score}`)
  userScores.map(score => console.log(score.name+":"+ score.score))
}

yourScore()
