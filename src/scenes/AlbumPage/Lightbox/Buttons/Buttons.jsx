import React from 'react';
import {
  IoIosClose,
  IoIosArrowBack,
  IoIosArrowForward,
} from 'react-icons/io';
import './Buttons.css';

export const LeftArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="arrow left button" onClick={onClick}>
      <IoIosArrowBack />
    </div>
  );
};

export const RightArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="arrow right button" onClick={onClick}>
      <IoIosArrowForward />
    </div>
  );
};

export const CloseX = (props) => {
  const { onClick } = props;
  return (
    <div className="close-x button" onClick={onClick}>
      <IoIosClose />
    </div>
  );
};
