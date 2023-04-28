//1 завдання
function sumSliceArray(arr, first, second) {
  if (isNaN(first) || isNaN(second)) {
    throw new TypeError("One or both input values are not numbers.");
  }
  if (first >= arr.length || second >= arr.length) {
    throw new RangeError("One or both input values exceed array length.");
  }
  return arr[first] + arr[second];
}

try {
  const arr = [1, 2, 3, 4, 5];
  const sum = sumSliceArray(arr, "3", 5);
  console.log(sum);
} catch (error) {
  console.log(`${error.name}: ${error.message}`);
}
//2 завдання
function checkAge() {
  let name = prompt("Enter your name:");
  let age = prompt("Enter your age:");
  let status = prompt("Enter your status (admin, moderator, user):");
  
  try {
    if (!age) {
      throw new Error("The field is empty! Please enter your age.");
    }
    if (isNaN(age)) {
      throw new TypeError("Age must be a number.");
    }
    if (age < 18 || age > 70) {
      throw new RangeError("Age must be between 18 and 70.");
    }
    if (status !== "admin" && status !== "moderator" && status !== "user") {
      throw new EvalError("Invalid status input.");
    }
    
    alert("You may access the movie.");
  } catch (error) {
    console.log(`${error.name}: ${error.message}`);
  }
}

checkAge();
//3 завдання
function calcRectangleArea(width, height) {
  if (isNaN(width) || isNaN(height)) {
    throw new TypeError("Both parameters must be numbers.");
  }
  return width * height;
}

try {
  const area = calcRectangleArea("a", 2);
  console.log(area);
} catch (error) {
  console.log(`${error.name}: ${error.message}`);
}

class MonthException {
  constructor(message) {
    this.name = "MonthException";
    this.message = message;
  }
}
//4 завдання
function showMonthName(month) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  if (month < 1 || month > 12) {
    throw new MonthException("Incorrect month number");
  }

  return monthNames[month - 1];
}

try {
  console.log(showMonthName(5)); // May
  console.log(showMonthName(14)); // MonthException Incorrect month number
} catch (e) {
  console.log(`${e.name} ${e.message}`);
}
//5 завдання
class UserException {
  constructor(message) {
    this.name = "UserException";
    this.message = message;
  }
}

function showUser(id) {
  if (id < 0) {
    throw new UserException("ID must not be negative");
  }
  return { id };
}

function showUsers(ids) {
  const users = [];
  for (let i = 0; i < ids.length; i++) {
    try {
      users.push(showUser(ids[i]));
    } catch (e) {
      console.log(`${e.name}: ${e.message}: ${ids[i]}`);
    }
  }
  return users;
}

console.log(showUsers([7, -12, 44, 22]));
// UserException: ID must not be negative: -12
// [ { id: 7 }, { id: 44 }, { id: 22 } ]