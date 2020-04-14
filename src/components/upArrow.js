import React from 'react'
import { Link } from 'react-scroll';
import upwardArrow from '../../static/icons8-upward-arrow-48.png'
import { useScrollData } from "scroll-data-hook";
import {useSpring, animated} from 'react-spring';

const Arrow = () => {
    const { position: { y } } = useScrollData();
    const appear = y > 50;
    const props = useSpring({opacity: appear ? 1 : 0})
    
    return (
        <animated.div style={props} className='arrow'>
            <Link to='up' spy={true} smooth={true} duration={1500}>
                <img src={upwardArrow} alt='Go Up' />
            </Link>
        </animated.div>
    )
}

export default Arrow;