import React, { Component } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { IoIosClose } from 'react-icons/io';
import './Buttons.css'

class LeftArrow extends Component {
    render() {
        return (
            <button className='arrow left' onClick={this.props.onClick}>
                <FaArrowLeft />
            </button>
        )
    }
}

class RightArrow extends Component {
    render() {
        return (
            <button className='arrow right' onClick={this.props.onClick}>
                <FaArrowRight />
            </button>
        )
    }
}

class CloseX extends Component {
    render() {
        return (
            <button className='close-x' onClick={this.props.onClick}>
                <IoIosClose />
            </button>
        )
    }
}

export {
    LeftArrow,
    RightArrow,
    CloseX
}