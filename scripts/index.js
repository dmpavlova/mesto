let popup = document.querySelector('.popup');
let editButton = document.querySelector('.edit-button');
let closeButton = popup.querySelector('.popup__close-button');
let formElement = document.querySelector('.form-container');
let nameInput = document.querySelector('.edit-form__name');
let savedNameInput = document.querySelector('.profile-info__title');
let jobInput = document.querySelector('.edit-form__about-yourself');
let savedJobInput = document.querySelector('.profile-info__subtitle');

function openPopup(){
    nameInput.value = savedNameInput.textContent;
    jobInput.value = savedJobInput.textContent;
    popup.classList.add('popup_opened');
}

function closePopup(){
    popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    savedNameInput.textContent = nameInput.value;
    savedJobInput.textContent = jobInput.value;
    closePopup()
}
editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);
