const popupProfile = document.querySelector('.popup_profile');
const editButton = document.querySelector('.edit-button');
const closeButtonProfile = document.querySelector('.popup__close-button_place_profile');
const formElement = document.querySelector('.form-container');
const nameInput = document.querySelector('.edit-form__name');
const savedNameInput = document.querySelector('.profile-info__title');
const jobInput = document.querySelector('.edit-form__job');
const savedJobInput = document.querySelector('.profile-info__subtitle');
const newPlace = document.querySelector('.popup_new-place');
const addButton = document.querySelector('.add-button');
const closeButtonNewPlace = document.querySelector('.popup__close-button_place_new-place');
const place = document.querySelector('.edit-form__place');
const linkImage = document.querySelector('.edit-form__link');
const createButton = document.querySelector('.edit-form__create-button');
const template = document.querySelector('.template');
const elements = document.querySelector('.elements');
const closeButtonImage = document.querySelector('.popup__close-button_place_image');
const fullScrImage = document.querySelector('.popup_fullscreen-image');
const popupImage = document.querySelector('.popup__image');
const popupImageTitle = document.querySelector('.popup__title_place_fullscreen-image');
const popups= Array.from(document.querySelectorAll('.popup'));

const renderCards = () => {
    const places = initialCards.map(element => createCard(element));
    
    elements.prepend(...places);

};

const removeCard = (event) => {
    event.target.closest('.element').remove();
};


const createCard = (data) => {
    const element = template.content.cloneNode(true);
    const removeButton = element.querySelector('.element__remove-button');
    const likeButton = element.querySelector('.element__like-button');
    const elementImage = element.querySelector('.element__image');   
    element.querySelector('.element__title').textContent = data.name;
    elementImage.alt = data.name;
    elementImage.src = data.link;
    removeButton.addEventListener('click', removeCard);
    likeButton.addEventListener('click', getLike);

    elementImage.addEventListener('click', (evt) => {
        popupImage.src = evt.target.src;
        popupImage.alt = evt.target.alt;
        popupImageTitle.textContent = evt.target.alt;
    
        openPopup(fullScrImage);
    });
    
    return element;
};


function addNewPlace(evt){
    evt.preventDefault();
    const item = createCard({
        name: place.value,
        link: linkImage.value
    })
    elements.prepend(item);
    closePopup(newPlace);
}


renderCards();

function getLike (evt){
    evt.target.classList.toggle('element__like-button_active');
}

function openPopup(popup){
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
