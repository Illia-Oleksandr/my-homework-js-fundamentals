//1 завдання
const colorElements = document.querySelectorAll('.colors .color');
const gradientElements = document.querySelectorAll('.gradients .gradient');
const outPriceElement = document.getElementById('outprice');

let price = 189.99;

function updatePrice() {
  outPriceElement.innerText = price.toFixed(2);
}

colorElements.forEach(colorElement => {
  colorElement.addEventListener('click', () => {
    colorElements.forEach(c => c.classList.remove('active'));
    colorElement.classList.add('active');

    const newPrice = parseFloat(colorElement.dataset.price);
    if (!isNaN(newPrice)) {
      price = newPrice;
      updatePrice();
    }
  });
});

gradientElements.forEach(gradientElement => {
  gradientElement.addEventListener('click', () => {
    gradientElements.forEach(g => g.classList.remove('active'));
    gradientElement.classList.add('active');

    const newPrice = parseFloat(gradientElement.dataset.price);
    if (!isNaN(newPrice)) {
      price = newPrice;
      updatePrice();
    }
  });
});
