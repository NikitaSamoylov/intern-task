import { useForm } from 'react-hook-form';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { signUp, login } from '../../utils/Response';

import styles from './RegisterForm.module.scss';

import passIcon from './icon.png';

type FormData = {
  lastName: string;
  firstName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const RegisterForm: React.FC = () => {
  const navigate = useNavigate();
  const passRef = useRef('password');
  const confirmPassRef = useRef('password');

  const [
    isPasswordVisible,
    setIsPasswordVisible
  ] = useState(false);
  const [
    isConfirmPasswordVisible,
    setIsConfirmPasswordVisible
  ] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  passRef.current = isPasswordVisible ?
    'text' :
    'password';
  confirmPassRef.current = isConfirmPasswordVisible ?
    'text' :
    'password';

  const handlePassword = () => {
    setIsPasswordVisible(
      isPasswordVisible => !isPasswordVisible
    )
  };

  const handleConfirmPassword = () => {
    setIsConfirmPasswordVisible(
      isConfirmPasswordVisible => !isConfirmPasswordVisible
    )
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<FormData>({
    mode: 'onBlur'
  });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);

    const user = {
      lastName: 'Пользователь',
      firstName: data.firstName,
      email: data.email,
      password: data.password,
    };

    await signUp(user)
      .then(() => login(user))
      .then(() => navigate('/main'))
      .catch(() => alert('Ошибка, попробуйте снова'))

    setIsLoading(false);

    reset();
  };

  return (
    <form onSubmit={ handleSubmit(onSubmit) }
      className={ styles.form }
    >
      <h2 className={ styles.form__title }>
        Регистрация
      </h2>
      <div className={ styles.form__element }>
        <label htmlFor="name"
          className={ styles.form__input_label }
        >
          Имя
          <input type="text"
            id='name'
            className={
              errors.firstName ?
                `
                ${ styles.form__item }
                ${ styles.form__item_error }
                ` :
                styles.form__item
            }
            {
            ...register("firstName", {
              required: 'заполните поле',
              minLength: {
                value: 2,
                message: 'минимум 2 символа'
              },
            })
            }
          />
        </label>
        {
          errors.firstName ?
            (
              <span className={ styles.form__item_notice }>
                { errors.firstName.message }
              </span>
            ) :
            null
        }
      </div>
      <div className={ styles.form__element }>
        <label htmlFor="email"
          className={ styles.form__input_label }
        >
          Электронная почта
          <input type="email"
            className={
              errors.email ?
                `
                ${ styles.form__item }
                ${ styles.form__item_error }
                ` :
                styles.form__item
            }
            id='email'
            {
            ...register("email", {
              required: 'заполните поле',
              minLength: {
                value: 2,
                message: 'минимум 2 символа'
              },
              pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            })
            }
          />
          <span className={ styles.form__item_notice }>
            {
              errors.email ?
                errors.email.message :
                null
            }
          </span>
        </label>
      </div>
      <div className={ styles.form__element }>
        <label htmlFor='password'
          className={ styles.form__input_label }
        >
          Пароль
          <input
            type={ passRef.current }
            className={
              errors.password ?
                `
                ${ styles.form__item }
                ${ styles.form__item_error }
                ` :
                styles.form__item
            }
            id='password'
            {
            ...register("password", {
              required: 'введите пароль',
              minLength: {
                value: 6,
                message: 'минимум 6 символов'
              }
            })
            }
          />
          <img src={ passIcon }
            alt="показать"
            className={ styles.form__item_showPass }
            onClick={ handlePassword }
          />
          <span className={ styles.form__item_notice }>
            {
              errors.password ?
                errors.password.message :
                null
            }
          </span>
        </label>
      </div>
      <div className={ styles.form__element }>
        <label htmlFor='confirmPassword'
          className={ styles.form__input_label }
        >
          Подтвердите пароль
          <input
            type={ confirmPassRef.current }
            className={
              errors.confirmPassword ?
                `
                ${ styles.form__item }
                ${ styles.form__item_error }
                ` :
                styles.form__item
            }
            id='confirmPassword'
            {
            ...register("confirmPassword", {
              required: 'подтвердите пароль',
              minLength: {
                value: 6,
                message: 'минимум 6 символов'
              },
              validate: (val: string) => {
                if (watch('password') !== val) {
                  return "пароли не совпадают";
                }
              },
            })
            }
          />
          <img src={ passIcon }
            alt="показать"
            className={ styles.form__item_showPass }
            onClick={ handleConfirmPassword }
          />
          <span className={ styles.form__item_notice }>
            {
              errors.confirmPassword ?
                errors.confirmPassword.message :
                null
            }
          </span>
        </label>
      </div>
      <button className={ styles.form__btn }>
        {
          !isLoading && (
            'Зарегистрироваться'
          )
        }
        {
          isLoading && (
            'Создаем аккаунт'
          )
        }
      </button>
    </form>
  )
};

export default RegisterForm;