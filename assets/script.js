

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
    }
]

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
    //Stores question from array to display
    var display = [];
}

