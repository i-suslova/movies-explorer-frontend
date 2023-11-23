import React, { useEffect } from "react";

import './InfoTooltip.css';

const InfoTooltip = (props) => {
  const {
    iconImage,
    popupMessage,
    onClose,
    isOpen,
  } = props;

   //обработчик `Escape`
   useEffect(() => {
    if (!isOpen) return;
    const closeByEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", closeByEscape);
    return () => document.removeEventListener("keydown", closeByEscape);
  }, [isOpen, onClose]);

  //обработчик оверлея
  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`popup  ${isOpen ? "popup_opened" : ""}`}
      onClick={handleOverlay}
    >

      <div className="popup__container">
        <button
          type="button"
          className={`popup__button-close hover`}
          aria-label="закрыть"
          onClick={onClose}
        ></button>
        
          <img
            src={iconImage}
            alt={popupMessage}
            className="popup__icon"
          />

          <span className="popup__result-title">{popupMessage}</span>

      </div>
    </div>
  );
}

export default InfoTooltip;


