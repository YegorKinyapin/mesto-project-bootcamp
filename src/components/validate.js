export const showInputError = (formElement, inputElement, errorMesage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add('form__input_type_error');
    errorElement.textContent = errorMesage;
    errorElement.classList.add('form__input-error_active');
  }
  
export const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('form__input_type_error');
    errorElement.classList.remove('form__input-error_active');
    errorElement.textContent = '';
  }
  
export const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
    }
    else {
      hideInputError(formElement, inputElement);
    }
  }
  
export const hasInvalidInput = (inputList) => {
    return inputList.some(inputElement => {
      return !inputElement.validity.valid;
    });
  }
  
export const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
      buttonElement.setAttribute('disabled', true);
    }
    else {
      buttonElement.removeAttribute('disabled', true);
    }
  }
  
export const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.popup__container_form'));
    const buttonElement = formElement.querySelector('.popup__container_submit-button');
  
    toggleButtonState(inputList, buttonElement);
  
    inputList.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        checkInputValidity(formElement, inputElement);
        toggleButtonState(inputList, buttonElement);
      });
    });
  }
  
export const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.form'));
  
    formList.forEach(formElement => {
      formElement.addEventListener('submit', evt => {
        evt.preventDefault();
      });
  
      const fieldsetList = Array.from(formElement.querySelectorAll('.form__set'));
      fieldsetList.forEach(item => {
        setEventListeners(item);
      });
    });
  }