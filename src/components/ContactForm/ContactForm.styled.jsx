import styled from 'styled-components';

export const AppContainer = styled.div`
  background-color: #f7f7f7;
  margin: 0 auto;
  max-width: 500px;
  padding: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const TitlePhone = styled.h1`
  text-align: center;
  font-weight: bold;
  font-size: 36px;
  padding-bottom: 30px;
  padding-top: 10px;
  color: rgb(29, 30, 30);
  text-transform: uppercase;
  text-shadow: 10px 10px 10px rgba(146, 148, 248, 0.4);
`;

export const TitleContacts = styled.h2`
  text-align: center;
  font-weight: bold;
  font-size: 26px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const SubTitle = styled.h3`
  font-size: 18px;
  padding-bottom: 4px;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 380px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;

  h2 {
    margin-bottom: 8px;
  }

  input {
    padding: 8px;
    margin-bottom: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 10px;
    outline: none;

    &:focus {
      border-color: rgb(146, 148, 248);
    }
  }

  button {
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
  }
`;
