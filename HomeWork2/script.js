// Задание 1

// let num1 = Number(prompt('Введите первое число'));
// let num2 = Number(prompt('Введите второе число'));

// if (num1 <= 1 && num2 >= 3) {
//     console.log(true);
// } else {
//     console.log(false);
// }


// Задание 2
// let test = true;
// console.log(test ? '+++' : '---');


// Задание 3

// let day = Number(prompt('Введите число месяца'))

// let decade;
// if (day >= 1 && day <= 10) {
//     decade = 'первую';
// } else if (day >= 11 && day <= 20) {
//     decade = 'вторую';
// } else if (day >= 21 && day <= 31) {
//     decade = 'третью'
// } else {
//     console.log('Введите число от 1 до 31');
// }

// console.log(`Число ${day} попадает в ${decade} декаду месяца`);

//Задание 4
let number = parseInt(prompt('Введите число:'));

let units = number % 10;
let tens = Math.floor((number % 100) / 10);
let hundreds = Math.floor(number / 100);

console.log(`В числе ${number} количество сотен: ${hundreds}, десятков: ${tens}, единиц: ${units}`);