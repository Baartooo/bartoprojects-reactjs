import React from 'react';

import './StartPage.css';
import backgroundImage from '../../photos/startPageBackground.jpg'


const StartPage = (props) => {
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

export default StartPage;