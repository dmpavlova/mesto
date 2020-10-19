const popup = document.querySelector('.popup');
const popupProfile = document.querySelector('.popup_profile');
const editButton = document.querySelector('.edit-button');
const closeButton = popup.querySelector('.popup__close-button');
const formElement = document.querySelector('.form-container');
const nameInput = document.querySelector('.edit-form__name');
const savedNameInput = document.querySelector('.profile-info__title');
const jobInput = document.querySelector('.edit-form__job');
const savedJobInput = document.querySelector('.profile-info__subtitle');
const newPlace = document.querySelector('.popup_new-place');
const addButton = document.querySelector('.add-button');
const closeNP = document.querySelector('.popup__button-close');
const place = document.querySelector('.edit-form__place');
const linkImage = document.querySelector('.edit-form__link');
const createButton = document.querySelector('.edit-form__create-button');
const template = document.querySelector('.template');
const elements = document.querySelector('.elements');
const exitButton = document.querySelector('.popup__exit-button');
const FullScrImage = document.querySelector('.popup_fullscreen-image');
const popupImage = document.querySelector('.popup__image');
const popupImageTitle = document.querySelector('.popup__title_place_fullscreen-image');
const initialCards = [
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



const renderCards = () => {
    const places = initialCards.map(element => getItems(element));
    
    elements.prepend(...places);

};

const hendlerRemove = (event) => {
    event.target.closest('.element').remove();
};

const getItems = (data) => {
    const element = template.content.cloneNode(true);
    const removeButton = element.querySelector('.element__remove-button');
    const likeButton = element.querySelector('.element__like-button');
    const elementImage = element.querySelector('.element__image');   
    element.querySelector('.element__title').textContent = data.name;
    elementImage.alt = data.name;
    elementImage.src = data.link;
    removeButton.addEventListener('click', hendlerRemove);
    likeButton.addEventListener('click', (evt) => {
        evt.target.classList.toggle('element__like-button_active');
    });

    elementImage.addEventListener('click', (evt) => {
        popupImage.src = evt.target.src;
        popupImage.alt = evt.target.alt;
        popupImageTitle.textContent = evt.target.alt;
    
        openPopup(FullScrImage);
    });
    
    return element;
};


function addNewPlace(evt){
    evt.preventDefault();
    const item = getItems({
        name: place.value,
        link: linkImage.value
    })
    elements.prepend(item);
};


renderCards();

function openPopup(popup){
    popup.classList.add('popup_opened');
};

function closePopup(popup){
    popup.classList.remove('popup_opened');
};

function openProfile(){
    openPopup(popupProfile);
    nameInput.value = savedNameInput.textContent;
    jobInput.value = savedJobInput.textContent;  
};

function openNewPlace(){
    openPopup(newPlace);
};

function closeNewPlace(){
    closePopup(newPlace);
};

function formSubmitHandler (evt) {
    evt.preventDefault();
    savedNameInput.textContent = nameInput.value;
    savedJobInput.textContent = jobInput.value;
    closePopup(popupProfile);
};

function closeFullScrImage () {
    closePopup(FullScrImage);
};

editButton.addEventListener('click', openProfile);
closeButton.addEventListener('click', () => closePopup(popupProfile));
formElement.addEventListener('submit', formSubmitHandler);
addButton.addEventListener('click', openNewPlace);
closeNP.addEventListener('click', closeNewPlace);
createButton.addEventListener('click', addNewPlace);
exitButton.addEventListener('click', closeFullScrImage);
