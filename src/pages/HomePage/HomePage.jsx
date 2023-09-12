import React from 'react';
import { Helmet } from 'react-helmet';
import { HomeTitle } from './HomePage.styled';

export const HomePage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home page</title>
      </Helmet>
      <HomeTitle>PHONEBOOK</HomeTitle>
    </div>
  );
};

export default HomePage;
