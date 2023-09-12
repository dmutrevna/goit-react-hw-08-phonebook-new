import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import Navigation from './Navigation/Navigation';
import { appRoutes } from 'constants/routes';

export const App = () => {
  return (
    <div>
      <Navigation />
      <main>
        <Suspense>
          <Routes>
            {appRoutes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};
