export const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];
export const popupProfile = document.querySelector('.popup_profile');
export const editButton = document.querySelector('.edit-button');
export const closeButtonProfile = document.querySelector('.popup__close-button_place_profile');
export const formElement = document.querySelector('.form-container');
export const nameInput = document.querySelector('.edit-form__name');
export const savedNameInput = document.querySelector('.profile-info__title');
export const jobInput = document.querySelector('.edit-form__job');
export const savedJobInput = document.querySelector('.profile-info__subtitle');
export const newPlace = document.querySelector('.popup_new-place');
export const addButton = document.querySelector('.add-button');
export const closeButtonNewPlace = document.querySelector('.popup__close-button_place_new-place');
export const createButton = document.querySelector('.edit-form__create-button');
export const closeButtonImage = document.querySelector('.popup__close-button_place_image');
export const fullScrImage = document.querySelector('.popup_fullscreen-image');
export const popupImage = document.querySelector('.popup__image');
export const popupImageTitle = document.querySelector('.popup__title_place_fullscreen-image');
export const template = document.querySelector('.template');
export const elements = document.querySelector('.elements');
export const elementsValidation = {
    formSelector: '.form-container',
    inputSelector: '.form-input',
    submitButtonSelector: '.edit-form__submit-button',
    inactiveButtonClass: '.edit-form__submit-button:disabled',
    inputErrorClass: '.form-input:invalid',
    errorClass: '.form-error'
  }

export const profileVal = document.querySelector('.popup_profile').querySelector('.form-container');
export const newPlaceVal = document.querySelector('.popup_new-place').querySelector('.form-container');