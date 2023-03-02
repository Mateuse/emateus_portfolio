import React from 'react'
import { motion } from 'framer-motion';

import images from '../../constants/images';
import './Header.scss';

import text from '../../constants/text';

const scaleVariants = {
    whileInView: {
        scale: [0,1],
        opacity: [0,1],
        transition: {
            duration: 1,
            ease: 'easeInOut'
        }
    }
}

const Header = () => {
    return (
    <div id="home" className="app__header app__flex">
        <motion.div
            whileInView={{ x : [-100, 0], opacity : [0, 1]}}
            transition={{duration: 0.5}}
            className="app__header-info"
        >
            <div className="app__header-badge">
                <div className="badge-cmp app__flex">
                    <div style={{marginLeft: 20}}>
                        <p className="badge-cmp-oneliner bold-text">Hi, my name is</p>
                        <h1 className="head-text">{text.name}</h1>
                    </div>
                </div>
                <div className="tag-cmp app__flex">
                    <p className="p-text">{text.description}</p>
                </div>
            </div>
        </motion.div>
        <motion.div
            variants={scaleVariants}
            whileInView={scaleVariants.whileInView}
            className="app__header-circles"
        >
            {[images.react, images.python, images.csharp].map((circle, index) => (
                <div className="circle-cmp app_flex" key={`cicrle-${index}`}>
                    <img src={circle} alt="circle" />
                </div>
            ))}
        </motion.div>
    </div>
    );
}

export default Header;
