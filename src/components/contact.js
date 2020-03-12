import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import Github from '../../static/github.png'
import Twitter from '../../static/twitter.png'
import Linkedin from '../../static/linkedin.png'
import Gmail from '../../static/gmail.png'

const Contact = () => {
    const imgLinks = [
      {
        link: 'https://twitter.com/thesergiod',
        img: Twitter
      },
      {
        link: 'https://www.linkedin.com/in/sergio-diaz-4a60711a4/',
        img: Linkedin
      },
      {
        link: 'https://mail.google.com/mail/?view=cm&fs=1&to=sergio.diazg92@gmail.com',
        img: Gmail
      },
      {
        link: 'https://github.com/serdg0',
        img: Github
      },
    ];
    const linkBoard = imgLinks.map(icon => {
      const { link, img } = icon;
      return <a href={link} className="pr-4"><img src={img} /></a>
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