import '../pages/index.css';
import {closePopupOverlay, closePopupEsc, openPopup, closePopup} from './modal.js';
import {enableValidation, setEventListeners, toggleButtonState, hasInvalidInput, checkInputValidity, 
  hideInputError, showInputError} from './validate.js';
import {creatCard} from './card.js';

const profilePopup = document.querySelector('.popup-profile');
const cardPopup = document.querySelector('.popup-cards');
const addButton = document.querySelector('.profile__add-button');
const cardCloseButton = cardPopup.querySelector('.popup__close');
const formSectionCards = document.querySelector('.form_cards');
const formPlace = formSectionCards.querySelector('.popup__container_form_place');
const formLink = formSectionCards.querySelector('.popup__container_form_link');
const editButton = document.querySelector('.profile__info_edit-button');
const profileCloseButton = document.querySelector('.popup__close');
const profileName = document.querySelector('.profile__info_title');
const profileActivity = document.querySelector('.profile__info_subtitle');
const formSectionProfile = document.querySelector('.form_profile');
const formName = formSectionProfile.querySelector('.popup__container_form_name');
const formActivity = formSectionProfile.querySelector('.popup__container_form_activity');
const picture = document.querySelector('.picture');
const pictureCloseButton = picture.querySelector('.popup__close');
const pictureImage = picture.querySelector('.picture-container__image');
const pictureText = picture.querySelector('.picture-container__text');
const cardTemplate = document.
querySelector('.template-card').content
.querySelector('.element');
const cardsSection = document.querySelector('.elements');

function addCard(card) {
  cardsSection.prepend(card);
}

initialCards.forEach((item) => {
  addCard(creatCard(`${item.name}`, `${item.link}`));
})

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


pictureCloseButton.addEventListener('click', () => {
  closePopup(picture);
});

function handleSubmitCard(evt) {
  evt.preventDefault();
  if (cardPopup.classList.contains('popup__container_submit-button_inactive')) {
    return;
  }
  addCard(creatCard(formPlace.value, formLink.value));
  closePopup(cardPopup);
  evt.target.reset();
}
function handleSubmitProfile(evt) {
  evt.preventDefault();
  profileName.textContent = formName.value;
  profileActivity.textContent = formActivity.value;
  closePopup(profilePopup);
}

formSectionCards.addEventListener('submit', handleSubmitCard);

formSectionProfile.addEventListener('submit', handleSubmitProfile);

formName.value = profileName.textContent;
formActivity.value = profileActivity.textContent;

addButton.addEventListener('click', () => {
  openPopup(cardPopup);
});
cardCloseButton.addEventListener('click', () => {
  closePopup(cardPopup);
});
editButton.addEventListener('click', () => {
  openPopup(profilePopup);
});
profileCloseButton.addEventListener('click', () => {
  closePopup(profilePopup);
});
closePopupOverlay(profilePopup);
closePopupOverlay(cardPopup);
closePopupOverlay(picture);
closePopupEsc(profilePopup);
closePopupEsc(cardPopup);
closePopupEsc(picture);

enableValidation();

export {profilePopup, cardPopup, addButton, cardCloseButton, formSectionCards, 
  formPlace, formLink, editButton, profileCloseButton, profileName, profileActivity, formSectionProfile, formName, formActivity, picture, 
  pictureCloseButton, pictureImage, pictureText, cardTemplate, cardsSection, initialCards}