import { useState } from 'react';

export const useValidation = (initialState) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // обновляем ошибки при изменении значения поля
    const updatedErrors = { ...errors };

    if (name === 'name' && value.length < 2) {
      updatedErrors.name = 'Имя должно содержать минимум 2 символа';
    } else {
      updatedErrors.name = '';
    }

    if (name === 'email' && !/^\S+@\S+\.\S+$/.test(value)) {
      updatedErrors.email = 'Введите корректный адрес электронной почты';
    } else {
      updatedErrors.email = '';
    }

    if (name === 'password' && value.length < 6) {
      updatedErrors.password = 'Пароль должен содержать минимум 6 символов';
    } else {
      updatedErrors.password = '';
    }

    setErrors(updatedErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return {
    formData,
    errors,
    handleChange,
    handleSubmit,
  };
};
