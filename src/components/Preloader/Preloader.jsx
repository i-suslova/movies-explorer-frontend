import React from 'react'
import './Preloader.css'

const Preloader = () => {
  return (
    <div className='preloader'>
      <div className='preloader__container'>
        <div className='preloader__round-big'>
          <span className='preloader__round '></span>
        </div>
      </div>
    </div>
  )
};

export default Preloader

