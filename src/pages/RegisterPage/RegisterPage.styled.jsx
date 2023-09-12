import styled from 'styled-components';

export const LoginPageContainer = styled.div`
  width: 360px;
  padding: 2% 0 0;
  margin: auto;
`;
export const FormContainer = styled.form`
  position: relative;
  z-index: 1;
  background: #ffffff;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
`;

export const TitleRegistration = styled.h2`
  font-family: 'Roboto', sans-serif;
  padding-bottom: 20px;
  text-align: center;
`;

export const FormInput = styled.input`
  font-family: 'Roboto', sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
`;

export const FormButton = styled.button`
  text-decoration: none;
  border: 1px solid rgb(146, 148, 248);
  position: relative;
  overflow: hidden;
  width: 200px;
  height: 35px;
  cursor: pointer;
  text-align: center;
  margin: 0 auto;
  border-radius: 20px;
  margin-top: 15px;

  &:hover {
    box-shadow: 1px 1px 25px 10px rgba(146, 148, 248, 0.4);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(146, 148, 248, 0.4),
      transparent
    );
    transition: all 650ms;
  }

  &:hover::before {
    left: 100%;
  }
`;
