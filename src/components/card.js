import {picture, pictureImage, pictureText, cardTemplate, openPopup} from './index.js';
import {likeCard, unlikeCard, deleteCard} from './api.js';

function likesCard (id, evt, likes , button) {
    likeCard(id)
    .then(card => {
        button.classList.toggle('element__panel_heart_active');
        likes.textContent = card.likes.length;
    })
    .catch((err) => {
        console.log(err);
      });
}

function unlikesCard(id, evt, likes, button) {
    unlikeCard(id)
    .then((card) => {
      button.classList.toggle('element__panel_heart_active');
      likes.textContent = card.likes.length;
    })
    .catch((err) => {
      console.log(err);
    });
  }
function toggleLikeCard (newcard, id, evt, likes) {
    const button = newcard.querySelector('.element__panel_heart')
    if (button.classList.contains('element__panel_heart_active')) {
        unlikesCard(id, evt, likes, button);
    }
    else {
        likesCard(id, evt, likes , button);
    }
}

function checkLike (user, card) {
    for (const like of card.likes) {
      if (like._id === user._id){
        return true;
      }
    }
    return false
}

function deleteOwnerCard(id, item) {
    deleteCard(id)
    .then(() => {
        item.remove()
    })
    .catch((err) => {
        console.log(err);
    });
}

export function creatCard(card, user) {
    const newCard = cardTemplate.cloneNode(true);
    const cardTitle = newCard.querySelector('.element__panel_title');
    const cardImage = newCard.querySelector('.element__image');
    cardTitle.textContent = card.name;
    cardImage.src = card.link;
    cardImage.alt = card.name;

    const likes = newCard.querySelector('.element__panel_heart-number');
    likes.textContent = card.likes.length;
    const heart = newCard.querySelector('.element__panel_heart');
    if (checkLike(user, card)) {
        heart.classList.add('element__panel_heart_active');
    }
    else {
        heart.classList.remove('element__panel_heart_active');
    }
    heart.addEventListener('click', evt => {
        toggleLikeCard(newCard, card._id, evt, likes);//, heart);
    });

    const deleteButton = newCard.querySelector('.element__delete-button');
    if (user._id !== card.owner._id) {
        deleteButton.classList.toggle('element__delete-button_invalid');
    }
    deleteButton.addEventListener('click', () => {
        deleteOwnerCard(card._id, newCard)
    });
    cardImage.addEventListener('click', () => {
        pictureImage.src = card.link;
        pictureImage.alt = card.name;
        pictureText.textContent = card.name;
        openPopup(picture);
    });

    return newCard;
}