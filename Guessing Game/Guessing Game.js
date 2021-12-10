let secret = Math.floor(Math.random() * 10) + 1;

let startButton = document.getElementById("myBtn");
startButton.addEventListener("click", promptUser);

function promptUser(){
    let guess = Number(prompt("Please guess a number between (1-10)."));
    checkAnswer(guess);
}

function checkAnswer(answer){
    if(answer === secret){
        alert("Correct! Your guess " + answer + " was spot on.")
    }else if(answer < secret){
        alert("Incorrect! Your number is too low!");
        promptUser();
    }else if(answer > secret){o
        alert("Incorrect! Your number is too high!");
        promptUser();
    }else{
        alert("Invalid input! Please try again.");
        promptUser();
        
    }
}

