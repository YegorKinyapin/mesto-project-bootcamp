import {picture, pictureImage, pictureText, cardTemplate, cardsSection, openPopup, initialCards} from './index.js';

export function creatCard(name, image) {
    const newCard = cardTemplate.cloneNode(true);
    const cardTitle = newCard.querySelector('.element__panel_title');
    const cardImage = newCard.querySelector('.element__image');
    cardTitle.textContent = name;
    cardImage.src = image;
    cardImage.alt = name;

    const heart = newCard.querySelector('.element__panel_heart');
    heart.addEventListener('click', () => {
        heart.classList.toggle('element__panel_heart_active')
    });
    
    const deleteButton = newCard.querySelector('.element__delete-button');
    deleteButton.addEventListener('click', () => {
        newCard.remove();
    })

    cardImage.addEventListener('click', () => {
        pictureImage.src = image;
        pictureImage.alt = name;
        pictureText.textContent = name;
        openPopup(picture);
    });

    return newCard;
}