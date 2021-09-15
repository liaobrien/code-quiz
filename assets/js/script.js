console.log("hello");

var timeLeft = 75;
var timer = document.getElementById("timer")

var startButton = document.getElementById("start");

var getContainer = document.querySelector(".quizbox")

var changeQuestion = document.getElementById("question")

// makes list of answer choices and buttons for each answer choice
var answerChoices = document.createElement("ul")
var a = document.createElement("button");
var b = document.createElement("button");
var c = document.createElement("button");
var d = document.createElement("button");

// making buttons correspond to 'answer' in each object in the array
a.setAttribute("class", "a");
b.setAttribute("class", "b");
c.setAttribute("class", "c");
d.setAttribute("class", "d");

// for the end of game page where user submits initials
var endOfGameForm = document.createElement("form");
var initialsLabel = document.createElement("label");
var initialsTextBox = document.createElement("input");
var submitButton = document.createElement("button")

submitButton.id = "submit"

// to show all saved scores
var savedScoreList = document.createElement("ol");
var savedScores = document.createElement("li");

// put questions in objects within an array
var allQuestions = [
      {
            question: "Commonly used data types DO NOT include _____.",
            choices: {
                  a: "strings",
                  b: "alerts",
                  c: "booleans",
                  d: "numbers"
            },
            answer: "b"
      },
      {
            question: "The condition in an if/else statement is enclosed within _____.",
            choices: {
                  a: "quotes",
                  b: "parentheses",
                  c: "curly brackets",
                  d: "square brackets"
            },
            answer: "b"
      },
      {
            question: "Arrays in JavaScript can be used to store _____.",
            choices: {
                  a: "numbers and strings",
                  b: "other arrays",
                  c: "booleans",
                  d: "all of the above"
            },
            answer: "d"
      },
      {
            question: "String values must be enclosed within _____ when being assigned to variables ",
            choices: {
                  a: "commas",
                  b: "curly brackets",
                  c: "quotes",
                  d: "parentheses"
            },
            answer: "c"
      },
      {
            question: "A very useful tool used during development and debugging for printing content to the debugger is _____.",
            choices: {
                  a: "console.log",
                  b: "JavaScript",
                  c: "terminal/bash",
                  d: "alerts"
            },
            answer: "a"
      },
]


function startTimer(event) {
      event.preventDefault();
      startButton.setAttribute("style", "display: none");

      var timeInterval = setInterval(function () {
            if (timeLeft > 0) {
                  timer.textContent = "Time: " + timeLeft;
            }
            else if (timeLeft === 0) {
                  timer.textContent = "Time's up!";
                  clearInterval(timeInterval);
                  endOfGame();
            }

            timeLeft--;

      }, 1000)
      firstQuestion(event);
}

function firstQuestion(event) {
      changeQuestion.textContent = allQuestions[0].question;

      getContainer.appendChild(answerChoices);
      answerChoices.appendChild(a);
      answerChoices.appendChild(b);
      answerChoices.appendChild(c);
      answerChoices.appendChild(d);

      a.textContent = allQuestions[0].choices.a;
      b.textContent = allQuestions[0].choices.b;
      c.textContent = allQuestions[0].choices.c;
      d.textContent = allQuestions[0].choices.d;

      a.addEventListener("click", secondQuestion);
      b.addEventListener("click", secondQuestion);
      c.addEventListener("click", secondQuestion);
      d.addEventListener("click", secondQuestion);

}



function secondQuestion(event) {
      event.stopPropagation();

      var chosenAnswer1 = "";
      var rightAnswer1 = "";

      chosenAnswer1 = event.target.getAttribute("class");
      rightAnswer1 = allQuestions[0].answer;

      console.log(chosenAnswer1);
      console.log(rightAnswer1);

      if (chosenAnswer1 === rightAnswer1) {
            console.log("You are correct!");
      }
      else {
            timeLeft = timeLeft - 7
            console.log("You are incorrect.");
      }

      changeQuestion.innerHTML = "";

      changeQuestion.textContent = allQuestions[1].question;

      getContainer.appendChild(answerChoices);
      answerChoices.appendChild(a);
      answerChoices.appendChild(b);
      answerChoices.appendChild(c);
      answerChoices.appendChild(d);

      a.textContent = allQuestions[1].choices.a;
      b.textContent = allQuestions[1].choices.b;
      c.textContent = allQuestions[1].choices.c;
      d.textContent = allQuestions[1].choices.d;

      a.addEventListener("click", thirdQuestion);
      b.addEventListener("click", thirdQuestion);
      c.addEventListener("click", thirdQuestion);
      d.addEventListener("click", thirdQuestion);


      // console.log(e.target);

      // console.log(event);
}

