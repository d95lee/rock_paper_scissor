let playerScore = 0;
let computerScore = 0;

for (let j=0; j<5; j++) { //Loops game 5x
      

function getComputerChoice(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);

}
const computerResponse = getComputerChoice(1,3); //Computer is selecting a random number 1-3 from the getComputerChoice formula above. The response is then converted to strings.
console.log(computerResponse);
let computerSelection;
        if (computerResponse === 1) {
                computerSelection = "rock";
        } else if (computerResponse === 2) {
                computerSelection = "paper";
        } else (computerSelection = "scissors");
console.log(computerSelection);

let userInput = prompt("Rock Paper Scissors!").toLowerCase(); //.toLowerCase causes all inputted strings and converts them to lower case
function gamePlay (userInput, computerSelection) {
        if (userInput === computerSelection) { //Could use switch statement to simplify code
                prompt("Tied!");
        } else if ((userInput == "rock") && (computerSelection == "scissors")) { //To add score in the prompt, add string after computer/playerscore
                (prompt ("You win! Rock beats scissors!") + playerScore++);
        } else if ((userInput == "rock") && (computerSelection == "paper")) {
                (prompt ("You lose! Paper beats rock!") + computerScore++);
        } else if ((userInput == "paper") && (computerSelection == "rock")) {
                (prompt ("You win! Paper beats rock!") + playerScore++); 
        } else if ((userInput == "paper") && (computerSelection == "scissors")) {
                (prompt ("You lose! Scissors beats paper!") + computerScore++); 
        } else if ((userInput == "scissors") && (computerSelection == "rock")) {
                (prompt ("You lose! Rock beats scissors!") + computerScore++);
        } else { ((userInput == "scissors") && (computerSelection == "paper")); 
                (prompt ("You win! Scissors beats paper!") + playerScore++);
        }

        console.log ("Computer score" +" "+ computerScore);
        console.log ("Player score" +" "+ playerScore);
}
 gamePlay (userInput, computerSelection);
}

console.log ("Game over!")
        if (playerScore > computerScore) {
                prompt ("Player Wins!");
        } else if (playerScore == computerScore) {
                prompt ("Tied!");
        } else { prompt ("Computer Wins!")
        }





