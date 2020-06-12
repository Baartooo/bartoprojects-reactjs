import React from 'react';
import './About.css';
import AboutCard from './AboutCard/AboutCard';
import AboutDescription from './AboutDescription/AboutDescription';

const About = () => {
  return (
    <div className="about-wrapper">
      <AboutCard />
      <AboutDescription />
    </div>
  );
};

export default About;
