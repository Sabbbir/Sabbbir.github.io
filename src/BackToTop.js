// src/components/BackToTop.js

import React, { useEffect, useState } from 'react';
import './BackToTop.css';

const BackToTop = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        if (window.pageYOffset > 300){
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    const scrollToTop = () =>{
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisible);
        return () => window.removeEventListener('scroll', toggleVisible);
    }, []);

    return (
        <button 
            id="back-to-top" 
            onClick={scrollToTop} 
            style={{display: visible ? 'inline' : 'none'}}
            aria-label="Back to top"
        >
            <i className="fas fa-arrow-up"></i>
        </button>
    );
};

export default BackToTop;

