 /*   const rock = 1;
    const paper = 2;
    const scissors = 3;*/

function getComputerChoice(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min); 

}
const computerResponse = getComputerChoice(1,3); 
console.log(computerResponse);


