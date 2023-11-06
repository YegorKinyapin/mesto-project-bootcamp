export function handleSubmitCard(evt) {
    evt.preventDefault();
    if (cardPopup.classList.contains('popup__container_submit-button_inactive')) {
      return;
    }
    addCard(creatCard(formPlace.value, formLink.value));
    closePopup(cardPopup);
    evt.target.reset();
}

export function handleSubmitProfile(evt) {
    evt.preventDefault();
    profileName.textContent = formName.value;
    profileActivity.textContent = formActivity.value;
    closePopup(profilePopup);
}

export function closePopupOverlay(popupItem) {
  popupItem.addEventListener("click", (evt) => {
    if (evt.currentTarget === evt.target) {
      closePopup(popupItem);
    }
  });
}
export function closePopupEsc(popupItem) {
  document.addEventListener('keydown', evt => {
    if (evt.key === 'Escape') {
      closePopup(popupItem);
    }
  });
}