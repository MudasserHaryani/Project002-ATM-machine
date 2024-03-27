#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 100000; // Dollar
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "please insert your Pin Code",
        type: "number",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("Dear valuable customer! Welcome to your account");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "fast cash", "check balance"],
        },
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number",
            },
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient funds. Please try a smaller amount.");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`Your remaining balance is ${myBalance}`);
        }
    }
    else if (operationAns.operation === "fast cash") {
        let fastCashAns = await inquirer.prompt([
            {
                name: "fastCash",
                message: "please select an operation",
                type: "list",
                choices: ["100", "500", "1000", "5000", "10000", "20000"],
            },
        ]);
        let selectedAmount = parseInt(fastCashAns.fastCash);
        if (selectedAmount > myBalance) {
            console.log("insuficinet balance. Please try a smaller amount.");
        }
        else {
            myBalance -= selectedAmount;
            console.log(`Your remaining balance is ${myBalance}`);
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(`your account balance is ${myBalance}`);
    }
}
else {
    console.log("Incorrect Pin Code");
}
