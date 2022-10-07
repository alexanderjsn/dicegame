document.addEventListener("DOMContentLoaded"), function(){
let buttons;
let playerdice = 0;
let opponentdice = 0;
let opponentscore = 0;
let playerscore = 0;


for (let button of buttons) {
    button.addEventListener("click", function() {
        let playerdice = Math.floor(Math.random() * 6);
            console.log(playerdice);
        let opponentdice = Math.floor(Math.random() * 6);
            console.log(opponentdice);
            if (playerdice > opponentdice) {
                playerscore += 1;
            } else if (opponentdice > playerdice) {
                opponentscore += 1;
            } if (opponentdice == playerdice) {
                opponentscore += 1; playerscore += 1;
            } 
    })}}