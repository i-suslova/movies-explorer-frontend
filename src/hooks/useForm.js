import { useState, useCallback } from "react";

import { nameRegex, emailRegex, passwordRegex } from '../utils/constants';

const useForm = () => {

  const [inputValues, setInputValues] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [isValidForm, setIsValidForm] = useState(false);

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setInputValues({ ...inputValues, [name]: value });

    setErrors({
      ...errors,
      [name]: (() => {
        if (name === 'email' && !emailRegex.test(value)) {
          return 'Некорректный формат электронной почты.';
        }
        if (name === 'password' && !passwordRegex.test(value)) {
          return 'Пароль должен содержать минимум 6 символов, включая хотя бы одну букву и одну цифру.';
        }
        if (name === 'name' && !nameRegex.test(value)) {
          return 'Имя должно содержать от 2 до 30 символов и может включать буквы, пробелы, дефисы.';
        }

        return target.validationMessage;
      })(),
    });

    const isNameValid = name === 'name' ? nameRegex.test(value) : true;
    const isEmailValid = name === 'email' ? emailRegex.test(value) : true;
    const passwordValid = name === 'password' ? passwordRegex.test(value) : true;

    setIsValidForm(
      isNameValid && isEmailValid && passwordValid &&
      target.closest("form").checkValidity()
    );

  };

  const resetForm = useCallback(
    (newInputValues = {}, newErrors = {}, newisValidForm = false) => {
      setInputValues(newInputValues);
      setErrors(newErrors);
      setIsValidForm(newisValidForm);
    },
    [setInputValues, setErrors, setIsValidForm]
  );


  return { inputValues, handleChange, errors, isValidForm, resetForm, setErrors };
}
export default useForm
