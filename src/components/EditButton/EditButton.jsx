import React from 'react';

import './EditButton.css';

const EditButton = (props) => {
  const { buttonText, isValidFormBtn, onSubmit, errorMessage, isSuccessResponse} = props;

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
          className={`basic-form__button hover ${isValidFormBtn && !errorMessage ? '' : 'basic-form__button_disabled'}`}
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

