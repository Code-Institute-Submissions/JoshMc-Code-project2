document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    
    for (let button of buttons) {
        button.addEventListener("click", function() {
        if (this.getAttribute("data-type") === "replay") {
            replay();
        } else {
            let userChoice = this.getAttribute("data-type");
            // console.log(userChoice); to check console is logging input// 
            runGame()
        } 
        let playerScore = 0;
        let compScore = 0;  
        })
    }
})

function generatedAnswer() {
    let choice = ["rock","paper","scissors","lizard","spock", "replay"];
    let compChoice = ["rock","paper","scissors","lizard","spock"];
    // make sure replay is index 5 so it isnt selected as a response to the game //
    let generatedAnswer = Math.floor(Math.random() * 5);
    
    compChoice = (choice[generatedAnswer]);
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