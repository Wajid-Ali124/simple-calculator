#! /usr/bin/env node

import figlet from "figlet";
import inquirer from "inquirer";

figlet("Simple Calculator", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});

setTimeout(async () => {
  const answer = await inquirer.prompt([
    { message: "Enter First Number: ", type: "number", name: "firstNumber" },
    { message: "Enter Second Number: ", type: "number", name: "secondNumber" },
    {
      message: "Choose Operator to Perform Calculation",
      type: "list",
      name: "operator",
      choices: ["Addition", "Subtraction", "Division", "Multiplication"],
    },
  ]);

  if (answer.operator == "Addition") {
    console.log(`Sum is:  ${answer.firstNumber + answer.secondNumber}`);
  } else if (answer.operator == "Subtraction") {
    console.log(`Subtraction result is: ${answer.firstNumber - answer.secondNumber}`);
  } else if (answer.operator == "Multiplication") {
    console.log(`Multiplication result is: ${answer.firstNumber * answer.secondNumber}`);
  } else if (answer.operator == "Division") {
    console.log(`Division result is: ${answer.firstNumber / answer.secondNumber}`);
  } else {
    console.log("Please Select Valid Operator");
  }
}, 1000);
