/*ДЗ 1
Написати свою реалізацію функції isNaN. 
Умови виконання ДЗ
Не використовувати функції або інші матеріали які ми не вивчали
Не використовувати isNaN/ Number.isNaN
customIsNaN має бути ідентичною за логікою до isNaN*/

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