import React, { Component } from 'react';

import './StartPage.css';
import backgroundImage from '../../photos/plane-mountains.jpg'


class StartPage extends Component {
    render() {
        return (
            <main className='startPageWrapper'>
                <img
                    className='background-image'
                    src={backgroundImage}
                    alt='plane-mountains'
                />
            </main>
        );
    }
}

export default StartPage;