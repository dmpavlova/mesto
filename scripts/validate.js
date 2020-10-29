const elementsValidation = {
  formSelector: '.form-container',
  inputSelector: '.form-input',
  submitButtonSelector: '.edit-form__submit-button',
  inactiveButtonClass: '.edit-form__submit-button:disabled',
  inputErrorClass: '.form-input:disabled',
  errorClass: '.form-error'
}

function showError(formElement, input, elementsValidation) {
  const errorElement = formElement.querySelector(`#${input.id}-error`);
  errorElement.textContent = input.validationMessage;
  input.classList.add(elementsValidation.inputErrorClass);
};

function hideError(formElement, input, elementsValidation) {
  const errorElement = formElement.querySelector(`#${input.id}-error`);
  errorElement.textContent = '';
  input.classList.remove(elementsValidation.inputErrorClass);
};

function checkInputValidation(formElement, input, elementsValidation) {
  if (input.checkValidity()) {
    hideError(formElement, input, elementsValidation);
  } else {
    showError(formElement, input, elementsValidation);
  }
};

function toggleButtonState(formElement, buttonElement, elementsValidation) {
  if (formElement.checkValidity()) {
      buttonElement.classList.remove(elementsValidation.inactiveButtonClass)
      buttonElement.disabled = false;
  } else {
      buttonElement.classList.add(elementsValidation.inactiveButtonClass)
      buttonElement.disabled = true;
  }
};

function setEventListeners(formElement, elementsValidation) {
    const inputElements = Array.from(formElement.querySelectorAll(elementsValidation.inputSelector));
    const buttonElement = formElement.querySelector(elementsValidation.submitButtonSelector);

    toggleButtonState(formElement, buttonElement, elementsValidation);

    inputElements.forEach((input) => {
        input.addEventListener('input', (evt) => {
            checkInputValidation(formElement, evt.target, elementsValidation);
            toggleButtonState(formElement, buttonElement, elementsValidation);
        });
    });
};

function enableValidation(elementsValidation, buttonElement) {
  const formElements = Array.from(document.querySelectorAll(elementsValidation.formSelector));
  formElements.forEach(form => {
    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
  });
    setEventListeners(form, elementsValidation, buttonElement);
  });
};


enableValidation({
  formSelector: '.form-container',
  inputSelector: '.form-input',
  submitButtonSelector: '.edit-form__submit-button',
  inactiveButtonClass: '.edit-form__submit-button:disabled',
  inputErrorClass: '.form-input:invalid',
  errorClass: '.form-error'
});