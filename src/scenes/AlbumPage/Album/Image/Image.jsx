import React, { useState } from 'react';
import { css } from '@emotion/core';
import FadeLoader from 'react-spinners/FadeLoader';

const override = css`
  display: block;
  margin:  auto;
`;

const Image = (props) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { source } = props;

  return (
    <>
      <img
        src={source}
        className={`single-img img-${imageLoaded ? 'visible' : 'hidden'}`}
        alt=""
        onLoad={() => setImageLoaded(true)}
      />
      <FadeLoader
        css={override}
        loading={!imageLoaded}
        color="#c9c9c9"
      />

    </>
  );
};

export default Image;
