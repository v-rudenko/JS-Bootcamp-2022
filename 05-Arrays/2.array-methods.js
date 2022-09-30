// shift method  Видаляє перший елемент масиву



let numbers = [1, 2, 3, 4, 54, 115, 789, 324];

const reset = () => {
  numbers = [1, 2, 3, 4, 54, 115, 789, 324];
}

const print = () => {
  console.log(numbers);
}
// let movies = ["The Lake House", "Memento"];

// const reset = () => {
//   movies = ["The Lake House", "Memento"];
// }

// const print = () => {
//   console.log(movies);
// }

// console.log(movies);

// movies.shift();
// console.log(movies)

// // unshift  Додає елемент на початок масиву

// movies.unshift('baboon');
// console.log(movies);

// // pop method - remove element from the end
// reset()
// movies.pop()
// // movies.pop()
// print();

// console.log("");

let num2 = numbers.splice(0, 4);
print()
console.log(num2);

console.log("");

reset();

// splice remove and replace

num2 = numbers.splice(0, 2, 111, 222, 333);

print()
