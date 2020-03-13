import React from 'react'

const Tags = ({ build }) => {
    const buttons = build.map(link => <span key={link} className="badge badge-secondary mr-2 mb-2 tag">{link}</span>)
    return (
        <div className="d-flex flex-wrap justify-content-start">
            {buttons}
        </div>
    )
}

export default Tags;