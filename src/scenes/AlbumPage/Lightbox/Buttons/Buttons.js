import React from 'react';
import { IoIosClose, IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import './Buttons.css'

const LeftArrow = (props) => {
    return (
        <div className='arrow left button' onClick={props.onClick}>
            <IoIosArrowBack />
        </div>
    )
}

const RightArrow = (props) => {
    return (
        <div className='arrow right button' onClick={props.onClick}>
            <IoIosArrowForward />
        </div>
    )
}

const CloseX = (props) => {
    return (
        <div className='close-x button' onClick={props.onClick}>
            <IoIosClose />
        </div>
    )
}

export {
    LeftArrow,
    RightArrow,
    CloseX
}