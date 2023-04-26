//1 завдання
function createArray(start, end) {
  const arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
}

let arr = createArray(2, 9);
console.log(arr); // [2,3,4,5,6,7,8,9]
//2 завдання
function printNumbers(a, b) {
  let str = '';
  for (let i = a; i <= b; i++) {
    for (let j = 1; j <= i - a + 1; j++) {
      str += i + ',';
    }
  }
  console.log(str.slice(0, -1));//видаляє кому в кінці
}

printNumbers(1, 5); // 1,2,2,3,3,3,4,4,4,4,5,5,5,5,5
//3 завдання
function randArray(k) {
  const arr = [];
  for (let i = 0; i < k; i++) {
    arr.push(Math.floor(Math.random() * 500) + 1);
  }
  return arr;
}

console.log(randArray(5)); // 5 випадкових цілих чисел в діапазоні 1-500
//6 завдання
function calc(a, b, op) {
  switch (op) {
    case 1:
      return a - b;
    case 2:
      return a * b;
    case 3:
      return a / b;
    default:
      return a + b;
  }
}

console.log(calc(10, 3, 1)); // виведе 7 в консоль
//7 завдання
function findUnique(arr) {
  const set = new Set(arr);
  return set.size === arr.length;
}

console.log(findUnique([1, 2, 3, 5, 3])); // виведе false в консоль
console.log(findUnique([1, 2, 3, 5, 11])); // виведе true в консоль
//4 завдання
function compact(newArray) {
  const result = [];
  for (let i = 0; i < newArray.length; i++) {
    if (!result.includes(newArray[i])) {
      result.push(newArray[i]);
    }
  }
  return result;
}

const newArray = [5, 3, 4, 5, 6, 7, 3];
const secondArray = compact(newArray);
console.log(secondArray); // [5, 3, 4, 6, 7]