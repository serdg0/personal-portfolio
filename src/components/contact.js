import React from 'react';
import Github from '../../static/github.png'
import Twitter from '../../static/twitter.png'
import Linkedin from '../../static/linkedin.png'
import Gmail from '../../static/gmail.png'
import { motion } from 'framer-motion';

const Contact = () => {
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
    const hover = {
      scale: '1.1',
    }
    const tap = {
      scale: '0.9'
    }
    const linkBoard = imgLinks.map(icon => {
      const { link, img, alt } = icon;
      return <motion.a key={alt} href={link} className="pr-4" whileTap={tap} whileHover={hover}><img src={img} alt={alt} /></motion.a>
    })
    return(
      <footer id='contact'>
        <div className='d-flex justify-content-center'>
          {linkBoard}
        </div>
        <div className='text-color d-flex justify-content-center mb-2'>
          © {new Date().getFullYear()}, Built by
          {` `}
          Sergio Diaz<br />
        </div>
      </footer>
    )
}

export default Contact;