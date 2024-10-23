// Задание 1

// for (let i = 0; i <= 10; i++) {
//     if (i === 0) {
//         console.log(`${i} - это ноль`);
//     } else if (i % 2 === 0) {
//         console.log(`${i} - чётное число`);
//     } else {
//         console.log(`${i} - нечётное число`);
//     }
// }


// Задание 2

// const arr = [1, 2, 3, 4, 5, 6, 7];

// arr.splice(arr.indexOf(4), 1);
// arr.splice(arr.indexOf(5), 1);
// console.log(arr);

// Задание 3

// Генерация массива из 5 чисел в диапазоне от 0 до 9
let array = [];
for (let i = 0; i < 5; i++) {
    array.push(Math.floor(Math.random() * 10));
}
console.log(array);

// Вычисление суммы элементов массива
let sum = 0
for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
console.log(sum);

// Нахождение минимального числа в массиве 
let minValue = Math.min(...array)
console.log(minValue);

// Проверка на наличие числа '3' в массиве 

let hasThree = array.includes(3);
console.log('Есть ли число 3:', hasThree);

// Задание 4

for (let i = 0; i < 20; i++) {
    console.log('x'.repeat(i));
    
}