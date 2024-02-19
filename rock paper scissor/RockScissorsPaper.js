// registers the users choice
function clickedRock() {
    clickedChoice("Rock");
}

// registers the users choice
function clickedScissors() {
    clickedChoice("Scissors");
}

// registers the users choice
function clickedPaper() {
    clickedChoice("Paper");
}

function clickedChoice(choice) {
    // register AI choice
    // checks the possibilities
    possibleChoices = ["Rock", "Paper", "Scissors"];

    // chooses a number between 0 and 2
    index = Math.floor(Math.random() * 3);
    aiChoice = possibleChoices[index];

    // compares the users choice vs the computers choice
    if(choice == "Rock") {
        if (aiChoice == "Paper") {
            lose(choice,aiChoice);
        } else if ( aiChoice == "Rock" ) {
            draw(choice,aiChoice);
        } else if ( aiChoice == "Scissors" ) {
            win(choice,aiChoice);
        }
    } else if (choice == "Paper") {
        if (aiChoice == "Paper") {
            draw(choice,aiChoice);
        } else if ( aiChoice == "Rock" ) {
            win(choice,aiChoice);
        } else if ( aiChoice == "Scissors" ) {
            lose(choice,aiChoice);
        }
    } else if (choice == "Scissors") {
        if (aiChoice == "Paper") {
            win(choice,aiChoice);
        } else if ( aiChoice == "Rock" ) {
            lose(choice,aiChoice);
        } else if ( aiChoice == "Scissors" ) {
            draw(choice,aiChoice);
        }
    }
    //shows the outcome
    function draw(choice, aiChoice){
        document.getElementById("result_paragraph").innerText = "It's a draw!"
        document.getElementById("Player").innerHTML = "<img src='"+choice+".jpg'>";
        document.getElementById("Ai").innerHTML = "<img src='"+aiChoice+".jpg'>"
    }

    function win(choice, aiChoice){
        document.getElementById("result_paragraph").innerText = "You win!"
        document.getElementById("Player").innerHTML = "<img src='"+choice+".jpg'>";
        document.getElementById("Ai").innerHTML = "<img src='"+aiChoice+".jpg'>"
    }

    function lose(choice, aiChoice) {
        document.getElementById("result_paragraph").innerText = "You lost!"
        document.getElementById("Player").innerHTML = "<img src='"+choice+".jpg'>";
        document.getElementById("Ai").innerHTML = "<img src='"+aiChoice+".jpg'>"
    }
}