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

