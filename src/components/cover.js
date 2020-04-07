import React from 'react';
import Slides from './coveranimation';
import Media from 'react-media';
import Typist from 'react-typist';
/* 
                <Media queries={{ small: { maxWidth: 760 } }}>
                    {matches =>
                        matches.small ? (
                            <Typist className="main-color mb-5 mt-5"><h1>{name}</h1></Typist>
                        ) : (
                            <Typist className="main-color mb-5 mt-5"><h1 className="cover-title">{name}</h1></Typist>
                            )
                    }
                </Media>
*/
const Cover = ({ title, description }) => {
    const name = '> ' + title;
    return (
        <div style={{height: '100vh'}} id="up">
            <Typist className='cover-title main-color'>
                {name}
            </Typist>
            <h5 className="text-color">{description}</h5>
            <Slides />
        </div>
    )
}

export default Cover;