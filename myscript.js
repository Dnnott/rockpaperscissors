//*Definimos globals
window.playerSelection = prompt("Rock, paper, scissors?");
window.computerSelection = getComputerChoice();
window.playerWins = 0;
window.computerWins = 0;

function getComputerChoice(){
    eleccion = Math.floor(Math.random() * 3);
    if (eleccion == 0){
        console.log("Computer selects: Rock");
        return "rock";
    } else if (eleccion == 1){
        console.log("Computer selects: Paper");
        return "paper";
    } else {
        console.log("Computer selects: Scissors");
        return "scissors";
    }
}

function playRound(playerOpt, computerOpt){
    
    //*Comprobación
    //if (playerOpt.toLowerCase() != "rock"){
    //    console.log("Please select Rock, Paper or Scissors: ")
    //    return "Please select Rock, Paper or Scissors: "
    //}

    //* Comparaciones
    if (computerOpt == "rock" && playerOpt == "scissors"){
        console.log("You Lose! Rock beats Scissors");
        computerWins++;;
        return "Computer Wins"
    } else if (computerOpt == "scissors" && playerOpt == "paper"){
        console.log("You Lose! Scissors beats Paper");
        computerWins++;
        return "Computer Wins";
    } else if (computerOpt == "paper" && playerOpt == "scissors"){
        console.log("You Win! Scissors beats Paper");
        playerWins++;
        return "Player Wins";
    } else if (computerOpt == "scissors" && playerOpt == "rock"){
        console.log("You Win! Rock beats Scissors");
        playerWins++;
        return "Player Wins";
    } else if (computerOpt = playerOpt){
        return "Tie!";
    } else {
        return "Error"
    }
}
        
function game(){
    for (let i = 0; i < 5; i++) {
        let jugar = playRound(playerSelection, computerSelection);
        console.log(jugar);
        console.log("Player: " +playerWins+ " Computer: " +computerWins);
        playerSelection = prompt("Try again! Choose: Rock, paper, scissors?");
        computerSelection = getComputerChoice();
     }
     if (playerWins > computerWins){
        console.log("Game Over! Player Wins!");
        return "Player Wins";
     } else if (computerWins > playerWins){
        console.log("Game Over! Computer Wins!");
        return "Computer Wins";
     } else {
        console.log("Game Over! Tie");
        return "Tie";
     }
    
     
}

//const btn = document.querySelector('#btn');
//btn.addEventListener('click', () => {
//  alert("Hello World");
//});

btn.addEventListener('click', function (e) {
    console.log(e);
  });

console.log(game());

