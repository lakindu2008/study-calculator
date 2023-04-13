const display = document.querySelector('.display');
const keys = document.querySelectorAll('.key');

keys.forEach(key => {
  key.addEventListener('click', () => {
    const keyValue = key.textContent;
    if (keyValue === 'C') {
      display.textContent = '';
    } else if (keyValue === '=') {
      display.textContent = eval(display.textContent);
    } else {
      display.textContent += keyValue;
    }
  });
});
