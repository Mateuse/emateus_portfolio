import React from 'react'
import { SocialMedia } from '../../components';
import './Footer.scss';
import text from '../../constants/text';

const Footer = () => {
    const looking = true;
    return (
        <div id="contact">
            <h2 className="head-text">Get In Touch</h2>
            <div className="app__footer-content">
                <p>{looking ? text.newOpportunities : text.notLooking}</p>
                <a className="link-btn" style={{margin: 20 }} href="mailto:emateus71@gmail.com" target="_blank" rel="noreferrer">
                    Contact Me
                </a>
                <div className="app__footer-socials">
                    <SocialMedia type="footer"/>
                </div>
                <p className="small-text">Designed & Built by Emanuel Mateus</p>
            </div>
        </div>
  )
}

export default Footer
