import React, { Component } from 'react';
import NavigationBar from '../CommonComponents/NavigationBar/NavigationBar';

import './StartPage.css';

import backgroundImage from '../../photos/plane-mountains.jpg'


class StartPage extends Component {
    render() {
        return (
            <div className='startPageWrapper'>
                <img
                    className='background-image'
                    src={backgroundImage}
                    alt='plane-mountains'
                />
                <NavigationBar />
            </div>

        );
    }
}

export default StartPage;