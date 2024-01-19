const controls = document.querySelector('#controls');
const createButton = controls.querySelector('[data-create]');
const destroyButton = controls.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

createButton.addEventListener('click', () => {
  const amount = parseInt(controls.querySelector('input').value);

  if (isNaN(amount) || amount < 1 || amount > 100) {
    alert('Please enter a number between 1 and 100.');
    return;
  }
  const boxElements = [];
  for (let i = 0; i < amount; i++) {
    const boxElement = document.createElement('div');
    boxElement.style.width = `${30 + i * 10}px`;
    boxElement.style.height = `${30 + i * 10}px`;
    boxElement.style.backgroundColor = getRandomHexColor();
    boxElements.push(boxElement);
  }
  boxes.append(...boxElements);
});

destroyButton.addEventListener('click', () => {
  boxes.innerHTML = '';
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}
