import {Popup} from './Popup.js';

export class PopupWithImage extends Popup {
    constructor(popupSelector){
        super(popupSelector)
    }

    open(name,link){
        super.open()
        this._image = this._popupSelector.querySelector('.popup__image');

        this._popupSelector.querySelector('.popup__title').textContent = name;
        this._image.src = link;
        this._image.alt = name;
    }
}