import React from 'react';

import './EditButton.css';

<<<<<<< HEAD
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
=======
const EditButton = ({ buttonText }) => {

  return (
    <>

      <div className='basic-form__submit'>
        <span className='basic-form__main-error'></span>
        <button
          type='submit'
          className=' basic-form__button_disabled hover'>{buttonText}
        </button>
      </div>

>>>>>>> bf9cc22b0577b4c86d720b17440c85215251ea5c
    </>
  );
};

export default EditButton
<<<<<<< HEAD

=======
>>>>>>> bf9cc22b0577b4c86d720b17440c85215251ea5c
