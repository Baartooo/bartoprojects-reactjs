import React, { useState } from 'react';

const Image = (props) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { source } = props;

  return (
    <img
      src={source}
      className={`single-img img-${imageLoaded ? 'visible' : 'hidden'}`}
      alt=""
      onLoad={() => setImageLoaded(true)}
    />
  );
};

export default Image;
