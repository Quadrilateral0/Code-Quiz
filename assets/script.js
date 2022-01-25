

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
]

//Prevents a question from displaying prior to pressing the start button
var quizIndex = -1;

//Creating the start button
var startButton = document.getElementById("start-button");
startButton.addEventListener("click", function () {

    //Starting countdown timer on button press
    interval = setInterval(function() {
        count-=1;
        countText.textContent = count;
  
    //Interval function ends when count equals zero
    if (count === 0){
        clearInterval();
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
        for (var i=0; i<quizContent[quizIndex].answers.length; i++) {
            document.getElementById("quiz-answers").innerHTML = ("<input type='radio' id='quiz-answers' name='answers'><label for='quiz-answers'>" + quizContent[quizIndex].answers[i] + "</label><br><br>");
            };
            
            //Creates a button to go to next question if more questions in the array remain
            if (quizIndex < (quizContent.length - 1)) {
                var nextButton = document.createElement("input");
                nextButton.type = "button";
                nextButton.value = "Next question";
                nextButton.addEventListener("click", quizBuilder);
                document.getElementById("quiz-answers").appendChild(nextButton);
               };
};


//Function to display the final scores
function scoreBuilder() {

};

//Creating the scores button 
var scoresButton = document.getElementById("scores-button");
startButton.addEventListener("click", scoreBuilder);


