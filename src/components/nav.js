import React from 'react';

const Nav = () => {
    const links = ['portfolio', 'contact'];
    const navLinks = links.map(link => <li className='nav-item'><a href={`#${link}`} className='nav-link'>{link.toUpperCase()}</a></li> )
    
    return (
        <nav className="navbar navbar-expand-sm">
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