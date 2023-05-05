// Створюємо елементи
const body = document.createElement('body');
const main = document.createElement('main');
const div = document.createElement('div');
const p = document.createElement('p');

// Додаємо атрибути
main.setAttribute('class', 'mainClass check item');
div.setAttribute('id', 'myDiv');

// Додаємо елементи в структуру
p.textContent = 'First paragraph';
div.appendChild(p);
main.appendChild(div);
body.appendChild(main);

// Додаємо структуру до документу
document.documentElement.appendChild(body);