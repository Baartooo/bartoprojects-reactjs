import React from 'react';
import './AboutDescription.css';
import { instagramLink, facebookLink } from '../../../constans/Links/links';

const AboutDescription = props => {
    return (
        <div className='about-description-wrapper'>
            <h1>Bartosz Gajos</h1>
            <h2>Katowice, Polska</h2>
            <p>
                Pasjonuję sie fotografią cyfrową i analogową!
            </p>
            <p>
                To co najbardziej w niej kocham to możliwość pokazania innym w jaki sposób Ty widzisz otaczający Cię świat. 
                Przyjemność sprawiają mi nie tylko efekty, ale cały proces tworzenia.
            </p>
            <p>
                W moich pracach skupiam się głównie na krajobrazach, sportach, miastach i lifestyle. 
                Staram się przełamać barierę pomiędzy spokojną naturą, a ruchliwymi metropoliami. Najświeższe zdjęcia 
                znajdziesz na moich regularnie aktualizowanych kontach&nbsp;
                <a className='about-description-link' href={instagramLink} target='blank'>instagram</a>&nbsp;oraz&nbsp;
                <a className='about-description-link' href={facebookLink} target='blank'>facebook.</a>&nbsp;
            </p>
            <p>
                Jestem otwarty na propozycje współpracy przy nowych interesujących projektach.
            </p>
        </div>
    );
};

export default AboutDescription;
