export class FormValidator{
  constructor(settings, formElement){
      this._settings = settings;
      this._formElement = formElement;
      this._input = this._formElement.querySelector(this._settings.inputSelector);
      this._inputElements = Array.from(this._formElement.querySelectorAll(this._settings.inputSelector));
      this._buttonElement = this._formElement.querySelector(this._settings.submitButtonSelector);
  }

  _showError(input) {
    this._errorElement = this._formElement.querySelector(`#${input.id}-error`);
    this._errorElement.textContent = this._input.validationMessage;
    this._input.classList.add(this._settings.inputErrorClass);
  }
  
  _hideError(input) {
    this._errorElement = this._formElement.querySelector(`#${input.id}-error`);
    this._errorElement.textContent = '';
    this._input.classList.remove(this._settings.inputErrorClass);
  }
  
  _checkInputValidation(formElement, inputElement, settings) {
    if (this._input.checkValidity()) {
      this._hideError(formElement, inputElement, settings);
    } else {
      this._showError(formElement, inputElement, settings);
    }
  }
  
  _toggleButtonState() {
    if (this._formElement.checkValidity()) {
      this._buttonElement.classList.remove(this._settings.inactiveButtonClass)
      this._buttonElement.disabled = false;
    } else {
      this._buttonElement.classList.add(this._settings.inactiveButtonClass)
      this._buttonElement.disabled = true;
    }
  }
  
  _setEventListeners() {
      this._toggleButtonState();
  
      this._inputElements.forEach((input) => {
          input.addEventListener('input', (evt) => {
              this._checkInputValidation(evt.target);
              this._toggleButtonState();
          });
      });
  }
  
  enableValidation() {
    this._formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
    });
      this._setEventListeners();
  
  }
}
