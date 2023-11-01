const popupProfile = document.querySelector('.popup-profile');
const popupElement = document.querySelector('.popup-cards');
const addButton = document.querySelector('.profile__add-button');
const closeAddButton = popupElement.querySelector('.popup__close');
const formSectionCards = document.querySelector('.form_cards');
const formPlace = formSectionCards.querySelector('.popup__container_form_place');
const formLink = formSectionCards.querySelector('.popup__container_form_link');
const editButton = document.querySelector('.profile__info_edit-button');
const closeEditButton = document.querySelector('.popup__close');
const profileName = document.querySelector('.profile__info_title');
const profileActivity = document.querySelector('.profile__info_subtitle');
const formSectionProfile = document.querySelector('.form_profile');
const formName = formSectionProfile.querySelector('.popup__container_form_name');
const formActivity = formSectionProfile.querySelector('.popup__container_form_activity');
const buttonForm = document.querySelector('.popup__container_submit-button');
const picture = document.querySelector('.picture');
const closePicture = picture.querySelector('.popup__close');
const pictureImage = picture.querySelector('.picture-container__image');
const pictureText = picture.querySelector('.picture-container__text');
const cardTemplate = document.
querySelector('.template-card').content
.querySelector('.element');
const cardsSection = document.querySelector('.elements');

function creatCard(name, image) {
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
        picture.classList.add('popup_opened');
    });
    closePicture.addEventListener('click', () => {
        picture.classList.remove('popup_opened');
    });

    return newCard;
}

function addCard(card) {
    cardsSection.prepend(card);
}

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

initialCards.forEach((item) => {
    addCard(creatCard(`${item.name}`, `${item.link}`));
})

function handleSubmitCard(evt) {
    evt.preventDefault();
    addCard(creatCard(formPlace.value, formLink.value));
    popupElement.classList.remove('popup_opened');
    formPlace.value = '';
    formLink.value = '';
}

formSectionCards.addEventListener('submit', handleSubmitCard);

function handleSubmitProfile(evt) {
    evt.preventDefault();
    profileName.textContent = formName.value;
    profileActivity.textContent = formActivity.value;
    popupProfile.classList.remove('popup_opened');
}

formSectionProfile.addEventListener('submit', handleSubmitProfile);

function openCloseItem(open, close, parent) {
    open.addEventListener('click', () => {
        parent.classList.toggle('popup_opened');
    });
    close.addEventListener('click', () => {
        parent.classList.toggle('popup_opened');
    });
}

openCloseItem(addButton, closeAddButton, popupElement);
openCloseItem(editButton, closeEditButton, popupProfile);