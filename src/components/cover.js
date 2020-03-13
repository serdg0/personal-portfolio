import React from 'react';
import Typical from 'react-typical';
import Slides from './coveranimation';

const Cover = ({ children, title, description }) => {
    const fontSize = {
        fontSize: '4rem',
    }
    return (
        <div style={{height: '100vh'}} id="up">
            {children}
            <div className="h-25" />
            <h1 className="main-color mb-5 mt-5" style={fontSize}><Typical loop={1} steps={['> ' + title, 5000]} /></h1>
            <h5 className="text-color">{description}</h5>
            <Slides />
        </div>
    )
}

export default Cover;