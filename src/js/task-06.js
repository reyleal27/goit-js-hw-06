const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur', () => {
  if (validationInput.value.length === parseInt(validationInput.dataset.length)) {
    validationInput.classList.remove('invalid');
    validationInput.classList.add('valid');
  } else {
    validationInput.classList.remove('valid');
    validationInput.classList.add('invalid');
  }
});
