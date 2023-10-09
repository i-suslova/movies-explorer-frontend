import React from 'react'
import { Link } from 'react-router-dom';

import './BasicForm.css';

import logo from "../../images/logo.svg";

const BasicForm = (props) => {
  const { children, title, buttonText, text, textLink, link } = props;

  return (
    <form
      action="#"
      method="post"
      className='basic-form'
      name="basic-form-form"
      noValidate
    >
      <Link
        className="basic-form__logo hover"
        to="/"
      >
        <img
          src={logo}
          alt="логотип сайта"
        />
      </Link>

      <h2 className="basic-form__title">{title}</h2>

      {children}

      <button
        type="submit"
        className='basic-form__button hover'>{buttonText}
      </button>

      <div className="basic-form__wrapper">
        <p className="basic-form__wrapper-text">{text}</p>
        <Link to={link} className="basic-form__link hover">
          {textLink}
        </Link>


      </div>
    </form>
  )
}

export default BasicForm

