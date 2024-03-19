/* 1. Задача: Конвертер валют
Завдання: Напишіть функцію convertCurrency, яка приймає суму в доларах США (USD) 
і код валюти, в яку потрібно конвертувати ('EUR', 'UAH', 'GBP'). 
Функція повинна повертати суму у вказаній валюті, використовуючи фіксовані курси валют 
(наприклад, 1 USD = 0.9 EUR, 1 USD = 35 UAH, 1 USD = 0.8 GBP). Якщо код валюти не підтримується,
 функція повинна повертати рядок з помилкою.

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