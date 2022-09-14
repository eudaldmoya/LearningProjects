let array = ["rock", "paper", "scissor"];
let winner;


function getRndInteger(min, max) {
    let rand = Math.floor(Math.random() * (max - min) ) + min;
    return array[rand];
}



function playRound(player, computer) {
    if (player == computer) winner = 0;
    if((player == "rock" && computer == "scissor") || (player == "scissor" && computer == "paper") || (player == "paper" && computer == "rock")) winner = 1;
    if((player == "paper" && computer == "scissor") || (player == "rock" && computer == "paper") || (player == "scissor" && computer == "rock")) winner = 2;
    return winner;
}
function game() {

        const btninputs = document.querySelectorAll("button");
        console.log(btninputs.length);
        btninputs.forEach((input) => {
            console.log("hey");
            input.addEventListener('click', () => {
                let player = input.className;
                console.log(player);
                let computer = getRndInteger(0, array.length-1);

                let enemyDiv = document.querySelector(".enemy");
                let enemyimg = document.createElement("img");
                enemyimg.setAttribute(
                    'src',
                    'icons/' + computer +'.svg',
                  );
                enemyimg.setAttribute('alt', 'enemypick');
                enemyimg.setAttribute('width', 150);
                enemyimg.setAttribute('class', 'enemypick');
                enemyDiv.appendChild(enemyimg);
                playRound(player, computer);
                });
        });
        
        
        if (winner == 1) console.log(`The Player won the battle! ${player} wins over ${computer} !`);
        if (winner == 2) console.log(`The Computer won the battle! ${computer} wins over ${player} !`);
        if(winner == 0) console.log("We have a draw!");
    
}

game();


