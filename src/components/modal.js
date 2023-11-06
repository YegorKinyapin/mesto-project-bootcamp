export function closePopupOverlay(popupItem) {
  popupItem.addEventListener("click", (evt) => {
    if (evt.currentTarget === evt.target) {
      closePopup(popupItem);
    }
  });
}

export function closePopupEsc(evt) {
    if (evt.key === 'Escape') {
      closePopup(popupItem);
    }
}

export function openPopup(popupItem) {
  popupItem.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
}
export function closePopup(popupItem) {
  popupItem.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc);
}