let readlineSync = require("readline-sync");
let chalk = require("chalk")


let score = 0

let otherScores = {
  name:"Priyanka",
  points: 5
};

let userName = readlineSync.question(chalk.blueBright("What is your good name?"))

function welcome() {
  console.log(chalk.magentaBright("Welcome " + userName + " in HOW WELL YOU KNOW PRIYAL"))
  console.log(chalk.yellow("---------------------------"))
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
    console.log(chalk.green("Great! That's right"))
    score++
  }
  else {
    console.log(chalk.red("Oops! you got it wrong!!"))
    
  }
  console.log(chalk.greenBright("Your current score: ", score));
  console.log(chalk.yellow("---------------------------"))
}

function displayScore(){
console.log(chalk.magentaBright(`YAY! Your Total Score Is ${score}. Well Done Potterhead.`))

console.log(chalk.yellow("-----------------------------"))

console.log( chalk.red(`Others Score: ${otherScores.name} secure ${otherScores.points} points`))}

displayScore()
