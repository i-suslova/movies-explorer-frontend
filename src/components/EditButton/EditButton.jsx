import React, { useEffect } from 'react';

import './EditButton.css';

const EditButton = (props) => {
  const {
    buttonText,
    isValidFormBtn,
    onSubmit,
    errorMessage,
    isSuccessResponse,
    setIsSuccessResponse,
    isFormDisabled,
  } = props;

  useEffect(() => {
    if (isSuccessResponse) {
      const timeoutId = setTimeout(() => {
        setIsSuccessResponse(false);
      }, 2000);
      return () => clearTimeout(timeoutId);
    }
  }, [isSuccessResponse, setIsSuccessResponse]);

  return (
    <>
      <div className='basic-form__submit-profile'>

        {isSuccessResponse ? (
          <span className='basic-form__main-error'>Профиль успешно изменен.</span>
        ) : (
          <span className='basic-form__main-error'>{errorMessage}</span>
        )}
        <button
          type='submit'
          aria-label="Обновление данных профиля"
          className={`basic-form__button hover
          ${isValidFormBtn && !errorMessage && !isFormDisabled ? '' : 'basic-form__button_disabled'}`}
          onClick={onSubmit}
          disabled={isFormDisabled || !isValidFormBtn || !!errorMessage}
        >
          {buttonText}
        </button>
      </div>
    </>
  );
};

export default EditButton

