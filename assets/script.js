

//Defining what number to start my countdown
var countText = document.getElementById("count-text");
var count = 60;

//Defining quiz questions in an array
var quizContent = [
    {question:"JavaScript was invented by:",
    answers: {
        a:"X",
        b:"X",
        c:"Brendan Eich",
    },
    correctAnswer: "c"
    },
    {question:"JavaScript was invented in what year?",
    answers: {
        a:"X",
        b:"1995",
        c:"X",
    },
    correctAnswer: "b"
    },
    {question:"JavaScript was invented in what year?",
    answers: {
        a:"X",
        b:"1995",
        c:"X",
    },
    correctAnswer: "b"
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
        clearInterval(interval);
        alert("Game Over!");
    }
 }, 1000);

    //Starting question prompts on button press
    quizBuilder();
});

//Function to display quiz questions one at a time
function quizBuilder() {
    
    //Displays questions and answers from array on page one at a time
    ++quizIndex;
        document.body.innerHTML = quizContent[quizIndex].question + "<br><br/>";
        for (var i=0; i<quizContent[quizIndex].answers.length; i++) {
            document.getElementById("quiz-container").innerHTML = "TEST!";
            //document.body.innerHTML = ("<input type='radio' id='quiz-content' name='answers'>" + quizContent[quizIndex].answers + "<br><br/>");
            }
            
            //Creates a button to go to next question if more questions in the array remain
            if (quizIndex < (quizContent.length - 1)) {
                var nextButton = document.createElement("input");
                nextButton.type = "button";
                nextButton.value = "Next question";
                nextButton.addEventListener("click", quizBuilder);
                document.body.appendChild(nextButton);
               };

            //Creates a button to go to the final scores on each question displayed
            if (quizContent.length - 1) {
                var scoresButton = document.createElement("input");
                scoresButton.type = "button",
                scoresButton.value = "See scores";
                scoresButton.addEventListener("click", scoreBuilder);
                document.body.appendChild(scoresButton);
            }

};

//Function to display the final scores
function scoreBuilder() {

};

//Creating the scores button 
var scoresButton = document.getElementById("scores-button");
startButton.addEventListener("click", scoreBuilder);


