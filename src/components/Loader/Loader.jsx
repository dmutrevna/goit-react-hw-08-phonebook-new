import React from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { LoaderStyle } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderStyle>
      <RotatingLines
        strokeColor="purple"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </LoaderStyle>
  );
};
