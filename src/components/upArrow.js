import React from 'react'
import { Link } from 'react-scroll';
import upwardArrow from '../../static/icons8-upward-arrow-48.png'

const Arrow = () => {

    return (
        <div className='arrow'>
            <Link to='up' spy={true} smooth={true} duration={1500}>
                <img src={upwardArrow} />
            </Link>
        </div>
    )
}

export default Arrow;