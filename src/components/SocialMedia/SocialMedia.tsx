import React from 'react'
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';

import './SocialMedia.scss';

interface SocialMediaProps {
    type: string
}

const SocialMedia = ({type}: SocialMediaProps) => {
    
    return (
        <div className={`${type == "page" ? "app__social" : "app_social-footer"}`}>
            <a href="https://www.linkedin.com/in/emanuel-mateus-b4a8a011b/" target="_blank" rel="noopener noreferrer">
                <div>
                    <BsLinkedin />
                </div>
            </a>
            <a href="https://github.com/Mateuse" target="_blank" rel="noopener noreferrer">
                <div>
                    <BsGithub />
                </div>
            </a>
            <a href="mailto:emateus71@gmail.com" target="_blank" rel="noopener noreferrer">
                <div>
                    <SiGmail />
                </div>
            </a>
            <a href="https://www.instagram.com/emateus7/" target="_blank" rel="noopener noreferrer">
                <div>
                    <BsInstagram />
                </div>
            </a>
        </div>
    )
}

export default SocialMedia
