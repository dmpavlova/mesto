import {popupImage,fullScrImage} from './constants.js'
import {openPopup} from './index.js'

export class Card {
    constructor(data, cardSelector) {
		this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    
	}
	
  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);

    return cardElement;
  }

  _delete() {
    this._element.remove();
  }

  _like() {
   this._element.querySelector('.element__like-button').classList.toggle('element__like-button_active');
  }

    generateCard() {
    this._element = this._getTemplate();

    this._element.querySelector('.element__image').src = this._link;
    this._element.querySelector('.element__image').alt = this._name;
    this._element.querySelector('.element__title').textContent = this._name;

    this._element
      .querySelector('.element__remove-button')
      .addEventListener('click', () => this._delete());

    this._element
      .querySelector('.element__like-button')
      .addEventListener('click', () => this._like());

      this._element
      .querySelector('.element__image')
      .addEventListener('click', (evt) => {
        popupImage.src = evt.target.src;
        popupImage.alt = evt.target.alt;
        popupImage.textContent = evt.target.alt;
    
        openPopup(fullScrImage);
      });

    return this._element;
  }
}

