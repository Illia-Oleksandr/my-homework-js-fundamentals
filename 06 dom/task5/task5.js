// Вибираю всі теги з класом "circle"
const circles = document.querySelectorAll('.circle');

// Перебирю кожен елемент
circles.forEach(circle => {
  // Вибираю значення атрибуту "data-anim"
  const animClass = circle.getAttribute('data-anim');
  
  // Додаю значення атрибуту як клас до елемента
  circle.classList.add(animClass);
});

// Перевірка, чи застосувались анімації
circles.forEach(circle => {
  console.log(circle.classList.contains(circle.getAttribute('data-anim')));
});
