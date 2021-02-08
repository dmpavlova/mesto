export class Card {
    constructor({name, link, templateSelector, handleCardClick}) {
		this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;       
  }
  
  _delete(evt) {
    evt.target.closest('.element').remove();
  }

  _like(evt) {
    evt.target.classList.toggle('element__like-button_active');
  }

  render() {
    this._element = this._templateSelector.content.cloneNode(true);
    const elementImage = this._element.querySelector('.element__image');

    elementImage.src = this._link;
    elementImage.alt = this._name;
    this._element.querySelector('.element__title').textContent = this._name;

    this._element
      .querySelector('.element__remove-button')
      .addEventListener('click', this._delete);

    this._element
      .querySelector('.element__like-button')
      .addEventListener('click', this._like);

      elementImage
      .addEventListener('click', () => this._handleCardClick());

    return this._element;
  }

}

