document.addEventListener("DOMContentLoaded", function(){
let buttons = document.getElementsByTagName("button");
let playerdice = 0;
let opponentdice = 0;
let opponentscore = 0;
let playerscore = 0;
let test = 0;
//testing update//


function rollDice() {
    document.getElementById("blue.jpg").style.display = "block";
};

//makes button create random numbers//
for (let button of buttons) {
    button.addEventListener("click", function() {
        let playerdice = Math.floor(Math.random() * 6);
            console.log(playerdice);
        let opponentdice = Math.floor(Math.random() * 6);
            console.log(opponentdice);
//adds point to highest number//
            if (playerdice > opponentdice) {
                playerscore += 1;
            } else if (opponentdice > playerdice) {
                opponentscore += 1;
            } if (opponentdice == playerdice) {
                opponentscore += 1; playerscore += 1;
            } 
//updates scores for each player//
    document.getElementsByClassName("playerscore")[0].innerHTML = playerscore;
    document.getElementsByClassName("opponentscore")[0].innerHTML = opponentscore;
    document.getElementsByClassName("playerdice")[0].innerHTML = playerscore;
    document.getElementsByClassName("opponentdice")[0].innerHTML = playerscore;
//alerts the winner/loser//
    if(playerscore == 10) {
        alert(`Congratulations, you won!`); playerscore = 0; opponentscore = 0;}
        else if (opponentscore == 10) {
            alert(`Sorry, you lost!`); playerscore = 0; opponentscore = 0;}
    })
        }
    })