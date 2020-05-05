import React from 'react';
import './AboutCard.css';
import Thumbnail from '../../../assets/img/aboutThumbnail.jpg'
import { instagramLink, facebookLink } from '../../../constans/Links/links';


const AboutCard = props => {

    return (
        <div className='about-card'>
            <img className='about-card-thumbnail' src={Thumbnail} alt='thumbnail' />
            <p className='about-card-title'>connect with me</p>

            <a className='about-card-link' href='mailto:bartek.gajos19@gmail.com'>bartek.gajos19@gmail.com</a>
            <a className='about-card-link' href={instagramLink} target='blank'>ig / @bartoprojects</a>
            <a className='about-card-link' href={facebookLink} target='blank'>fb / BartoProjects</a>

        </div>
    )
}
export default AboutCard;