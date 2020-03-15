import React, { Component } from 'react';
import { connect } from 'react-redux'

import './Lightbox.css';

class Lightbox extends Component {
    render() {
        let lightboxWrapperClassName = 'lightbox-wrapper';

        if (this.props.isLightboxOpened) {
            lightboxWrapperClassName = 'lightbox-wrapper opened';
        }

        return (
            <div className={lightboxWrapperClassName}>

                <div className='lightbox-background' />
                <div className='lightbox-photo-wrapper'>
                    <img src={''} alt='dsada' className='lightbox-photo' />
                </div>
            </div>
        );
    }
}
 
const mapStateToProps = state => ({
    isLightboxOpened: state.lightbox.isLightboxOpened
})

export default connect(mapStateToProps, {})(Lightbox);