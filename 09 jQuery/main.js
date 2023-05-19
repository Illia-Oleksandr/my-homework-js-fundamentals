//1 task
// Знаходжу всі <h2> з класом "head"
const headers = document.querySelectorAll('h2.head');

// Змінюю колір фону на зелений для знайдених елементів
headers.forEach(header => {
  header.style.backgroundColor = 'green';
});

// Знаходжу всі елементи з класом "inner" серед знайдених <h2>
const innerElements = document.querySelectorAll('h2.head .inner');

// Змінюю розмір шрифту на 35px для знайдених елементів
innerElements.forEach(element => {
  element.style.fontSize = '35px';
});
//2 task
  // Отримую всі посилання на сторінці
  const links = document.getElementsByTagName('a');

  // Проходжусь по кожному посиланню
  for (i = 0; i < links.length; i++) {
    let link = links[i];

    // Перевіряю, чи href починається з "https://"
    if (link.href.startsWith('https://')) {
      // Додаю атрибут target="_blank"
      link.setAttribute('target', '_blank');
    }
  }
  //3 task
  // Знаходжу всі теги <h3>
const newHeaders = document.querySelectorAll('h3');

// Проходжусь по кожному <h3>
headers.forEach(header => {
  // Знаходжу наступний елемент після <h3>
  const nextElement = header.nextElementSibling;

  // Перевіряю, чи є цей наступний елемент <div>
  if (nextElement && nextElement.tagName === 'DIV') {
    // Вставляю <div> перед <h3>
    header.parentNode.insertBefore(nextElement, header);
  }
});
//4 task
// Отримую посилання на всі чекбокси
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    // Лічильник позначених чекбоксів
    let checkedCount = 0;

    // Функція, яка слідкує за змінами у чекбоксах
    function handleCheckboxChange() {
      if (this.checked) {
        checkedCount++;

        if (checkedCount >= 3) {
          // Деактивую всі чекбокси
          checkboxes.forEach((checkbox) => {
            checkbox.disabled = true;
          });
        }
      }
    }

    // Додаю обробник подій до кожного чекбоксу
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener('change', handleCheckboxChange);
    });