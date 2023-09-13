import styled from 'styled-components';

export const UserContainer = styled.div`
  /* display: flex; */
`;

export const ButtonUser = styled.button`
  text-decoration: none;
  border: 1px solid black;
  position: relative;
  overflow: hidden;
  width: 80px;
  height: 35px;
  cursor: pointer;
  text-align: center;
  margin: 0 auto;
  border-radius: 20px;
  margin-top: 15px;
  margin-right: 20px;

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

export const UserMenuStyled = styled.span`
  text-decoration: none;
  color: black;
  margin-right: 20px;
  font-weight: bold;
`;
