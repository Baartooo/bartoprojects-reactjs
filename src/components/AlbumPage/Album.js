import React, { Component } from 'react';

import './Album.css';
import { Route } from 'react-router-dom';
import Outdoor from './Outdoor/Outdoor';


class Album extends Component {
    render() {
        return (
            <main className='album-wrapper'>
                <Route path='/outdoor' component={Outdoor} />

            </main>
        );
    }
}

export default Album;