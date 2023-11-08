  const showInputError = (formElement, inputElement, errorMesage, settings) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(settings.inputTypeError);
    errorElement.textContent = errorMesage;
    errorElement.classList.add(settings.errorText);
  }
  
  const hideInputError = (formElement, inputElement, settings) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(settings.inputTypeError);
    errorElement.classList.remove(settings.errorText);
    errorElement.textContent = '';
  }
  
  const checkInputValidity = (formElement, inputElement, settings) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage, settings);
    }
    else {
      hideInputError(formElement, inputElement, settings);
    }
  }
  
  const hasInvalidInput = (inputList) => {
    return inputList.some(inputElement => {
      return !inputElement.validity.valid;
    });
  }
  
  const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
      buttonElement.setAttribute('disabled', true);
    }
    else {
      buttonElement.removeAttribute('disabled', true);
    }
  }
  
  const setEventListeners = (formElement, settings) => {
    const inputList = Array.from(formElement.querySelectorAll(settings.input));
    const buttonElement = formElement.querySelector(settings.submitButton);
  
    toggleButtonState(inputList, buttonElement);
  
    inputList.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        checkInputValidity(formElement, inputElement, settings);
        toggleButtonState(inputList, buttonElement);
      });
    });
  }
  
export const enableValidation = (settings) => {
    const formList = Array.from(document.querySelectorAll(settings.form));
  
    formList.forEach(formElement => {
      formElement.addEventListener('submit', evt => {
        evt.preventDefault();
      });
  
      const fieldsetList = Array.from(formElement.querySelectorAll(settings.fieldset));
      fieldsetList.forEach(item => {
        setEventListeners(item, settings);
      });
    });
  }