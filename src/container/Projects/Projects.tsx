import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';

import './Projects.scss';

import text from '../../constants/text';

const Projects = () => {
    const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1});
    return (
        <div id="projects" className="app__projects-section">
            <h2 className="head-text"><div dangerouslySetInnerHTML={{__html: text.projectsOneLiner}}/></h2>
            
            <motion.div
                animate={animateCard}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className="app__projects-portfolio"
            >
                {text.projects.map((project, index) => (
                    <div className="app__project-item " key={index}>
                        <div className="app__project-header">
                            <h4>{project.name}</h4>
                            <a href={project.github} target="_blank" rel="noreferrer">
                                <motion.div
                                    whileInView={{ scale: [0, 1]}}
                                    whileHover={{ scale: [1, 0.90]}}
                                    transition={{ duration: 0.25}}
                                    className="app__flex"
                                >
                                    <AiFillGithub size={40} color={`#000`}/>
                                </motion.div>
                            </a>
                        </div>
                        <div className="app__project-content">
                            <p>{project.description}</p>
                            
                        </div>
                        <div className="app__project-technologies">
                            {project.technologies?.map((tech, index) => (
                                <p key={tech + index}>{tech}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    )
}

export default Projects
