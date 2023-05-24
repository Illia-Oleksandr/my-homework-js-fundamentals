//1 task
$(document).ready(function() {
  // Знаходимо всі <h2> з класом "head" і змінюємо колір фону
  $("h2.head").css("background-color", "green");

  // Знаходимо елементи з класом "inner" всередині знайдених <h2> і змінюємо розмір шрифту
  $("h2.head .inner").css("font-size", "35px");
});

//2 task
$(document).ready(function() {
  // Знаходимо всі посилання <a>, які починаються на "https://"
  $("a[href^='https://']").attr("target", "_blank");
});


//3 task
$(document).ready(function() {
  // Знаходимо всі <div>, які стоять безпосередньо після <h3>
  var divs = $("h3 + div");

  // Переміщуємо кожен <div> перед відповідним <h3>
  divs.each(function() {
    var h3 = $(this).prev("h3");
    $(this).insertBefore(h3);
  });
});


//4 task
$(document).ready(function() {
  // Знаходимо всі чекбокси
  var checkboxes = $("input[type='checkbox']");

  // Створюємо лічильник для відстеження кількості вибраних чекбоксів
  var count = 0;

  // Додаємо обробник події для кожного чекбоксу
  checkboxes.change(function() {
    if (this.checked) {
      count++; // Збільшуємо лічильник, якщо чекбокс вибрано
    } else {
      count--; // Зменшуємо лічильник, якщо чекбокс скасовано
    }

    if (count >= 3) {
      // Якщо вибрано 3 чекбокси або більше, вимикаємо всі чекбокси
      checkboxes.attr("disabled", true);
    }
  });
});
