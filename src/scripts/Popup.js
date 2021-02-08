export class Popup {
    constructor(popupSelector){
        this._popupSelector = document.querySelector(popupSelector);
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
    }


    open(){
        this._popupSelector.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
        this._popupSelector.addEventListener('click',this._closeOnOverlay);
               
    }

    close(){
        this._popupSelector.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
        this._popupSelector.removeEventListener('click',this._closeOnOverlay);
        
    }

     _handleEscClose = (evt) => {
         if (evt.key === 'Escape'){
             this.close();
         }
     }
   
     _closeOnOverlay = (evt) => {
         if(evt.target === evt.currentTarget) {
             this.close();
             }
        
     }

    setEventListeners(){
        const buttonClose = this._popupSelector.querySelector('.popup__close-button');
        buttonClose.addEventListener('click', this.close);  
    }
}