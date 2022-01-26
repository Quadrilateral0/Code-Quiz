
//Defining what number to start my countdown
var countText = document.getElementById("count-text");
var count = 60;

//Defining quiz questions in an array
var quizContent = [
    {question: "JavaScript was invented by:",
    answers: ["Tim Cook", "Satya Nadella", "Brendan Eich"],
    correctAnswer: "Brendan Eich"
    },
    {question: "JavaScript was invented in what year?",
    answers: ["2001", "1995", "1998"],
    correctAnswer: "1995"
    },
    {question: "In JavaScript, which of the following is not a type of Number?",
    answers: ["NaN", "10", "Null"],
    correctAnswer: "Null"
    },
    {question: "JavaScript was originally developed under what name?",
    answers: ["Mocha", "Coffee", "Sundae"],
    correctAnswer: "Mocha"
    },
    {question: "JavaScript and Java refer to the same programming language.",
    answers: ["True", "False"],
    correctAnswer: "False"
    }
];

//Prevents a question from displaying prior to pressing the start button
var quizIndex = -1;

//Creating the start button
var startButton = document.getElementById("start-button");
startButton.addEventListener("click", function () {

    //Starting countdown timer on button press
    var interval = setInterval(function() {
        count-=1;
        countText.textContent = count;
  
    //Interval function ends when count equals zero
    if (count === 0){
        clearInterval(interval);
        alert("Game Over!");
    } 
 }, 1000);

    //Starting question prompts on button press
    quizBuilder();
});

//Function to display quiz
function quizBuilder() {
    
//Displays questions and answers from array on the page one at a time
 ++quizIndex;
    document.getElementById("quiz-container").innerHTML = quizContent[quizIndex].question + "<br><br>";
    document.getElementById("quiz-answers").innerHTML = " ";
    for (var i=0; i<quizContent[quizIndex].answers.length; i++) {
        document.getElementById("quiz-answers").innerHTML += ("<input type='radio' id='quiz-answers' name='answers'><label for='quiz-answers'>" + quizContent[quizIndex].answers[i] + "</label><br><br>");   
    }; 
            
    //If more questions in the array remain, provide a button to go to the next question
    if (quizIndex < (quizContent.length - 1)) {
        nButton();
    }    
    //Otherise, provide a finish button to submit the final score
    else {
        fButton();
 };
};

//Creates a button to go to next question
function nButton() {
    var nextButton = document.createElement("input");
    nextButton.type = "button";
    nextButton.value = "Next Question";
    nextButton.addEventListener("click", quizBuilder);
    document.getElementById("quiz-answers").appendChild(nextButton);
};

//Creates a button to submit the final score
function fButton() {
    var finishButton = document.createElement("input");
    finishButton.type = "button";
    finishButton.value = "Finish";
    finishButton.addEventListener("click", finishBuilder);
    document.getElementById("quiz-answers").appendChild(finishButton);
};

//Function to store time in local storage upon clicking the finish button
function finishBuilder() {
    //Stop the timer

    //Save the number to local storage
    var score = localStorage.getItem("score");
    count.textContent = score;
};

//Creates a reset button to refresh the quiz and start over
var resetButton = document.getElementById("reset-button");
function rButton() {
    rButton = location.reload();
}
resetButton.addEventListener("click", rButton, false);

//Function to display the final scores
function scoreBuilder() {
    var user = localStorage.getItem("initials");
    var result = localStorage.getItem("score");
    localStorage.setItem("initials", user);
    localStorage.setItem("score", result);
};

//Creates a button to access final scores
var scoresButton = document.getElementById("scores-button");
scoresButton.addEventListener("click", scoreBuilder);


