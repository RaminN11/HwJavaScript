//Задание 1
// function cube(num) {
//     return num ** 3;
// }
// console.log(cube(2) + cube(3));

//задание 2

// function salary(money) {
//     return money * 0.87;
// }
// let text = prompt('Введите число:');
// let num = parseFloat(text);

// if (isNaN(num)) {
//     console.log('Значение задано неверно');
// } else {
//     let afterTax = salary(num);
//     console.log(`Размер заработной платы с учетом налога: ${afterTax}`);
// }



//Задание 3

// function findMax(a, b, c) {
//     return Math.max(a, b, c);
//     }

// let num1 = parseFloat(prompt('Введите первое число:'));
// let num2 = parseFloat(prompt('Введите второе число:'));
// let num3 = parseFloat(prompt('Введите третье число:'));

// let max = findMax(num1, num2, num3);

// console.log('Максимальное значение:', max);


// Задание 4

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num2 !==0 ? num1 / num2 : 'Делить на ноль нельзя';
}


console.log(add(2,5));
console.log(subtract(100,5));
console.log(multiply(2,5));
console.log(divide(2,5));
console.log(divide(5,0));