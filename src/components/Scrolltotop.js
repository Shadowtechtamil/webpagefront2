import React, { useEffect, useState } from 'react';
import './compCss/Scroll.css';

const Scrolltotop = () => {
    const [visible, setVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    const scrollTotop = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        const scrollHandler = () => {
            handleScroll();
        };

        window.addEventListener('scroll', scrollHandler);

        return () => {
            window.removeEventListener('scroll', scrollHandler);
        };
    }, []);

    return (
        <div className={`gototop ${visible ? 'visible' : ''}`} onClick={scrollTotop}>
            <i className="fa-solid fa-caret-up"></i>
        </div>
    );
};

export default Scrolltotop;
