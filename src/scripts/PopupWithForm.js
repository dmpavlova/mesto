import {Popup} from './Popup.js';

export class PopupWithForm extends Popup {
    constructor({popupSelector, submitForm}){
        super(popupSelector);
        this._submitForm = submitForm;
        this._formElement = this._popupSelector.querySelector('.form-container');
    }

    _getInputValues() {
        this._inputList = this._popupSelector.querySelectorAll('.popup__input');

        this._formValues = {};
    
        this._inputList.forEach(input => {
          this._formValues[input.name] = input.value;
        });
    
        return this._formValues;
      }

    setEventListeners() {
        super.setEventListeners();
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitForm(this._getInputValues());
          })
    }

    close(){
        super.close();
        this._formElement.reset();
    }
}