import React from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';

import { loginUser } from 'redux/store/auth/authOperations';

import {
  FormButton,
  FormContainer,
  FormInput,
  LoginPageContainer,
  TitleRegistration,
} from 'pages/RegisterPage/RegisterPage.styled';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const email = event.currentTarget.elements.userEmail.value;
    const password = event.currentTarget.elements.userPassword.value;

    const formData = {
      email,
      password,
    };

    dispatch(loginUser(formData));
  };

  return (
    <LoginPageContainer>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Login</title>
      </Helmet>
      <TitleRegistration>Login page</TitleRegistration>
      <FormContainer onSubmit={handleSubmit}>
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
        <FormButton type="submit">Login</FormButton>
      </FormContainer>
    </LoginPageContainer>
  );
};

export default LoginPage;
