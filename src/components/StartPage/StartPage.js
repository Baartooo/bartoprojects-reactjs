import React, { Component } from 'react';

import './StartPage.css';
import backgroundImage from '../../photos/startPageBackground.jpg'


class StartPage extends Component {
    render() {
        return (
            <main className='startPageWrapper'>
                <img
                    className='background-image'
                    src={backgroundImage}
                    alt='background'
                />
            </main>
        );
    }
}

export default StartPage;