import React from 'react';
import Typical from 'react-typical';
import Slides from './coveranimation';
import Media from 'react-media';

const Cover = ({ children, title, description }) => {
    return (
        <div style={{height: '100vh'}} id="up">
            {children}
            <div className="h-25" />
                <Media queries={{ small: { maxWidth: 760 } }}>
                    {matches =>
                        matches.small ? (
                            <h1><Typical className="main-color mb-5 mt-5" loop={1} steps={[title, 5000]} /></h1>
                        ) : (
                            <h1 className="cover-title"><Typical className="main-color mb-5 mt-5" loop={1} steps={['> ' + title, 5000]} /></h1>
                            )
                    }
                </Media>
            <h5 className="text-color">{description}</h5>
            <Slides />
        </div>
    )
}

export default Cover;