function thirdQuestion(event) {
      event.stopPropagation();
      var chosenAnswer2 = "";
      var rightAnswer2 = "";

      chosenAnswer2 = event.target.getAttribute("class");
      rightAnswer2 = allQuestions[1].answer;

      console.log(chosenAnswer2);
      console.log(rightAnswer2);

      if (chosenAnswer2 === rightAnswer2) {
            console.log("you are correct2");
      }
      else {
            console.log("you are incorrect");
      }

      changeQuestion.innerHTML = "";

      changeQuestion.textContent = allQuestions[2].question;

      getContainer.appendChild(answerChoices);
      answerChoices.appendChild(a);
      answerChoices.appendChild(b);
      answerChoices.appendChild(c);
      answerChoices.appendChild(d);

      a.textContent = allQuestions[2].choices.a;
      b.textContent = allQuestions[2].choices.b;
      c.textContent = allQuestions[2].choices.c;
      d.textContent = allQuestions[2].choices.d;

      a.addEventListener("click", fourthQuestion);
      b.addEventListener("click", fourthQuestion);
      c.addEventListener("click", fourthQuestion);
      d.addEventListener("click", fourthQuestion);
}

function fourthQuestion(event) {
      event.stopPropagation();
      var chosenAnswer3 = "";
      var rightAnswer3 = "";

      chosenAnswer3 = event.target.getAttribute("class");
      rightAnswer3 = allQuestions[2].answer;

      console.log(chosenAnswer3);
      console.log(rightAnswer3);

      if (chosenAnswer3 === rightAnswer3) {
            console.log("you are correct3");
      }
      else {
            console.log("you are incorrect");
      }


      changeQuestion.textContent = allQuestions[3].question;

      getContainer.appendChild(answerChoices);
      answerChoices.appendChild(a);
      answerChoices.appendChild(b);
      answerChoices.appendChild(c);
      answerChoices.appendChild(d);

      a.textContent = allQuestions[3].choices.a;
      b.textContent = allQuestions[3].choices.b;
      c.textContent = allQuestions[3].choices.c;
      d.textContent = allQuestions[3].choices.d;

      a.addEventListener("click", fifthQuestion);
      b.addEventListener("click", fifthQuestion);
      c.addEventListener("click", fifthQuestion);
      d.addEventListener("click", fifthQuestion);
}

function fifthQuestion(event) {
      event.stopPropagation();
      var chosenAnswer4 = "";
      var rightAnswer4 = "";

      chosenAnswer4 = event.target.getAttribute("class");
      rightAnswer4 = allQuestions[3].answer;

      console.log(chosenAnswer4);
      console.log(rightAnswer4);

      if (chosenAnswer4 === rightAnswer4) {
            console.log("you are correct4");
      }
      else {
            console.log("you are incorrect");
      }


      changeQuestion.textContent = allQuestions[4].question;

      getContainer.appendChild(answerChoices);
      answerChoices.appendChild(a);
      answerChoices.appendChild(b);
      answerChoices.appendChild(c);
      answerChoices.appendChild(d);

      a.textContent = allQuestions[4].choices.a;
      b.textContent = allQuestions[4].choices.b;
      c.textContent = allQuestions[4].choices.c;
      d.textContent = allQuestions[4].choices.d;

      a.addEventListener("click", endOfGame)
      b.addEventListener("click", endOfGame)
      c.addEventListener("click", endOfGame)
      d.addEventListener("click", endOfGame)
}

function endOfGame(event) {
      event.stopPropagation();
      var chosenAnswer5 = "";
      var rightAnswer5 = "";

      chosenAnswer5 = event.target.getAttribute("class");
      rightAnswer5 = allQuestions[4].answer;

      if (chosenAnswer5 === rightAnswer5) {
            console.log("you are correct5");
      }
      else {
            console.log("you are incorrect");
      }


      timer.setAttribute("style", "display: none");
      changeQuestion.textContent = "All Done! Your final score is " + timeLeft + ".";

      answerChoices.setAttribute("style", "display: none;");

      getContainer.appendChild(endOfGameForm);
      endOfGameForm.appendChild(initialsLabel);
      endOfGameForm.appendChild(initialsTextBox);
      endOfGameForm.appendChild(submitButton);

      initialsLabel.textContent = "Enter your initials: ";
      submitButton.textContent = "Submit";

      submitButton.addEventListener("submit", function (event) {
            event.preventDefault();
            changeQuestion.textContent = "Highschores"

            var userInitials = document.querySelector("#submit").value;

            if (!userInitials) {
                  alert("Cannot be left blank.");
            }
            else {
                  alert("Success!");
            }

            localStorage.setItem("initials", userInitials);
            localStorage.setItem("score", timeLeft);
      })

}

// function showScores(event) {
//       event.preventDefault();
//       changeQuestion.textContent = "Highschores"

//       var userInitials = document.querySelector("#submit").value;

//       if (userInitials === "") {
//             alert("Cannot be left blank.");
//       }

//       localStorage.setItem("initials", userInitials);
//       localStorage.setItem("score", timeLeft);
// }

startButton.addEventListener("click", startTimer);

// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question

// WHEN I answer a question
// THEN I am presented with another question

// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock

// WHEN all questions are answered or the timer reaches 0
// THEN the game is over

// WHEN the game is over
// THEN I can save my initials and my score
