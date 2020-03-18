import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { IoIosClose } from 'react-icons/io';
import './Buttons.css'

const LeftArrow = (props) => {
    return (
        <button className='arrow left' onClick={props.onClick}>
            <FaArrowLeft />
        </button>
    )
}

const RightArrow = (props) => {
    return (
        <button className='arrow right' onClick={props.onClick}>
            <FaArrowRight />
        </button>
    )
}

const CloseX = (props) => {
    return (
        <button className='close-x' onClick={props.onClick}>
            <IoIosClose />
        </button>
    )
}

export {
    LeftArrow,
    RightArrow,
    CloseX
}