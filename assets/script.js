const questions = [
    {
    questionText: "What tag do we use to link our Javascript to our HTML file?",
    choices: ["A. Div", "B. Style.Css", "C. Script", "D. Bologna"],
    answer : "C"
    },

    {
    questionText: "Which option IS NOT a data type of Javascript?",
    choices: ["A. Number", "B. Figure", "C. String", "D. Boolean"],
    answer: "B"
    },

    {
    questionText: "What does the '||' symbol stand for?",
    choices: ["A. Or", "B. And", "C. Neither", "D. Without"],
    answer: "A"
    },

    {
    questionText: "How do we call code in Javascript?",
    choices: ["A. Console.log", "B. Functions", "C. Alerts", "D. Cycles"],
    answer: "B"
    }
];


var time = document.querySelector("#time");

var timeLeft = 60;    

var startBtn = document.querySelector("#startbtn");
startBtn.addEventListener("click", startGame);

var question = document.querySelector("#question");

var choiceA = document.querySelector("#choicea");
choiceA.addEventListener("click", aSelected);

var choiceB = document.querySelector("#choiceb");
choiceB.addEventListener("click", bSelcted);

var choiceC = document.querySelector("#choicec");
choiceC.addEventListener("click", cSelcted);

var choiceD = document.querySelector("#choiced");
choiceD.addEventListener("click", dSelcted);

var currentQuestion = questions[Math.floor(Math.random() * questions.length)];


function startGame(){
    startTimer();
    getQuestion();
    console.log("click")
}

function startTimer(){
    var timerInterval = setInterval(function(){
        timeLeft--;
        time.textContent = timeLeft + " seconds left";
        if(timeLeft <= 0){
            clearInterval(timerInterval);
            timeLeft = 60
            window.alert("Times Up!")
        }
    },1000)
}

function getQuestion(){
    console.log(currentQuestion)
    question.textContent = currentQuestion.questionText;
    answers.textContent = currentQuestion.choices;

}



function aSelected(){
    console.log("A Selected");
    if (currentQuestion.answer === "A") {
    window.alert("Correct!") 
    localStorage.setItem("correct", "+1")
        getQuestion();
    }
    else { window.alert("Incorrect!")
        getQuestion();
        deductTime();
    }
}

function bSelcted(){
    console.log("B Selected");
    if (currentQuestion.answer === "B") {
    window.alert("Correct!") 
    localStorage.setItem("correct", "+1")
        getQuestion();
    }
    else { window.alert("Incorrect!")
        getQuestion();
        deductTime();
    }   
}

function cSelcted(){
    console.log("C Selected");
    if (currentQuestion.answer === "C") {
        window.alert("Correct!") 
        localStorage.setItem("correct", "+1")
        getQuestion();
        }
    else { window.alert("Incorrect!") 
        getQuestion();
        deductTime();
        }  
}

function dSelcted(){
    console.log("D Selected")
    if (currentQuestion.answer === "D") {
        window.alert("Correct!") 
        localStorage.setItem("correct", "+1")
            getQuestion();
        }  
    else { window.alert("Incorrect!")
        getQuestion();
        deductTime();
        } 
}

function deductTime(){
    timeLeft = timeLeft -5;

}





