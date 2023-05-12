//1 task
function upperCase(str) {
  if (str.charAt(0) === str.charAt(0).toUpperCase()) {
    return "String's starts with uppercase character";
  } else {
    return "String's not starts with uppercase character";
  }
}
console.log(upperCase('regexp')); // "String's not starts with uppercase character"
console.log(upperCase('RegExp')); // "String's starts with uppercase character"

//2 task
function checkEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
console.log(checkEmail("Qmail2@gmail.com")); // true
console.log(checkEmail("example@.com")); // false
console.log(checkEmail("example@domain.com")); // true

//3 task
let text = "Java Script";
let regex = /(\w+)\s+(\w+)/;
let replaced = text.replace(regex, "$2, $1");
console.log(replaced); // виведе "Script, Java"

//4 task
function validateCardNumber(cardNumber) {
  const cleanedCardNumber = cardNumber.replace(/-/g, '');
  if (cleanedCardNumber.length !== 16) {
    return false;
  }
  if (!/^\d+$/.test(cleanedCardNumber)) {
    return false;
  }
  let sum = 0;
  for (let i = 0; i < 16; i++) {
    let digit = parseInt(cleanedCardNumber[i]);
    if (i % 2 === 0) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    sum += digit;
  }
  return sum % 10 === 0;
}
console.log(validateCardNumber('9999-9999-9999-9999'));//чому в консолі false??????????
console.log(validateCardNumber('1234-5678-9012-3456')); 
console.log(validateCardNumber('9999-9999-9999-999a')); 

//5 task
function checkEmail(email) {
  if (!/^[\w\.-]+@[a-zA-Z0-9_-]+\.[a-zA-Z0-9_-]{2,}$/.test(email)) {
    return "Email is not correct!";
  }
  if (/--/.test(email)) {
    return "Email is not correct!";
  }
  return "Email is correct!";
}
console.log(checkEmail('my_mail@gmail.com'));
console.log(checkEmail('#my_mail@gmail.com'));
console.log(checkEmail('my_ma--il@gmail.com'));

//6 task
function checkLogin(login) {
  const regex = /^[a-zA-Z][a-zA-Z0-9]{1,9}$/; // регулярний вираз для перевірки правильності логіна
  if (!regex.test(login)) {
    return false;
  }

  const numbers = login.match(/\d+(\.\d+)?/g); // знаходження всіх чисел в рядку
  return numbers ? numbers.map(parseFloat) : [];
}
console.log(checkLogin('ee1.1ret3'));//чому в консолі false????????????????????????
console.log(checkLogin('ee1*1ret3'));