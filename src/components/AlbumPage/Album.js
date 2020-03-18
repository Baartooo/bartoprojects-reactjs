import React from 'react';

import './Album.css';
import { Route } from 'react-router-dom';
import Outdoor from './Outdoor/Outdoor';


const Album = (props) => {
    return (
        <main className='album-wrapper'>
            <Route path='/outdoor' component={Outdoor} />

        </main>
    );
}

export default Album;