document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    
    for (let button of buttons) {
        button.addEventListener("click", function() {
        if (this.getAttribute("data-type") === "replay") {
            replayGame();
        } else {
           userChoice = this.getAttribute("data-type");
            generatedAnswer ();
        }   
        });
    }
});
let playerScore = 0;
let compScore = 0;


function generatedAnswer() {
    
    let choice = ["rock","paper","scissors","lizard","spock", "replay"];
    // make sure replay is index 5 so it isnt selected as a response to the game //
    let generatedAnswer = Math.floor(Math.random() * 5);

    compGen = (choice[generatedAnswer]);
    compSelected = compGen;
    userSelected = userChoice;
    console.log(compGen);
    console.log(userSelected);
    compareAnswer ();
    document.getElementById("operand1").innerHTML = userSelected;
    document.getElementById("operand2").innerHTML = compSelected;
    document.getElementById("pScore").innerHTML = playerScore;
    document.getElementById("cScore").innerHTML = compScore;


}



function compareAnswer() {

if (userSelected === compSelected){
        operand1.textContent = userSelected;
        operand2.textContent = compSelected;
        result.textContent = 'TIE';
    }
    else if(userSelected == 'rock'){
        if(compSelected == 'paper' || compSelected =='spock'){
            result.textContent = 'Computer Wins!';
            ++compScore;
            console.log(compScore);
            
        }else{
           result.textContent = 'Player Wins!';
           ++playerScore;
           console.log(playerScore);
           document.getElementById("pScore").innerHTML = playerScore;
        }
    }
    else if(userSelected == 'scissors'){
        if(compSelected == 'rock' || compSelected =='spock'){
            result.textContent = 'Computer Wins!';
            ++compScore;
            console.log(compScore);
        }else{
           result.textContent = 'Player Wins!';
           ++playerScore;
           console.log(playerScore);
        } 
    }
    else if(userSelected == 'paper'){
        if(compSelected == 'scissors' || compSelected =='lizard'){
            result.textContent = 'Computer Wins!';
            ++compScore;
            console.log(compScore);
        }else{
           result.textContent = 'Player Wins!';
           ++playerScore;
           console.log(playerScore);
        } 
    }
    else if(userSelected == 'lizard'){
        if(compSelected == 'scissors' || compSelected =='rock'){
            result.textContent = 'Computer Wins!';
            ++compScore;
            console.log(compScore);
        }else{
           result.textContent = 'Player Wins!';
           ++playerScore;
           console.log(playerScore);
        } 
    }
    else if(userSelected == 'spock'){
        if(compSelected == 'lizard' || compSelected =='paper'){
            result.textContent = 'Computer Wins!';
            ++compScore;
            console.log(compScore);
        }else{
           result.textContent = 'Player Wins!';
           ++playerScore;
           console.log(playerScore);
        } 
    }

    finalPScore = playerScore;
    finalCompScore = compScore;
    console.log(finalPScore);

    if(finalPScore == 5 || finalCompScore == 5){
        gameOver();
    }
}



function gameOver() {
    finalPScore = playerScore;
    finalCompScore = compScore;
    console.log(finalPScore);
    console.log(finalCompScore);
    let chooseMove = document.querySelector('.controls-area');
    let result = document.querySelector('.results-area');

        chooseMove.innerText = 'Game Over!!';

            if(finalPScore > finalCompScore){
                result.innerText = 'You Won The Game';
                result.style.color = '#308D46';
                replayGame();
            }
            else{
                result.innerText = 'You Lost The Game';
                result.style.color = 'red';
                replayGame();
            };
}

function replayGame() {
    let replayBtn = document.querySelector('.replay');
    replayBtn.addEventListener('click',() => {
        window.location.reload();
    });
}