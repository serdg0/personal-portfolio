import React from 'react'
import { OutboundLink } from "gatsby-plugin-google-analytics";
import Github from '../../static/github.png'
import Twitter from '../../static/twitter.png'
import Linkedin from '../../static/linkedin.png'
import Gmail from '../../static/gmail.png'

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

      const conLinks = imgLinks.map(linke => {
        const { link, img, alt } = linke;
        return <OutboundLink href={link} ><img className='linke' src={img} alt={alt} /></OutboundLink>
      })

    return (
        <div className='sidebar'>
            {conLinks}
        </div>
    )
}

export default Sidebar;