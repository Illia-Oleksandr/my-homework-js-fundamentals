//1 завдання
const list = document.getElementById("list");

		const first = list.children[0].textContent;
		const last = list.children[list.children.length - 1].textContent;
		const second = list.children[1].textContent;
		const fourth = list.children[3].textContent;
		const third = list.children[2].textContent;

console.log(first + ", " + last + ", " + second + ", " + fourth + ", " + third);
//2 завдання
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
