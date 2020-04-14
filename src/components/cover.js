import React from 'react';
import Slides from './coveranimation';
import Typist from 'react-typist';

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