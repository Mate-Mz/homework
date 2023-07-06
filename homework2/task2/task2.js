function rollDice(){
    return Math.floor(Math.random() * 6)+1;
}

function playing(){
    let winner;
    while(true){
        let diceA = rollDice();
        let diceB = rollDice();
        if(diceA == 3 && diceB == 3){
            winner = "draw";
            break;
        }
        else if(diceA == 3){
            winner = "a";
            break;
        }
        else if(diceB == 3){
            winner = "b";
            break;
        }
    }
    return winner;
}

function winning(winner){
    console.log("rolling the dice... \n")
    setTimeout(function() {
        if(winner != "draw"){
            console.log(`Player ${winner} won`)
        }
        else{
            console.log("draw")
        }
    }, 1000);
}

winning(playing());