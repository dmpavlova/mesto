import {Card} from './card.js';
import {initialCards, editButton, nameInput, jobInput, addButton, place, linkImage,elements,
    elementsValidation,profileVal,newPlaceVal,template} from './constants.js'
import Section from './Section.js';
import {FormValidator} from './FormValidator.js';
import {PopupWithForm} from './PopupWithForm.js';
import {PopupWithImage} from './PopupWithImage.js';
import {UserInfo} from './UserInfo.js'

import '../pages/index.css';

const profileValidator = new FormValidator(elementsValidation, profileVal);
const newPlaceValidator = new FormValidator(elementsValidation, newPlaceVal);


const userInfo = new UserInfo('.profile-info__title','.profile-info__subtitle');
const popupEditProfile = new PopupWithForm({popupSelector: '.popup_profile',
submitForm:(values) => {
    userInfo.setUserInfo(values.name, values.about);
    popupEditProfile.close();
  }
});
popupEditProfile.setEventListeners();


function createCard(name, link, templateSelector, handleCardClick) {
    return new Card ({
      name: name,
      link: link,
      templateSelector: templateSelector,
      handleCardClick: handleCardClick
    });
  };

const popupFullscreenImage = new PopupWithImage('.popup_fullscreen-image');
popupFullscreenImage.setEventListeners();


const popupNewPlace = new PopupWithForm({popupSelector:'.popup_new-place',
submitForm:()=>{
    const cardItem = createCard(place.value, linkImage.value, template, ()=>{
        popupFullscreenImage.open(cardItem._name, cardItem._link);
    });
    const newCard = new Section({items:[cardItem],renderer:()=>{
        newCard.addItem(cardItem.render());
    }},elements);
    newCard.render();
    popupNewPlace.close();
}
});
popupNewPlace.setEventListeners();


const cardList = new Section({
    items: initialCards,
    renderer:(item)=>{
    const card = createCard(item.name,item.link, template, ()=>{
        popupFullscreenImage.open(card._name, card._link);
    });
    cardList.addItem(card.render());
}}, elements);
cardList.render();

function editButtonHandler () {
    const userObject =  userInfo.getUserInfo();
    nameInput.value = userObject.name;
    jobInput.value = userObject.about;
    profileValidator.enableValidation();
    popupEditProfile.open();
}

function addButtonHandler () {
    newPlaceValidator.enableValidation();
    popupNewPlace.open();
}

editButton.addEventListener('click', editButtonHandler);
addButton.addEventListener('click', addButtonHandler);

