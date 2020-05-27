import React, { useState } from 'react';
import './AboutDescription.css';
import { instagramLink, facebookLink } from '../../../constans/Links/links';
import descriptionPL from './Description/pl.json';
import descriptionEN from './Description/en.json';

const lang = {
    pl: 'pl',
    en: 'en'
}

const AboutDescription = props => {
    const [language, setLanguage] = useState(lang.en)

    let description;

    switch (language) {
        case lang.pl:
            description = descriptionPL;
            break;
        case lang.en:
            description = descriptionEN;
            break;
    }

    return (
        <div className='about-description-wrapper'>
            <h1>Bartosz Gajos</h1>
            <h2>{description.localization}</h2>
            <p>
                {description.firstParagraph}
            </p>
            <p>
                {description.secondParagraph}
            </p>
            <p>
                {description.thirdParagraph}&nbsp;
                <a className='about-description-link' href={instagramLink} target='blank'>instagram</a>&nbsp;{description.and}&nbsp;
                <a className='about-description-link' href={facebookLink} target='blank'>facebook.</a>&nbsp;
            </p>
            <p>
                {description.fourthParagraph}
            </p>
        </div>
    );
};

export default AboutDescription;
