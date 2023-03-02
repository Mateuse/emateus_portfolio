import React from 'react'
import { SocialMedia } from '../../components';
import './Footer.scss';
import text from '../../constants/text';

const Footer = () => {
    const looking = true;
    return (
        <div id="footer">
            <h2 className="head-text">Get In Touch</h2>
            <div className="app__footer-content">
                <p>{looking ? text.newOpportunities : text.notLooking}</p>
                <div className="app__footer-socials">
                    <SocialMedia type="footer"/>
                </div>
                <p className="small-text">Designed & Built by Emanuel Mateus</p>
            </div>
        </div>
  )
}

export default Footer
