import React from 'react'
import { motion } from 'framer-motion';

import './About.scss';

import images from '../../constants/images';
import text from '../../constants/text';

const abouts = [
    {title: 'Frontend', description: "I love creating responsive and dynamic interfaces", imgUrl: images.frontend},
    {title: 'Backend', description: "I excel at creating scalable backend solutions", imgUrl: images.backend},
    {title: 'Scripting', description: "I specialize in crafting efficient scripts", imgUrl: images.scripting},
    {title: 'DevOps', description: "I am skilled in automating development workflows", imgUrl: images.devops}
]

const About = () => {
  return (
    <div id="about" className="app__about-section">
        <h2 className="head-text"><div dangerouslySetInnerHTML={{__html: text.aboutOneLiner}}/></h2>
        <div className="app__profiles">
            {abouts.map((about, index) => (
                <motion.div
                    whileInView={{opacity: 1}}
                    whileHover={{scale: 1.1}}
                    transition={{duration: 0.5, type: 'tween'}}
                    className="app__profile-item"

                    key={about.title + index}
                >
                    <img src={about.imgUrl} alt={about.title} />
                    <h2 className="bold-text profile-title" style={{marginTop: 20}}>{about.title}</h2>
                    <h2 className="p-text profile-description" style={{marginTop: 10}}>{about.description}</h2>

                </motion.div>
            ))}
        </div>
    </div>
  )
}

export default About;
