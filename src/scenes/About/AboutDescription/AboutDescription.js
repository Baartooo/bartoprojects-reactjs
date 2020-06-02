import React, { useState } from 'react';
import './AboutDescription.css';
import { instagramLink, facebookLink } from '../../../constans/Links/links';
import descriptionEN from './Description/en.json';
import descriptionPL from './Description/pl.json';
import PlFlag from '../../../assets/img/poland.svg';
import EnFlag from '../../../assets/img/united-kingdom.svg';

const lang = {
    pl: 'pl',
    en: 'en'
}

const AboutDescription = props => {
    const [language, setLanguage] = useState(lang.pl)

    let description;

    switch (language) {
        case lang.pl:
            description = descriptionPL;
            break;
        case lang.en:
            description = descriptionEN;
            break;
        default:
            break;
    }
    const switchDescriptionLanguage = (language) => {
        if (language === lang.pl || language === lang.en)
            setLanguage(language);
    }
    return (
        <div className='about-description-wrapper'>
            <h1>Bartosz Gajos</h1>
            <h2>{description.localization}</h2>
            <div className='about-lang-picker'>
                <img
                    src={PlFlag}
                    className={`flag ${(language === lang.pl) ? 'active-flag' : ''}`}
                    onClick={() => switchDescriptionLanguage(lang.pl)}
                    alt='pl-flag'
                />
                <img
                    src={EnFlag}
                    className={`flag ${(language === lang.en) ? 'active-flag' : ''}`}
                    onClick={() => switchDescriptionLanguage(lang.en)}
                    alt='en-flag'
                />
            </div>

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
