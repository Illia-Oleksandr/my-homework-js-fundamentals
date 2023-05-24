//1 task
// Знаходжу всі <h2> з класом "head"
const headers = $('h2.head');

// Змінюю колір фону на зелений для знайдених елементів
headers.css('background-color', 'green');

// Знаходжу всі елементи з класом "inner" серед знайдених <h2>
const innerElements = $('h2.head .inner');

// Змінюю розмір шрифту на 35px для знайдених елементів
innerElements.css('font-size', '35px');

//2 task
// Отримую всі посилання на сторінці
const links = $('a');

// Проходжусь по кожному посиланню
links.each(function() {
let link = $(this);

// Перевіряю, чи href починається з "https://"
if (link.attr('href').startsWith('https://')) {
// Додаю атрибут target="_blank"
link.attr('target', '_blank');
}
});

//3 task
// Знаходжу всі теги <h3>
const newHeaders = $('h3');

// Проходжусь по кожному <h3>
newHeaders.each(function() {
let header = $(this);

// Знаходжу наступний елемент після <h3>
const nextElement = header.next();

// Перевіряю, чи є цей наступний елемент <div>
if (nextElement && nextElement.is('div')) {
// Вставляю <div> перед <h3>
header.before(nextElement);
}
});

//4 task
// Отримую посилання на всі чекбокси
const checkboxes = $('input[type="checkbox"]');

// Лічильник позначених чекбоксів
let checkedCount = 0;

// Функція, яка слідкує за змінами у чекбоксах
function handleCheckboxChange() {
if (this.checked) {
    checkedCount++;

if (checkedCount >= 3) {
  // Деактивую всі чекбокси
  checkboxes.prop('disabled', true);
    }
  }
}

// Додаю обробник подій до кожного чекбоксу
checkboxes.on('change', handleCheckboxChange);