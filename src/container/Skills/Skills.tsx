import React from 'react'
import { motion } from 'framer-motion';

import './Skills.scss';

import text from '../../constants/text';

const Skills = () => {
  return (
    <div id="skills" className="app__skills-section">
        <h2 className="head-text"><div dangerouslySetInnerHTML={{__html: text.skillsOneLiner}}/></h2>
        <div className="app__skills-container">
            <motion.div className="app__skills-list">
                {text.skills.map((skill) => (
                    <motion.div
                        whileInView={{ opacity: [0, 1]}}
                        transition={{ duration: 0.5 }}
                        className="app__skills-item"
                        key={skill.name}
                    >
                        <div
                            className="app__flex"
                        >
                            <img src={skill.img} alt={skill.name} />
                        </div>
                        <p>{skill.name}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </div>
  )
}

export default Skills;
