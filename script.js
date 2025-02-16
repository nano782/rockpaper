let playerScore=0;
let computerScore=0;
let computerAction="loading";
let playerAction="loading";
let gameState="idle";
function computerTurn(){
    return "rock";
}
function calculateWin(computerMove, playerMove){

}
function updateUI(){
    console.log("playerScore", playerScore);
    console.log("computerScore", computerScore);
    console.log("computerAction", computerAction);
    console.log("playerAction", playerAction);

}

function buttonSelected(buttonName){
    if(gameState==="idle"){
        if(buttonName==="rock" || buttonName==="paper" || buttonName==="scissor"){
            calculateWin(computerTurn(), buttonName);
            updateUI();
        }
    }
    
    
    
}