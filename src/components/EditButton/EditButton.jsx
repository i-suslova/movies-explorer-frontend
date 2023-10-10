import React from 'react';

import './EditButton.css';

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

    </>
  );
};

export default EditButton
