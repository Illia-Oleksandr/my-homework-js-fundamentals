//1 завдання
// Створення нового вікна
let myWindow = window.open("", "", "width=300, height=300");

// Затримка 2 секунди та зміна розміру вікна на 500х500 пікселів
setTimeout(function(){
  myWindow.resizeTo(500, 500);
}, 2000);

// Затримка 4 секунди та переміщення вікна в точку з координатами (200, 200)
setTimeout(function(){
  myWindow.moveTo(200, 200);
}, 4000);

// Затримка 6 секунди та закриття вікна
setTimeout(function(){
  myWindow.close();
}, 6000);

console.log("Вікно було створено та змінено розмір та положення. Зачекайте декілька секунд, щоб побачити, як вікно закриється.");
//2 завдання
function changeCSS() {
  // Знаходимо елемент з ідентифікатором "text"
  var textElement = document.getElementById("text");

  // Змінюємо стиль елемента
  textElement.style.color = "orange";
  textElement.style.fontSize = "20px";
  textElement.style.fontFamily = "Comic Sans MS";
  
  // Виводимо повідомлення про зміну стилю в консоль
  console.log("Style changed!");
}
//3 завдання
// отримуємо посилання на елементи сторінки
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const link = document.getElementById("link");

// задаємо події для кожної кнопки та лінки
button1.addEventListener("click", function() {
	document.body.style.backgroundColor = "blue";
});

button2.addEventListener("dblclick", function() {
	document.body.style.backgroundColor = "pink";
});

button3.addEventListener("mousedown", function() {
	document.body.style.backgroundColor = "brown";
});

button3.addEventListener("mouseup", function() {
	document.body.style.backgroundColor = "white";
});

link.addEventListener("mouseover", function() {
	document.body.style.backgroundColor = "yellow";
});

link.addEventListener("mouseout", function() {
	document.body.style.backgroundColor = "white";
});

// виведення повідомлень у консоль браузера
console.log("JavaScript code has been executed");

//4 завдання
function deleteSelected() {
  let select = document.getElementById("mySelect");
  select.options[select.selectedIndex].remove();
}
function deleteSelected() {
  let select = document.getElementById("mySelect");
  let selectedOption = select.options[select.selectedIndex];
  selectedOption.remove();
  console.log("Видалено елемент: " + selectedOption.text);
}
//5 завдання
const myButton = document.getElementById('myButton');

myButton.addEventListener('click', () => {
  console.log('I was pressed!');
});

myButton.addEventListener('mouseenter', () => {
  console.log('Mouse on me!');
});

myButton.addEventListener('mouseleave', () => {
  console.log('Mouse is not on me!');
});
//6 завдання
function trackWindowSize() {
  // Отримуємо висоту та ширину вікна браузера
  const width = window.innerWidth;
  const height = window.innerHeight;

  // Виводимо значення в консоль
  console.log(`Ширина вікна: ${width}px, Висота вікна: ${height}px`);
}

// Викликаємо функцію для відслідковування зміни розміру вікна браузера
window.addEventListener('resize', trackWindowSize);
//7 завдання
const citiesByCountry = {
  'Germany': ['Berlin', 'Munich', 'Hamburg'],
  'USA': ['New York', 'Los Angeles', 'Chicago'],
  'Ukraine': ['Kyiv', 'Lviv', 'Odessa'],
};
const countrySelect = document.getElementById('country');
const citiesSelect = document.getElementById('cities');
citiesSelect.innerHTML = '';
const selectedCountry = countrySelect.value;
const cities = citiesByCountry[selectedCountry];

for (let i = 0; i < cities.length; i++) {
  const option = document.createElement('option');
  option.value = cities[i];
  option.text = cities[i];
  citiesSelect.appendChild(option);
}
const selectedCityElement = document.getElementById('selected-city');