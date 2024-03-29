/*ДЗ 1
Написати свою реалізацію функції isNaN. 
Умови виконання ДЗ
Не використовувати функції або інші матеріали які ми не вивчали
Не використовувати isNaN/ Number.isNaN
customIsNaN має бути ідентичною за логікою до isNaN

let variableToCheck;

function customIsNaN(variableToCheck) {
    if (variableToCheck === null) {
        return false;
    }

    if (/^-?\d+(\.\d+)?$/.test(variableToCheck)) {
        return parseInt(variableToCheck) !== parseInt(variableToCheck)
    }
    return true;
}


console.log(customIsNaN('test'), isNaN('test'));
console.log(customIsNaN(12), isNaN(12));
console.log(customIsNaN(-12), isNaN(-12));
console.log(customIsNaN('12'), isNaN('12'));
console.log(customIsNaN('12.13'), isNaN('12.13'));
console.log(customIsNaN('12,13'), isNaN('12,13'));
console.log(customIsNaN(NaN), isNaN(NaN));
console.log(customIsNaN(undefined), isNaN(undefined));
console.log(customIsNaN(null), isNaN(null));
console.log(customIsNaN('2024/03/26'), isNaN('2024/03/26'));
console.log(customIsNaN('12 13'), isNaN('12 13'));
console.log(customIsNaN('-12'), isNaN('-12')); 

ДЗ 2

Перевірка теорії ймовірності. 
Напишіть функцію яка буде генерувати певну кількість випадкових чисел в діапазоні від 100 до 1000 включно. 
Порахувати кількість парних та непарних серед них. 
Обчислити відсоткове співвідношення - чи буде воно близьке до 50%50? 
Приклад функції checkProbabilityTheory(count). 
Параметр count буде вказувати скільки разів буде генеруватися випадкове число.

Умови виконання ДЗ
Функція виводить інформацію 
Кількість згенерованих чисел: кількість чисел
Парних чисел: кількість парних чисел
Не парних чисел: кількість не парних чисел
Відсоток парних до не парних: 

function checkProbabilityTheory(count) {
    if (count <= 0) {
        throw Error("Valur should be higher than 0");
    }
    const min = 100;
    const max = 1000;
    const randomNumbers = [];

    for (let i = 0; i < count; i++) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        randomNumbers.push(randomNumber);
    }
    return randomNumbers;
}

function countOddsNumbers(randomNumbers) {
    let evenCount = 0;
    let oddCount = 0;
    for (let i = 0; i < randomNumbers.length; i++) {
        if (randomNumbers[i] % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    return {
        even: evenCount,
        odd: oddCount
    };
}

function checkCorrelation(data) {
    const totalCount = data.even + data.odd;
    let oddCorrelation = (data.odd * 100) / totalCount;
    let evenCorrelation = 100 - oddCorrelation;

    return {
        oddCorrelation: Math.round(oddCorrelation),
        evenCorrelation: Math.round(evenCorrelation)
    };
}

randomNumbers = checkProbabilityTheory(8);

const count = countOddsNumbers(randomNumbers);
const correlations = checkCorrelation(count);

console.log('Quantity of genereted numbers:', randomNumbers.length);
console.log('Even count:', count.even);
console.log('Odd count:', count.odd);
console.log('Even correlation:', correlations.evenCorrelation + "%");
console.log('Odd correlation:', correlations.oddCorrelation + "%");
console.log('Random numbers:', randomNumbers);*/

/*ДЗ 3
Вивести на екран суму чисел від 1 до 100 включно, які не кратні 3.

function expectedNumbersGeneration() {
    let sumOfGeneratedNumbers = 0;
    for (let i = 1; i <= 100; i++) {
        if (i % 3 !== 0) {
            sumOfGeneratedNumbers += i;
        }
    }
    console.log("Sum of numbers from 1 to 100 that are not multiples of 3:", sumOfGeneratedNumbers);
}
expectedNumbersGeneration();*/

/*Додаткова задача:

Напишіть функцію на JavaScript, яка приймає рядок, виокремлює з нього всі цілі числа (ігноруючи дробові числа),
 перетворює їх з текстового формату в числовий  та обчислює їхню загальну суму.

Вимоги:
Функція повинна ітерувати кожен символ у вхідному рядку.
Використовуйте цикл для перегляду кожного символу та збору повних цілочисельних значень.
Ігноруйте нечислові символи та дробові числа під час обрахунку суми цілих чисел 
(якщо у нас зустрічається таки запис 123.23 - то сума має бути 146, 123+23=146).
Після визначення кожного цілого числа додайте його до загальної суми.
Не використовувати масиви та регулярні вирази для рішення*/

function integersSum(str) {

    let numberStr = '';
    let result = 0;

    for (let i = 0; i <= str.length; i++) {
        //let char = str[i];
        //let isMinus = char === '-';

        if (str[i] === '-' && numberStr.length === 0) {
            numberStr += str[i];
        } else if (isNaN(parseInt(str[i])) && numberStr.length !== 0 && str[i - 1] !== '-') {
            result += +numberStr;
            numberStr = '';
            if (str[i] === '-') {
                numberStr += str[i];
            }
        } else if (!isNaN(parseInt(str[i])) && str[i]) {
            numberStr += str[i];
        } else if (isNaN(parseInt(str[i])) && numberStr === '-' && str[i] !== '-') {
            numberStr = '';
        }
    }
    return result;
}
/*let result = integersSum('.123.|.12--76*'); //59
console.log(result);
result = integersSum('');
console.log(result);
result = integersSum('1abc2def3ghi'); //6
console.log(result);
result = integersSum('-.2---76-1.23');
console.log(result); //-52*/
result = integersSum('123.45px-67 8.9');
console.log(result); //118