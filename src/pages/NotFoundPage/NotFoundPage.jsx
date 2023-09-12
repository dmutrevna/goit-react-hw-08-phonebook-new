import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import { HOME_ROUTE } from 'constants/routes';

const NotFoundPage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Not found page</title>
      </Helmet>
      Error 404. Sorry, page wasn`t found.{' '}
      <Link to={HOME_ROUTE}>Back to the Home page</Link>
    </div>
  );
};

export default NotFoundPage;
