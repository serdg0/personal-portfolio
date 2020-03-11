import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

const Nav = () => {
    const links = ['portfolio', 'contact'];
    const navLinks = links.map(link => <li className='nav-item text-color'><Link to={link} spy={true} smooth={true} duration={1500} className='nav-link'>{link.toUpperCase()}</Link></li> )
    
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