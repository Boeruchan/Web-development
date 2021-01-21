// Wie is er aan zet.
const board = {
    player1: "X",
    player2: "O",
    currentTurn: "X",
    AllBoxFilled: true, 
    someoneHasWon: false
}


// Hoe je het spel kan winnen in een array
const winningConditions = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
]

//Function van de boxen bij onclick.
function play(tileNr) {
    console.log(tileNr);
    //
    if (board.currentTurn === board.player1) {
    document.getElementById(tileNr).innerText = "X";
    board.currentTurn = board.player2;
} else {
    document.getElementById(tileNr).innerText = "O";
    board.currentTurn = board.player1;
}
// controleren of iemand heeft gewonnen
for (let i=0; i<winningConditions.length; i++) {
    // console.log(winningConditions[i]);
    if (document.getElementById(winningConditions[i][0]) === board.player1 &&
        document.getElementById(winningConditions[i][1]) === board.player1 &&
        document.getElementById(winningConditions[i][2]) === board.player1)
        console.log("Player X has won"); 
        board.someoneHasWon = true;
} else if { (document.getElementById(winningConditions[i][0]) === board.player2 &&
           document.getElementById(winningConditions[i][1]) === board.player2 &&
           document.getElementById(winningConditions[i][2]) === board.player2)
}{
console.log("Player O has won");
board.someoneHasWon = true;
}


//code om te bepalen of het gelijkspel is.
board.allBoxFilled = true;
for (let i=1; i<=9; i++) {
    if(!document.getElementById(i).innerText)
    console.log("is filled");
    board.allBoxFilled = false;
{
    if (board.allBoxFilled && !board.someoneHasWon) {
    console.log("Draw game");
    return

}
}
}
// reset als iemand gewonnen heeft of draw
function reset() {
    if (board.allBoxFilled && board.someoneHasWon) {
    for (let i = 1; i <=9; i++) {
        document.getElementById(i).innerText = "";

        board.currentTurn = "X";
        board.allBoxFilled = true;
        board.someoneHasWon= false;
    }

}
}