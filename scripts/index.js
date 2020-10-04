let popup = document.querySelector('.popup');
let editButton = document.querySelector('.edit-button');
let editForm = document.querySelector('.edit-form');
let submitButton = editForm.querySelector('.edit-form__submit-button');
let closeButton = popup.querySelector('.popup__close-button');
let formElement = document.querySelector('.popup__container');
let profile = document.querySelector('.profile-info');
let nameInput = editForm.querySelector('.edit-form__name');
let savedNameInput = profile.querySelector('.profile-info__title');
let jobInput = editForm.querySelector('.edit-form__about-yourself');
let savedJobInput = profile.querySelector('.profile-info__subtitle');

function OpenClosePopup(){
popup.classList.toggle('popup__opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    savedNameInput.textContent = nameInput.value
    savedJobInput.textContent = jobInput.value
    OpenClosePopup()
}
editButton.addEventListener('click', OpenClosePopup);
closeButton.addEventListener('click', OpenClosePopup);
formElement.addEventListener('submit', formSubmitHandler);
