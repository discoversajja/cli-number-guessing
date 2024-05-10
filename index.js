#! /usr/bin/env node
import inquirer from "inquirer";
// 1) computer will generate a random number 
const randomNumber = Math.floor(Math.random() * 10 + 1);
// 2) user input for guessing number 
const answer = await inquirer.prompt([
    {
        name: "userguessednumber",
        type: "number",
        message: "please guess a number between 1-10:",
    },
]);
// 3) compare user input with computer generated number and show result
if (answer.userguessednumber === randomNumber) {
    console.log("congratulation! you guessed right number.");
}
else {
    console.log("you guessed wrong number");
}
