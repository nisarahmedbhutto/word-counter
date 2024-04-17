#! /usr/bin/env node


// import the inquirer from inquirer
import inquirer from "inquirer";

// declare a constant with inquirer prompt 
const answer: {
  sentence: string;
} = await inquirer.prompt({
  name: "sentence",
  type: "input",
  message: "enter your sentence to count the your word",
});

const words = answer.sentence.trim().split(" ");

// print the array of words with console
console.log(words);

// print the word count of sentence to the console
console.log(`your sentence word count is ${words.length}`);
