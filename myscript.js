let playerSelection = "rock";
let computerSelection = getComputerChoice();
let playerWins = 0;
let computerWins = 0;

function getComputerChoice(){
    eleccion = Math.floor(Math.random() * 3);
    if (eleccion == 0){
        return "rock";
        console.log("Computer selects: Rock")
    } else if (eleccion == 1){
        return "paper";
        console.log("Computer selects: Paper")
    } else {
        return "scissors";
        console.log("Computer selects: Scissors")
    }
}

function playRound(playerOpt, computerOpt){
    // Comprobación
    if (playerSelection.toLowerCase() != "rock" || "scissors" || "paper"){
    //if (playerSelection.toLowerCase() != "rock"){
        console.log("Please select Rock, Paper or Scissors: ")
        return "Please select Rock, Paper or Scissors: "
     }

    //* Comparaciones computer win
    if (computerOpt == "rock" && playerOpt == "scissors"){
        console.log("You Lose! Rock beats Scissors");
        return "Computer Wins"
        computerWins++;
    } else if (computerOpt == "scissors" && playerOpt == "paper"){
        console.log("You Lose! Scissors beats Paper");
        return "Computer Wins"
        computerWins++;
    } else if (computerOpt == "paper" && playerOpt == "scissors"){
        console.log("You Win! Scissors beats Paper");
        return "Player Wins"
        playerWins++;
    } else if (computerOpt == "scissors" && playerOpt == "rock"){
        console.log("You Win! Rock beats Scissors");
        return "Player Wins"
        playerWins++;
    } else if (computerOpt = playerOpt){
        return "Tie! Play Again";
    } else {
        return "Error"
    }
}
        
function game(){
    for (let i = 0; i < 5; i++) {
        console.log(playRound(playerSelection, computerSelection));
        
     }

}

console.log(playRound(playerSelection, computerSelection));

