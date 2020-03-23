import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import './Footer.css';

const instagramLink='https://www.instagram.com/bartoprojects/';

const Footer = (props) => {


    return (
        <footer className='footerWrapper'>
            <div className='footer'>
                <a className='instagram' href={instagramLink} target='blank'>
                    <FaInstagram /><span>@bartoprojects</span>
                </a>
            </div>

        </footer>
    );
}

export default Footer;