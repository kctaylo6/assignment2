var cpuChoices = ["Rock", "Paper", "Scissors"];
var playCount = 1;
var rockCt = 0;
var paperCt = 0;
var scissorsCt = 0;
var winCount = 0;
var lossCount = 0;
var tieCount = 0;

/*
*   USER SELECT HANDLING
*/
function rockToSelect() {
    document.getElementById('userSelection').innerHTML = cpuChoices[0];
}

function paperToSelect() {
    document.getElementById('userSelection').innerHTML = cpuChoices[1];
}

function scissorsToSelect() {
    document.getElementById('userSelection').innerHTML = cpuChoices[2];
}

function checkIfSelect() {
    if(document.getElementById("rockBtn").checked) {
        play();
    } else if(document.getElementById("paperBtn").checked) {
        play();
    } else if(document.getElementById("scissorsBtn").checked) {
        play();
    } else {
        alert("You must choose between Rock, Paper, or Scissors before starting the game!")
    }
}

function play() {
    /*
    *   GAMEPLAY
    */
    var randomInt = Math.random();
    var arrayValue = Math.floor(randomInt * 3);
    document.getElementById('cpuChoice').innerHTML = cpuChoices[arrayValue];
    document.getElementById('cpuSelection').innerHTML = cpuChoices[arrayValue];
    
    /*
    *   ROCK POSSIBILITIES
    */
    if(document.getElementById("rockBtn").checked){
        if(cpuChoices[arrayValue] == cpuChoices[0]) {
            tieCondition();
        } else if(cpuChoices[arrayValue] == cpuChoices[1]) {
            lossCondition();
        } else if(cpuChoices[arrayValue] == cpuChoices[2]) {
            winCondition();
        }
    }
    
    /*
    *   PAPER POSSIBILITIES
    */
    if(document.getElementById("paperBtn").checked){
        if(cpuChoices[arrayValue] == cpuChoices[0]) {
            winCondition();
        } else if(cpuChoices[arrayValue] == cpuChoices[1]) {
            tieCondition();
        } else if(cpuChoices[arrayValue] == cpuChoices[2]) {
            lossCondition();
        }
    }
    
    /*
    *   SCISSORS POSSIBILITIES
    */
    if(document.getElementById("scissorsBtn").checked){
        if(cpuChoices[arrayValue] == cpuChoices[0]) {
            lossCondition();
        } else if(cpuChoices[arrayValue] == cpuChoices[1]) {
            winCondition();
        } else if(cpuChoices[arrayValue] == cpuChoices[2]) {
            tieCondition();
        }
    }
    
    /*
    *   COUNTING
    */
    document.getElementById('playCount').innerHTML = playCount;
    playCount++;
    
    if(arrayValue == 0) {
        rockCt++;
        document.getElementById('rockCt').innerHTML = rockCt;
    }
    
    if(arrayValue == 1) {
        paperCt++;
        document.getElementById('paperCt').innerHTML = paperCt;
    }
    
    if(arrayValue == 2) {
        scissorsCt++;
        document.getElementById('scissorsCt').innerHTML = scissorsCt;
    }
}

/*
*   GAME OUTCOMES
*/
function tieCondition() {
    tieCount++;
    document.getElementById('tieCount').innerHTML = tieCount;
}

function winCondition() {
    winCount++;
    document.getElementById('winCount').innerHTML = winCount;
}

function lossCondition() {
    lossCount++;
    document.getElementById('lossCount').innerHTML = lossCount;
}