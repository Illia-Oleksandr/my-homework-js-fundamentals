//1 завдання
class Circle {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }

  getLength() {
    return 2 * Math.PI * this.radius;
  }

  static getLengthByRadius(radius) {
    return 2 * Math.PI * radius;
  }

  getCopy() {
    return new Circle(this.x, this.y, this.radius);
  }

  static create(x, y, radius) {
    return new Circle(x, y, radius);
  }

  isPointInside(x, y) {
    return Math.sqrt((x - this.x) ** 2 + (y - this.y) ** 2) <= this.radius;
  }

  toString() {
    return `Circle with center (${this.x}, ${this.y}) and radius ${this.radius}`;
  }
}


const circle = new Circle(0, 0, 5);

console.log(circle.getLength()); // виведе 31.41592653589793

console.log(Circle.getLengthByRadius(5)); // виведе 31.41592653589793

const copy = circle.getCopy();
console.log(copy.toString()); // виведе "Circle with center (0, 0) and radius 5"

console.log(Circle.create(1, 1, 10).toString()); // виведе "Circle with center (1, 1) and radius 10"

console.log(circle.isPointInside(3, 4)); // виведе true

console.log(circle.toString()); // виведе "Circle with center (0, 0) and radius 5"

//2 завдання

function propsCount(currentObject) {
  return Object.keys(currentObject).length;
}

let mentor = {
  course: "JS fundamental",
  duration: 3,
  direction: "web-development",
};

console.log(propsCount(mentor)); // виведе 3

//3 завдання

class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  showFullName() {
    console.log(this.surname + ' ' + this.name);
  }
}

class Student extends Person {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }

  showFullName(midleName) {
    console.log(this.surname + ' ' + this.name + ' ' + midleName);
  }

  showCourse() {
    const currentYear = new Date().getFullYear();
    const course = currentYear - this.year + 1;
    return Math.max(Math.min(course, 6), 1); // обмеження курсу від 1 до 6
  }
}

const firstStudent = new Student('Petro', 'Petrenko', 2019);
console.log(firstStudent.showFullName('Petrovych')); //  виводить в консолі Petrenko Petro Petrovych
console.log('Current course: ' + firstStudent.showCourse()); // Current course: 5

//5 завдання

class Worker {
  constructor(fullName, dayRate, workingDays) {
    this.fullName = fullName;
    this.dayRate = dayRate;
    this.workingDays = workingDays;
    this._experience = 1.2;
  }

  showSalary() {
    const salary = this.dayRate * this.workingDays;
    console.log(`${this.fullName} salary: ${salary}`);
    return salary;
  }

  showSalaryWithExperience() {
    const salary = this.dayRate * this.workingDays * this._experience;
    console.log(`${this.fullName} salary: ${salary}`);
    return salary;
  }

  get showExp() {
    return this._experience;
  }

  set setExp(value) {
    this._experience = value;
  }

  static sortBySalary(workers) {
    workers.sort((a, b) => a.showSalaryWithExperience() - b.showSalaryWithExperience());
    console.log('Sorted salary:');
    workers.forEach((worker) => console.log(`${worker.fullName}: ${worker.showSalaryWithExperience()}`));
  }
}

let worker1 = new Worker('John Johnson', 20, 23);
console.log(worker1.fullName);
worker1.showSalary();
console.log(`New experience: ${worker1.showExp}`);
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
console.log(`New experience: ${worker1.showExp}`);
worker1.showSalaryWithExperience();

let worker2 = new Worker('Tom Tomson', 48, 22);
worker2.showSalary();
worker2.setExp = 1.7;
worker2.showSalaryWithExperience();

let worker3 = new Worker('Andy Ander', 29, 23);
worker3.showSalary();
worker3.setExp = 1.5;
worker3.showSalaryWithExperience();

Worker.sortBySalary([worker1, worker2, worker3]);

//4 завдання
function SimpleMarker(color, inkPercentage) {
  this.color = color;
  this.inkPercentage = inkPercentage;
  
  this.print = function(text) {
    var inkRequired = text.replace(/\s/g, '').length * 0.5;
    if (inkRequired > this.inkPercentage) {
      console.log("Error: The marker is out of ink.");
    } else {
      console.log("%c" + text, "color: " + this.color);
      this.inkPercentage -= inkRequired;
    }
  }
}

function RefillableMarker(color, inkCapacity) {
  SimpleMarker.call(this, color, inkCapacity);
  this.inkCapacity = inkCapacity;
  
  this.refill = function() {
    this.inkPercentage = this.inkCapacity;
    console.log("The marker has been refilled.");
  }
}

// Створюємо новий простий маркер
var redMarker = new SimpleMarker("red", 50);

// Виводимо текст червоним кольором
redMarker.print("Hello, world!");

// Виводимо повідомлення про помилку (не вистачає чорнила)
redMarker.print("This text won't be printed because the marker is out of ink.");

// Створюємо новий маркер, що заправляється
var blueMarker = new RefillableMarker("blue", 100);

// Виводимо текст синім кольором
blueMarker.print("The sky is blue.");

// Заряджаємо маркер
blueMarker.refill();

// Виводимо новий текст синім кольором
blueMarker.print("The ocean is also blue.");
