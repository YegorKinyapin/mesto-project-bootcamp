import '../pages/index.css';
import {closePopupOverlay, closePopupEsc, openPopup, closePopup} from './modal.js';
import {enableValidation} from './validate.js';
import {creatCard} from './card.js';
import {getInitialCards, saveCards, getProfileInfo, patchProfileInfo} from './api.js';

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
const cardSubmitButton = cardPopup.querySelector('.popup__container_submit-button');

const allSelectorClasses = {
  form: '.form',
  fieldset: '.form__set',
  input: '.popup__container_form',
  submitButton: '.popup__container_submit-button',
  inputTypeError: 'form__input_type_error',
  errorText: 'form__input-error_active'
}

function addCard(card) {
  cardsSection.prepend(card);
}

function handleSubmitCard(evt) {
  evt.preventDefault();
  saveCards(formPlace.value, formLink.value)
  .then(res => {
    addCard(creatCard(res));
    closePopup(cardPopup);
    evt.target.reset();
    cardSubmitButton.setAttribute('disabled', true);
  })
  .catch((err) => {
    console.log(err);
  });
}


function handleSubmitProfile(evt) {
  evt.preventDefault();
  profileName.textContent = formName.value;
  profileActivity.textContent = formActivity.value;
  closePopup(profilePopup);
}

pictureCloseButton.addEventListener('click', () => {
  closePopup(picture);
});

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
  formName.value = profileName.textContent;
  formActivity.value = profileActivity.textContent;
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

enableValidation(allSelectorClasses);


getInitialCards()
.then(res => {
  console.log(res);
  res.forEach((item) => {
    addCard(creatCard(item));
  })
})
.catch((err) => {
  console.log(err);
});

// getProfileInfo(patchProfileInfo());

export {openPopup, pictureImage, pictureText, cardTemplate, picture}