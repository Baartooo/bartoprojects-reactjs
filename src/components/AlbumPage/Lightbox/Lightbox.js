import React, { Component } from 'react';

import './Lightbox.css';

class Lightbox extends Component {

    state = {
        currentImage: this.props.currentImage,
        isOpened: this.props.isOpened
    }

    openLightbox = () => {
        this.setState({
            isOpened: true
        })
    }
    closeLightbox = () => {
        this.setState({
            isOpened: false
        })
    }
    render() {
        let lightboxWrapperClassName = 'lightbox-wrapper';

        if (this.state.isOpened) {
            lightboxWrapperClassName = 'lightbox-wrapper opened';
        }

        return (
            <div className={lightboxWrapperClassName}>

                <div className='lightbox-background' onClick={this.closeLightbox} />
                <div className='lightbox-photo-wrapper'>
                    <img src={this.state.currentImage} alt='dsada' className='lightbox-photo' />
                </div>
            </div>
        );
    }
}

export default Lightbox;