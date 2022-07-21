let playerSelection = "rock";
//*let computerSelection = getComputerChoice();
let computerSelection = "scissors";

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

function playRound(playerSelection, computerSelection){
        //* Comprobación
        //*if (playerSelection.toLowerCase() != "rock" || "scissors" || "paper"){
        if (playerSelection.toLowerCase() != "rock"){
          console.log("Please select Rock, Paper or Scissors: ")
          return ""
         }

    //* Comparaciones computer win
    if (computerSelection == "rock" & playerSelection == "scissors"){
        console.log("You Lose! Rock beats Scissors");
        return "Computer Wins"
    } else if (computerSelection == "scissors" & playerSelection == "paper"){
        console.log("You Lose! Scissors beats Paper");
        return "Computer Wins"
    } else if (computerSelection == "paper" & playerSelection == "scissors"){
        console.log("You Win! Scissors beats Paper");
        return "Player Wins"
    } else if (computerSelection == "Scissors" & playerSelection == "rock"){
        console.log("You Win! Rock beats Scissors");
        return "Player Wins"
    }
}
        
        
console.log(playRound(playerSelection, computerSelection));

function game(){

}