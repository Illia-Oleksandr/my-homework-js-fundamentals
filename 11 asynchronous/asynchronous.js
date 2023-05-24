//1 task
function getPromise(message, delay) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(message);
    }, delay);
  });
}

// Приклад застосування функції
getPromise("test promise", 2000).then(function(data) {
  console.log(data);
});
//2 task
function calcArrProduct(arr) {
  return new Promise(function(resolve, reject) {
    // Перевірка наявності числових елементів в масиві
    if (arr.every((element) => typeof element === 'number')) {
      const product = arr.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
      resolve(product);
    } else {
      reject('Error! Incorrect array!');
    }
  });
}

// Приклад застосування функції
calcArrProduct([3, 4, 5])
  .then(function(result) {
    console.log(result); // 60
  })
  .catch(function(error) {
    console.log(error);
  });

calcArrProduct([5, "user2", 7, 12])
  .then(function(result) {
    console.log(result);
  })
  .catch(function(error) {
    console.log(error); // "Error! Incorrect array!"
  });
//3 task
// Перший Promise
new Promise(function(resolve, reject) {
  const number = prompt("Введіть число:");
  if (isNaN(number)) {
    reject(new Error("Введено некоректне число!"));
  } else {
    resolve(Number(number));
  }
})
  .catch(function(error) {
    console.log(error.message);
    return new Promise(function(resolve, reject) {
      // Другий Promise
      function askNumber() {
        const number = prompt("Введіть число:");
        if (isNaN(number)) {
          askNumber();
        } else {
          resolve(Number(number));
        }
      }
      askNumber();
    });
  })
  .then(function(result) {
    console.log("Введене число:", result);
  });
//4 task
const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));

async function showNumbers() {
  for (let i = 0; i < 10; i++) {
    await delay(i, Math.random() * 3000);
    console.log(i);
  }
}

showNumbers();
