/* 1. Задача: Конвертер валют
Завдання: Напишіть функцію convertCurrency, яка приймає суму в доларах США (USD) 
і код валюти, в яку потрібно конвертувати ('EUR', 'UAH', 'GBP'). 
Функція повинна повертати суму у вказаній валюті, використовуючи фіксовані курси валют 
(наприклад, 1 USD = 0.9 EUR, 1 USD = 35 UAH, 1 USD = 0.8 GBP). Якщо код валюти не підтримується,
 функція повинна повертати рядок з помилкою.*/

function convertCurrency(availableMoney, currency) {
    if (isNaN(availableMoney)) {
        return `Money should be a number! "${availableMoney}" is not a number`;
    }

    let convertionResult;
    switch (currency) {
        case 'EUR':
            convertionResult = availableMoney * 0.9
            break;
        case 'UAH':
            convertionResult = availableMoney * 35
            break;
        case 'GBP':
            convertionResult = availableMoney * 0.8
            break;
        default:
            convertionResult = `"${currency}" is unexpected currency`;
    }

    return convertionResult;
}

function executeFunction(availableMoney, currency) {
    let convertionResult = convertCurrency(availableMoney, currency);
    printResult(convertionResult);
}

function printResult(convertionResult) {
    if (typeof convertionResult == Number) {
        console.log(`here is your ${convertionResult}`);
    } else {
        console.error(convertionResult);
    }
}

executeFunction(1, "test");
executeFunction(10, "UAH");
executeFunction(10, "GBP");
executeFunction("o", "EUR");

/*2. Задача: Визначення дня тижня
Завдання: Створіть функцію getDayOfWeek, яка приймає число від 1 до 7 і повертає назву дня тижня, 
де 1 - це понеділок, а 7 - неділя. Якщо введене число не відповідає жодному дню тижня, функція має повертати рядок з помилкою.*/

function getDayOfWeek(numberOfDay) {
    let dayOfWeek;
    switch (numberOfDay) {
        case 1:
            dayOfWeek = "понеділок";
            break;
        case 2:
            dayOfWeek = "вівторок";
            break;
        case 3:
            dayOfWeek = "середа";
            break;
        case 4:
            dayOfWeek = "четвер";
            break;
        case 5:
            dayOfWeek = "п'ятниця";
            break;
        case 6:
            dayOfWeek = "субота";
            break;
        case 7:
            dayOfWeek = "неділя";
            break;
        default:
            dayOfWeek = `ERROR: "${numberOfDay}" is invalid value!`;
    }
    return dayOfWeek
}

function printDayOfWeekResult(numberOfDay, dayOfWeek) {
    if (dayOfWeek.includes("ERROR")) {
        console.log(dayOfWeek);
    } else {
        console.log(`${numberOfDay} - це ${dayOfWeek}`);
    }
};

function executeGetDayOfWeekFunction(numberOfDay) {
    let dayOfWeek = getDayOfWeek(numberOfDay);
    printDayOfWeekResult(numberOfDay, dayOfWeek);
    return dayOfWeek;
}

executeGetDayOfWeekFunction(1);
executeGetDayOfWeekFunction(2);
executeGetDayOfWeekFunction(3);
executeGetDayOfWeekFunction(4);
executeGetDayOfWeekFunction(5);
executeGetDayOfWeekFunction(6);
executeGetDayOfWeekFunction(7);
executeGetDayOfWeekFunction("hello");

/*3.Задача: Знайти число Фібоначчі
Завдання: Напишіть функцію fibonacci, що приймає число n як аргумент і повертає n-те число 
з послідовності Фібоначчі. Послідовність починається з 0 (нульовий елемент) і 1 (перший елемент),
 а кожне наступне число є сумою двох попередніх чисел.*/


 function getFibonacci(n) {
    if (n < 0 || isNaN(n)) {
        console.log("Unexpected input");
    } else {
        let firstNumber = 0;
        let secondNumber = 1;
        let sumNumber;

        if (n === 0 || n === 1) {
            return n;
        }

        for (let i = 2; i <= n; i++) {
            sumNumber = firstNumber + secondNumber;
            firstNumber = secondNumber;
            secondNumber = sumNumber;
        }
        return sumNumber;
    }
}

function printFunction(n) {
    var result = getFibonacci(n);
    if (result !== undefined) {
        console.log(`${n} number from getFibonacci is ${result}`);
    }
}

printFunction("test");
printFunction(0);
printFunction(1);
printFunction(2);
printFunction(3);
printFunction(4);
printFunction(5);
printFunction(6);
printFunction(7);
printFunction(8);
printFunction(9);
printFunction(10); 

// 4. extra task
const prompt = require('prompt-sync')();
let numberOfAttempts = 3;
let randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(`Random number is ${randomNumber}`);
let userNumber;

function guessNumber(randomNumber, numberOfAttempts) {
    console.log(`left ${numberOfAttempts} attempts`);
    if (numberOfAttempts <= 0) {
        console.log("Пока");
        return;
    }
    userNumber = reguestUserNumber();
    console.log(`User number is ${userNumber}`);

    if (userNumber === randomNumber) {
        console.log('Вгадали!');
    } else {
        if (randomNumber > userNumber) {
            console.log(`${userNumber} - занадто мале`);
        } else {
            console.log(`${userNumber} - занадто велике`);
        }
        numberOfAttempts = numberOfAttempts - 1;
        console.log('Спробуйте ще раз!');
        guessNumber(randomNumber, numberOfAttempts);
    }
}

function reguestUserNumber() {
    let userPrompt = prompt('What is your number? ');
    userNumber = parseInt(userPrompt);
    if (isNaN(userNumber) || userNumber > 10 || userNumber < 1) {
        console.log(`${userPrompt} is invalid value`);
        return reguestUserNumber();
    }
    return userNumber;
}

guessNumber(randomNumber, numberOfAttempts);