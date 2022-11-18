document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    
    for (let button of buttons) {
        button.addEventListener("click", function() {
        if (this.getAttribute("data-type") === "replay") {
            replay();
        } else {
           userChoice = this.getAttribute("data-type");
            // console.log(userChoice); to check console is logging input// 
            generatedAnswer ();
        }   
        })
    }
})

function generatedAnswer() {
    let choice = ["rock ","paper ","scissors ","lizard ","spock ", "replay "];
    let compChoice = ["rock ","paper ","scissors ","lizard ","spock"];
    // make sure replay is index 5 so it isnt selected as a response to the game //
    let generatedAnswer = Math.floor(Math.random() * 5);
    
    compGen = (choice[generatedAnswer]);
    compSelected = compGen;
    userSelected = userChoice;
    console.log(compGen);
    console.log(userSelected);
    compareAnswer ();


}

let playerScore = 0;
let compScore = 0;

function compareAnswer() {


    //document.getElementById("operand1").innerHTML = 'Player'; move to 
    // document.getElementById("operand2").innerHTML = 'Computer'; move to 

if (userSelected === compSelected){
        operand1.textContent = userSelected;
        operand2.textContent = compSelected;
        result.textContent = 'TIE';
    }
    else if(userSelected == 'rock'){
        if(compGen == 'paper'){
            document.getElementById("operand1").innerHTML = userSelected;
            document.getElementById("operand2").innerHTML = compSelected;
            result.textContent = 'Computer Wins!';
            ++compScore;
            console.log(compScore)
            document.getElementById("cScore").innerHTML = compScore;
            

        }else{
           document.getElementById("operand1").innerHTML = userSelected;
           document.getElementById("operand2").innerHTML = compSelected;
           result.textContent = 'Player Wins!';
           ++playerScore;
           console.log(playerScore)
           document.getElementById("pScore").innerHTML = playerScore;
        }
    }
    else if(userSelected == 'scissors'){
        if(compGen == 'rock'){
            document.getElementById("operand1").innerHTML = userSelected;
            document.getElementById("operand2").innerHTML = compSelected;
            result.textContent = 'Computer Wins!';
            ++compScore;
            console.log(compScore)
        }else{
            document.getElementById("operand1").innerHTML = userSelected;
           document.getElementById("operand2").innerHTML = compSelected;
           result.textContent = 'Player Wins!';
           ++playerScore;
           console.log(playerScore)
        } 

        
};
}

function incrementUserScore() {

};

function incrementCompScore() {

};

function checkScores() {

};

function replay() {
console.log('replay')
};