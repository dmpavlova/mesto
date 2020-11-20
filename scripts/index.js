import {Card} from './card.js';
import {initialCards} from './initialCards.js';
import {popupProfile, editButton, closeButtonProfile, formElement, nameInput, savedNameInput, jobInput, savedJobInput,
    newPlace,addButton, closeButtonNewPlace, place, linkImage, createButton, closeButtonImage, fullScrImage} from './constants.js'


initialCards.forEach((item) => {
	const card = new Card(item, '.template');
	const cardElement = card.generateCard();

    document.querySelector('.elements').prepend(cardElement);
});


function addNewPlace(evt){
    evt.preventDefault();
    const item = new Card({
        name: place.value,
        link: linkImage.value
    }, '.template')
    const itemElement = item.generateCard();

    document.querySelector('.elements').prepend(itemElement);

    closePopup(newPlace);
}


export function openPopup(popup){
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closeOnEsc);
}

function closePopup(popup){
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeOnEsc);

}

function openProfile(){
    openPopup(popupProfile);
    nameInput.value = savedNameInput.textContent;
    jobInput.value = savedJobInput.textContent;  
}


function changeProfile (evt) {
    evt.preventDefault();
    savedNameInput.textContent = nameInput.value;
    savedJobInput.textContent = jobInput.value;
    closePopup(popupProfile);
}


function closeOnEsc (evt){
    const popupOpened = document.querySelector('.popup_opened');
    if (evt.key === 'Escape'){
            closePopup(popupOpened); 
        }
}


function closeOnOverlay (evt){
    const popupOpened = document.querySelector('.popup_opened');
    if(evt.target===evt.currentTarget){
            closePopup(popupOpened);
        }
    
}



editButton.addEventListener('click', openProfile);
closeButtonProfile.addEventListener('click', () => closePopup(popupProfile));
formElement.addEventListener('submit', changeProfile);
addButton.addEventListener('click', () => openPopup(newPlace));
closeButtonNewPlace.addEventListener('click', () => closePopup(newPlace));
createButton.addEventListener('click', addNewPlace);
closeButtonImage.addEventListener('click', () => closePopup(fullScrImage));
popupProfile.addEventListener('click',closeOnOverlay);
newPlace.addEventListener('click',closeOnOverlay);
fullScrImage.addEventListener('click',closeOnOverlay);
