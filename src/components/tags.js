import React from 'react'

const Tags = ({ build }) => {
    const buttons = build.map(link => <button type="button" className="btn btn-outline-success">{link}</button>)
    return (
        <div className="d-flex justify-content-between">
            {buttons}
        </div>
    )
}

export default Tags;