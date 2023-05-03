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
    const course = currentYear - this.year;
    return Math.max(Math.min(course, 6), 1); // обмеження курсу від 1 до 6
  }
}

const firstStudent = new Student('Petro', 'Petrenko', 2019);
console.log(firstStudent.showFullName('Petrovych')); //  не виводить в консолі Petrenko Petro Petrovych???
console.log('Current course: ' + firstStudent.showCourse()); // Current course: 4


