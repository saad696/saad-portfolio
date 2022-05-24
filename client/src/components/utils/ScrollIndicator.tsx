import React, { useEffect, useState } from 'react';

const ScrollIndicator = () => {
    const [lengthScrolled, setScrolled] = useState('0');

    const progressContainerStyle = {
        background: '#000',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
        height: '5px',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        zIndex: 99,
    };

    const progressBarStyle = {
        height: '4px',
        background: '#dba988',
        width: lengthScrolled,
    };

    const scrollProgress = () => {
        const scrollPx = document.documentElement.scrollTop;
        const winHeightPx =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        const scrolled = `${(scrollPx / winHeightPx) * 100}%`;

        setScrolled(scrolled);
    };

    useEffect(() => {
        window.addEventListener('scroll', scrollProgress);

        // returned function will be called on component unmount
        return () => {
            window.removeEventListener('scroll', scrollProgress);
        };
    }, []);

    return (
        // @ts-ignore
        <div className='progress-container' style={progressContainerStyle}>
            <div className='progress-bar' style={progressBarStyle} />
        </div>
    );
};

export default ScrollIndicator;
