document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    
    for (let button of buttons) {
        button.addEventListener("click", function() {
        if (this.getAttribute("data-type") === "replay") {
            replay();
        } else {
            let userChoice = this.getAttribute("data-type");
            console.log(userChoice);
            runGame()
        }   
        })
    }
})

function runGame() {
    let operand1 = document.getElementById('operand1').innerText;
    let operand2 = document.getElementById('operand2').innerText;
};

function generatedAnswer() {
    let Choice = ["rock","paper","scissors","lizard","spock", "replay"];
    // make sure replay is index 5 so it isnt selected as a response to the game //
    let generatedAnswer = Math.floor(Math.random() * 5);
    
    let i = generatedAnswer;
    console.log(Choice[i]);
}

function compareAnswer() {

};

function incrementUserScore() {

};

function incrementCompScore() {

};

function checkScores() {

};

function replay() {
console.log('replay')
};