import React from 'react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import './Footer.css';

const instagramLink = 'https://www.instagram.com/bartoprojects/';
const facebookLink = 'https://www.facebook.com/bartoprojects';

const Footer = (props) => {


    return (
        <footer className='footerWrapper'>
            <div className='footer'>
                <a className='instagram' href={instagramLink} target='blank'>
                    <FaInstagram />
                </a>
                <a className='facebook' href={facebookLink} target='blank'>
                    <FaFacebook />
                </a>

            </div>

        </footer>
    );
}

export default Footer;