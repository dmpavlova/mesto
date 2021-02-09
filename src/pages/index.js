import {Card} from '../scripts/components/Card.js';
import {initialCards, editButton, nameInput, jobInput, addButton, elements,
    elementsValidation,profileVal,newPlaceVal,template} from '../scripts/utils/constants.js'
import Section from '../scripts/components/Section.js';
import {FormValidator} from '../scripts/components/FormValidator.js';
import {PopupWithForm} from '../scripts/components/PopupWithForm.js';
import {PopupWithImage} from '../scripts/components/PopupWithImage.js';
import {UserInfo} from '../scripts/components/UserInfo.js'

import '../pages/index.css';

const profileValidator = new FormValidator(elementsValidation, profileVal);
const newPlaceValidator = new FormValidator(elementsValidation, newPlaceVal);

profileValidator.enableValidation();
newPlaceValidator.enableValidation();


const userInfo = new UserInfo('.profile-info__title','.profile-info__subtitle');
const popupEditProfile = new PopupWithForm({popupSelector: '.popup_profile',
submitForm:(values) => {
    userInfo.setUserInfo(values.name, values.job);
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


submitForm:(data)=>{
    const cardData = {
        name: data['place-name'],
        link: data['adress']
    }
    const cardItem = createCard(cardData.name, cardData.link, template, ()=>{
        popupFullscreenImage.open(cardData.name, cardData.link);
    });
    cardList.addItem(cardItem.render());
    popupNewPlace.close();
},})
  
popupNewPlace.setEventListeners();


const cardList = new Section({
    items: initialCards,
    renderer:(item)=>{
    const card = createCard(item.name,item.link, template, ()=>{
        popupFullscreenImage.open(item.name, item.link);
    });
    cardList.addItem(card.render());
}}, elements);
cardList.render();

function editButtonHandler () {
    const userObject =  userInfo.getUserInfo();
    nameInput.value = userObject.name;
    jobInput.value = userObject.about;
    popupEditProfile.open();
}


editButton.addEventListener('click', editButtonHandler);
addButton.addEventListener('click', popupNewPlace.open);

