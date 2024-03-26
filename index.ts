#! /usr/bin/env node
import inquirer from "inquirer";

let person = {
    amount: 10000,
    pin: 12345
}
console.log(`Access Pin, ${person.pin}`);

const pinAnswer = await inquirer.prompt(
    { message: "Enter Your Pin", type: "number", name: "pin" }
)
if (pinAnswer.pin === person.pin) {
    console.log(`Your Total Amount is ${person.amount}!!`);
    const choiceAnswer = await inquirer.prompt(
        { message: "What do you want to do?", type: "list", name: "options", choices: ['WithDraw', 'BalanceCheck'] }
    )
    if (choiceAnswer.options === "WithDraw") {
        const askMoney = await inquirer.prompt(
            {
                message: "How much money you want to withdraw?", type: "list", name: "withdraw",
                choices: ['1000', '2000', '5000', 'more']
            }
        )
        if (askMoney.withdraw === "1000") {
            person.amount -= askMoney.withdraw
            console.log(`Your remaining balance is ${person.amount}`);
        }
        else if (askMoney.withdraw === "2000") {
            person.amount -= askMoney.withdraw
            console.log(`Your remaining balance is ${person.amount}`);
        }
        else if (askMoney.withdraw === "5000") {
            person.amount -= askMoney.withdraw
            console.log(`Your remaining balance is ${person.amount}`);
        }
        else {
            const customMoney = await inquirer.prompt(
                { message: " How much money you want to withdraw?", type: "number", name: "customMoney" }
            )
            if (customMoney.customMoney <= person.amount) {
                person.amount -= customMoney.customMoney
                console.log(`Your remaining balance is ${person.amount}`);
            }
            else {
                console.log(`Too much Amount!!`);

            }
        }
    }
    if (choiceAnswer.options === "BalanceCheck") {
        console.log(`Your Total Balance is ${person.amount!!}`);

    }
}
else {
    console.log(`Incorrect Pin!!`);

}