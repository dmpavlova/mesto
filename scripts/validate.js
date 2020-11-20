import {FormValidator} from './FormValidator.js'

const elementsValidation = {
    formSelector: '.form-container',
    inputSelector: '.form-input',
    submitButtonSelector: '.edit-form__submit-button',
    inactiveButtonClass: '.edit-form__submit-button:disabled',
    inputErrorClass: '.form-input:disabled',
    errorClass: '.form-error'
  }



  const profileVal = document.querySelector('.popup_profile').querySelector('.form-container');
  const newPlaceVal = document.querySelector('.popup_new-place').querySelector('.form-container');


  const profileValidator = new FormValidator(elementsValidation, profileVal);
  const newPlaceValidator = new FormValidator(elementsValidation, newPlaceVal);


  profileValidator.enableValidation();
  newPlaceValidator.enableValidation();