
// // Функція - як аргумент іншої функції

// const repeat = (x) => {
//   x();
//   x();
// }

// const num = () => {console.log(2 + 5);}

// repeat(num)  // Функція num - це Callback function

// // Callback function - це функція яка є аргументом для іншої функції 



// // (2) Функція, яка повертає функцію - називається factory function

// // lexical scope - це коли функція має доступ до змінних всередині іншої функції

// function sum(x) {
//   return function (y) {
//     return x + y;
//   };
// }

// let num1 = sum(5);
// console.log(num1(5))

setTimeout(() => {
  console.log(2 + 2);
}, 2000);