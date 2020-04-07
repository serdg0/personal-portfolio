import React from 'react'
import { OutboundLink } from "gatsby-plugin-google-analytics";
import Github from '../../static/github.png'
import Twitter from '../../static/twitter.png'
import Linkedin from '../../static/linkedin.png'
import Gmail from '../../static/gmail.png'
import { useScrollData } from "scroll-data-hook";
import {useSpring, animated} from 'react-spring';

const Sidebar = () => {
    const imgLinks = [
        {
          link: 'https://twitter.com/thesergiod',
          img: Twitter,
          alt: 'Twitter'
        },
        {
          link: 'https://www.linkedin.com/in/sergio-diaz-4a60711a4/',
          img: Linkedin,
          alt: 'Linkedin'
        },
        {
          link: 'https://mail.google.com/mail/?view=cm&fs=1&to=sergio.diazg92@gmail.com',
          img: Gmail,
          alt: 'Gmail'
        },
        {
          link: 'https://github.com/serdg0',
          img: Github,
          alt: 'Github'
        },
      ];
      const { position: { y } } = useScrollData();
      const appear = y > 50;
      const props = useSpring({opacity: appear ? 1 : 0})
      const conLinks = imgLinks.map(linke => {
        const { link, img, alt } = linke;
        return <OutboundLink href={link}><img className='linke rounded pb-3' src={img} alt={alt} /></OutboundLink>
      })
    return (
      <animated.div style={props} className='sidebar d-flex flex-column'>
          {conLinks}
      </animated.div>
    )
}

export default Sidebar;