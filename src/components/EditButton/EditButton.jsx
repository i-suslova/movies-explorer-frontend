import React from 'react';

import './EditButton.css';

import iconConsent from "../../images/iconConsent.svg";

import InfoTooltip from '../InfoTooltip/InfoTooltip';

const EditButton = (props) => {
  const {
    buttonText,
    isValidFormBtn,
    onSubmit,
    errorMessage,
    isSuccessResponse,
    setIsSuccessResponse,
  } = props;

  return (
    <>
      <div className='basic-form__submit-profile'>

        {isSuccessResponse ? (
          <InfoTooltip
            isOpen={true}
            onClose={setIsSuccessResponse}
            iconImage={iconConsent}
            popupMessage="Профиль успешно изменен."
          />
        ) : (
          <span className='basic-form__main-error'>{errorMessage}</span>
        )}
        <button
          type='submit'
          aria-label="Обновление данных профиля"
          className={`basic-form__button hover
          ${isValidFormBtn && !errorMessage ? '' : 'basic-form__button_disabled'}`}
          onClick={onSubmit}
          disabled={!isValidFormBtn || !!errorMessage}
        >
          {buttonText}
        </button>
      </div>
    </>
  );
};

export default EditButton
