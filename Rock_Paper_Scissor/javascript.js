let p1 = prompt("Please enter your choice Player 1: ");
let p2 = prompt("Please enter your choice Player 2: ");

let player1 = p1.toLowerCase();
let player2 = p2.toLowerCase();

function checkWinner(player1, player2) {
    let winner;
    if (player1 == player2) winner = 0;
    if((player1 == "rock" && player2 == "scissor") || (player1 == "scissor" && player2 == "paper") || (player1 == "paper" && player2 == "rock")) winner = 1;
    if((player1 == "paper" && player2 == "scissor") || (player1 == "rock" && player2 == "paper") || (player1 == "scissor" && player2 == "rock")) winner = 2;
    return winner;
}

checkWinner(player1, player2);
if (winner != 0) console.log(`Player ${winner} won the battle!`);
console.log("We have a draw!");
