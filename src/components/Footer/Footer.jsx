import React from 'react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import './Footer.css';
import {
  instagramLink,
  facebookLink,
} from '../../constans/Links/links';

const Footer = () => (
  <footer className="footerWrapper">
    <div className="footer">
      <a className="instagram" href={instagramLink} target="blank">
        <FaInstagram />
      </a>
      <a className="facebook" href={facebookLink} target="blank">
        <FaFacebook />
      </a>
    </div>
  </footer>
);

export default Footer;
