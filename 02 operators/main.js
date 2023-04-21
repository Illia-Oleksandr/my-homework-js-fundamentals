// 1 завдання

let a = 1;
let b = 2;
let c = 3;

let result = a < b && b < c;
console.log(result); 

// 2 завдання

let x = 1;
let y = 2;

let res1 = "" + x + y;
console.log(res1); // ""12""
console.log(typeof res1); // ""string""

let res2 = !!x + "" + y;
console.log(res2); // ""true2""
console.log(typeof res2); // ""string""

let res3 = x < y;
console.log(res3); // true
console.log(typeof res3); // ""boolean""

let res4 = x * "a";
console.log(res4); // NaN
console.log(typeof res4); // ""number""

// 3 завдання

let isAdult = prompt("Вам є 18 років?");

if (isAdult >= 18) {
  console.log("Ви досягли повнолітнього віку");
} else {
  console.log("Ви ще надто молоді");
}

// 4 завдання

let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5];
let maxCount = 0;
let mostFrequent = null;
let counts = {};

for (let i = 0; i < arr.length; i++) {
  let num = arr[i];
  counts[num] = (counts[num] || 0) + 1;
  if (counts[num] > maxCount) {
    maxCount = counts[num];
    mostFrequent = num;
  }
}

let newArr = arr.filter(num => num !== mostFrequent);

console.log(newArr); // [4, 2, 1, 6, 3, 2]
console.log([mostFrequent]); // [5]

// 5 завдання

let side1 = prompt('Введіть довжину першої сторони трикутника');
let side2 = prompt('Введіть довжину другої сторони трикутника');
let side3 = prompt('Введіть довжину третьої сторони трикутника');

if (!side1 || !side2 || !side3 || isNaN(side1) || isNaN(side2) || isNaN(side3)) {
  console.log('Incorrect data');
} else {

  side1 = +side1;
  side2 = +side2;
  side3 = +side3;
  
  if (side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1) {
    console.log('Incorrect data');
  } else {
    
    const semiPerimeter = (side1 + side2 + side3) / 2;
    const area = Math.sqrt(semiPerimeter * (semiPerimeter - side1) * (semiPerimeter - side2) * (semiPerimeter - side3));
    console.log(`Площа трикутника: ${area.toFixed(3)}`);
  
    
    if (side1 ** 2 + side2 ** 2 === side3 ** 2 || side1 ** 2 + side3 ** 2 === side2 ** 2 || side2 ** 2 + side3 ** 2 === side1 ** 2) {
      console.log('Цей трикутник є прямокутним');
    } else {
      console.log('Цей трикутник не є прямокутним');
    }
  }
}

// 6 завдання

const date = new Date();
const hour = date.getHours();

if (hour >= 23 || hour < 5) {
  console.log('Доброї ночі');
} else if (hour >= 5 && hour < 11) {
  console.log('Доброго ранку');
} else if (hour >= 11 && hour < 17) {
  console.log('Доброго дня');
} else {
  console.log('Доброго вечора');
}