import React from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';

import { registerUser } from 'redux/store/auth/authOperations';

import {
  FormButton,
  FormContainer,
  FormInput,
  LoginPageContainer,
  TitleRegistration,
} from './RegisterPage.styled';
import { Notify } from 'notiflix';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const name = event.currentTarget.elements.userName.value;
    const email = event.currentTarget.elements.userEmail.value;
    const password = event.currentTarget.elements.userPassword.value;

    const formData = {
      name,
      email,
      password,
    };

    if (registerUser) {
      Notify.success(`Congratulations! You have registered`);
    }

    dispatch(registerUser(formData));
  };

  return (
    <LoginPageContainer>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Registration form</title>
      </Helmet>
      <TitleRegistration>Registration form</TitleRegistration>
      <FormContainer onSubmit={handleSubmit}>
        <label>
          <FormInput
            type="text"
            name="userName"
            placeholder="Enter your name..."
            required
          />
        </label>
        <label>
          <FormInput
            type="email"
            name="userEmail"
            placeholder="Enter your email..."
            required
          />
        </label>
        <label>
          <FormInput
            type="password"
            name="userPassword"
            placeholder="Enter your password..."
            minLength={7}
            required
          />
        </label>
        <FormButton type="submit">Register</FormButton>
      </FormContainer>
    </LoginPageContainer>
  );
};

export default RegisterPage;
