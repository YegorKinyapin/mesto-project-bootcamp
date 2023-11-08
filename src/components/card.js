import {picture, pictureImage, pictureText, cardTemplate, openPopup} from './index.js';

export function creatCard(res) {
    const newCard = cardTemplate.cloneNode(true);
    const cardTitle = newCard.querySelector('.element__panel_title');
    const cardImage = newCard.querySelector('.element__image');
    cardTitle.textContent = res.name;
    cardImage.src = res.link;
    cardImage.alt = res.name;

    const heart = newCard.querySelector('.element__panel_heart');
    heart.addEventListener('click', () => {
        heart.classList.toggle('element__panel_heart_active')
    });
    
    const deleteButton = newCard.querySelector('.element__delete-button');
    deleteButton.addEventListener('click', () => {
        newCard.remove();
    })

    cardImage.addEventListener('click', () => {
        pictureImage.src = res.link;
        pictureImage.alt = res.name;
        pictureText.textContent = res.name;
        openPopup(picture);
    });

    return newCard;
}