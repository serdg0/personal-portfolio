import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Nav = () => {
    const links = ['portfolio', 'contact'];
    const underline = {
        textDecoration: 'underline'
    }
    const aniNav = {
        color: '#EDF5E1',
        scale: '1.01',
    }
    const tap = {
        scale: '0.9'
    }
    const navLinks = links.map(link => <motion.li key={link} style={underline} className='nav-item text-color' whileTap={tap} whileHover={aniNav}><Link to={link} spy={true} smooth={true} duration={1500} className='nav-link'>{link.toUpperCase()}</Link></motion.li> )
    
    return (
        <nav className="navbar navbar-expand-sm fixed-top">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    {navLinks}
                </ul>
            </div>
        </nav>
    )
}

export default Nav;