import React from 'react';

const SubHeader = ({ title }) => {
    return(
        <div id={title} className="d-flex justify-content-center mb-4 mt-4">
            <h2 className="main-color">{title.toUpperCase()}</h2>
        </div>
    )
}

export default SubHeader;