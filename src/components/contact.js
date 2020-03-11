import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

const Contact = () => {

    return(
        <footer id='contact'>
          © {new Date().getFullYear()}, Built by
          {` `}
          <a href="https://twitter.com/thesergiod">Sergio Diaz</a><br />
          <Link onClick={() => scroll.scrollToTop()} spy={true} smooth={true} duration={1000}>Go Top</Link>
        </footer>
    )
}

export default Contact;