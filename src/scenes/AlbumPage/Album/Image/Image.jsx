import React, {useEffect, useRef} from 'react';
import gsap from 'gsap';


const Image = (props) => {
    const {source, alt} = props;
    const photo = useRef(null);

    const handleImageLoad = () => {
        gsap.fromTo(photo.current, {
            y: '-=20'
        }, {
            duration: .5,
            opacity: 1,
            y: 0,
            ease: 'back',
        })
    }

    useEffect(() => {
        gsap.set(photo.current, {opacity: 0});


    }, []);

    return (
        <>
            <img
                ref={photo}
                src={source}
                className="single-img"
                alt={alt}
                onLoad={handleImageLoad}
            />
        </>
    );
};

export default Image;
