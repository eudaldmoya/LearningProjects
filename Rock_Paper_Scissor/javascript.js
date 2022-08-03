let p1 = prompt("Please enter your choice: ");
let player = p1.toLowerCase();
let array = ["rock", "paper", "scissor"];
let winner;


function getRndInteger(min, max) {
    let rand = Math.floor(Math.random() * (max - min) ) + min;
    return array[rand];
  }


let computerChoice = getRndInteger(0, array.length-1);
let computer = computerChoice.toLowerCase();
console.log(computer);

function playRound(player, computer) {
    if (player == computer) winner = 0;
    if((player == "rock" && computer == "scissor") || (player == "scissor" && computer == "paper") || (player == "paper" && computer == "rock")) winner = 1;
    if((player == "paper" && computer == "scissor") || (player == "rock" && computer == "paper") || (player == "scissor" && computer == "rock")) winner = 2;
    return winner;
}

playRound(player, computer);
if (winner == 1) console.log(`The Player won the battle! ${player} wins over ${computer} !`);
if (winner == 2) console.log(`The Computer won the battle! ${computer} wins over ${player} !`);
if(winner == 0) console.log("We have a draw!");
