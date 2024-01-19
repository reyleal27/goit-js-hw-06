const counter = document.querySelector('#counter');
const value = document.querySelector('#value');
let counterValue = 0;

counter.addEventListener('click', (event) => {
  if (event.target.dataset.action === 'increment') {
    counterValue++;
  } else if (event.target.dataset.action === 'decrement') {
    counterValue--;
  }
  value.textContent = counterValue;
});