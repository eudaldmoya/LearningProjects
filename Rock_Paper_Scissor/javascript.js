let array = ["rock", "paper", "scissor"];
let winner;
let start = true;


function getRndInteger(min, max) {
    let rand = Math.floor(Math.random() * (max - min) ) + min;
    return array[rand];
}

function printWinner(wins) {
    console.log(winner);
    if (wins == 1) {
        document.querySelector(".resultText").innerHTML="You won!";
    }
    if (wins == 2) {
        document.querySelector(".resultText").innerHTML="The computer won!";
    }
    if(wins == 0) {
        document.querySelector(".resultText").innerHTML="We have a draw!";
    }
}

function playRound(player, computer) {
    if (player == computer) winner = 0;
    if((player == "rock" && computer == "scissor") || (player == "scissor" && computer == "paper") || (player == "paper" && computer == "rock")) winner = 1;
    if((player == "paper" && computer == "scissor") || (player == "rock" && computer == "paper") || (player == "scissor" && computer == "rock")) winner = 2;
    return winner;
}



function game() {

        const btninputs = document.querySelectorAll("button");
        btninputs.forEach((input) => {
            input.addEventListener('click', () => {
                let player = input.className;
                let computer = getRndInteger(0, array.length-1);

                let enemyDiv = document.querySelector(".enemy");
                if(!start) {
                let previousenemyimg = document.querySelector(".enemypick");
                previousenemyimg.remove();
                }
                let enemyimg = document.createElement("img");
                enemyimg.setAttribute(
                    'src',
                    'icons/' + computer +'.svg',
                  );
                enemyimg.setAttribute('alt', 'enemypick');
                enemyimg.setAttribute('width', 150);
                enemyimg.setAttribute('class', 'enemypick');
                enemyDiv.appendChild(enemyimg);
                start = false;
                let wins = playRound(player, computer);
                printWinner(wins);
                });
        });
        
   
}

game();


