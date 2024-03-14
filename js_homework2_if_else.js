//Задача 1: Класифікація оцінок (вирішується за допомогою if-else)
let mark = 50;
if (90 <= mark && mark <= 100) {
    console.log("відмінно");
} else if (70 <= mark && mark <= 89) {
    console.log("добре");
} else if (50 <= mark && mark <= 69) {
    console.log("задовільно");
} else if (mark < 50) {
    console.log("незадовільно");
} else {
    console.log("позаренджом");
}

//Задача 2: Вибір дії (вирішується за допомогою switch-case)
let mathOperator;
let number1 = 2;
let number2 = 3;
let result;

performOperation('ADD', 1, 2);
performOperation('add', 1, 2);
performOperation('subtract', 0, 2);
performOperation('multiply', 1, 0);
performOperation('divide', 1, 2);
performOperation('divide', 0, 2);
performOperation('divide', 1, 0);
performOperation('divide', 10, 11);
performOperation('divide', 100, 1000);
performOperation('hello', 100, 1000);

function performOperation(mathOperator, number1, number2) {
    switch (mathOperator) {
        case 'add':
            result = number1 + number2;
            console.log(`${number1} + ${number2} = ${result}`);
            break;
        case 'subtract':
            result = number1 - number2;
            console.log(`${number1} - ${number2} = ${result}`);
            break;
        case 'multiply':
            result = number1 * number2;
            console.log(`${number1} * ${number2} = ${result}`);
            break;
        case 'divide':
            if (number2 === 0) {
                console.log("Can't divide into 0");
            } else {
                result = number1 / number2;
                console.log(`${number1} / ${number2} = ${result}`);
            }
            break;
        default:
            console.log(`Invalid operation!`);
    }
}

//Задача 3: Перевірка на парність (вирішується за допомогою тернарного оператора)
function isEven(number) {
    return number % 2 === 0;
}
let numberToCheck;

checkIfEven(4);
checkIfEven(7);
checkIfEven(0);

function checkIfEven(numberToCheck) {
    isEven(numberToCheck) ?
        console.log(`${numberToCheck}: парне`) :
        console.log(`${numberToCheck}: непарне`);
}