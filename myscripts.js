for (let j=0; j<5; j++) {
      

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
function game (userInput, computerSelection) {
        if (userInput === computerSelection) {
                prompt("Tied!");
        } else if ((userInput == "rock") && (computerSelection == "scissors")) {
                prompt ("You win! Rock beats scissors!");
        } else if ((userInput == "rock") && (computerSelection == "paper")) {
                prompt ("You lose! Paper beats rock!");
        } else if ((userInput == "paper") && (computerSelection == "rock")) {
                prompt ("You win! Paper beats rock!"); 
        } else if ((userInput == "paper") && (computerSelection == "scissors")) {
                prompt ("You lose! Scissors beats paper!"); 
        } else if ((userInput == "scissors") && (computerSelection == "rock")) {
                prompt ("You lose! Rock beats scissors");
        } else { ((userInput == "scissors") && (computerSelection == "paper")) 
                prompt ("You win! Scissors beats paper!")
        }
}
 game (userInput, computerSelection);

}



