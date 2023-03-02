import React, {useState} from 'react'
import {AiFillEye, AiFillGithub} from 'react-icons/ai';
import { motion } from 'framer-motion';

import text from '../../constants/text';

import './Work.scss';

const Work = () => {
    const [activeFilter, setActiveFilter] = useState(0);
    const [animateCard, setAnimateCard] = useState({y: 0, opacity: 1});

    const handleWorkFilter = (job: any, index: number) => {
        setActiveFilter(index);
    }
    return (
        <div id="work" className="app__work-section">
            <h2 className="head-text"><div dangerouslySetInnerHTML={{__html: text.workOneLiner}}/></h2>

            <div className="app__work-filter">
                {text.work.map((job, index) => (
                    <div 
                        key={index}
                        onClick={() => handleWorkFilter(job, index)}
                        className={`app__work-filter-item app__flex p-text ${activeFilter === index ? 'item-active' : ''}`}
                    >
                        {job.company}&nbsp;<span className={`small-text`}>{job.title}</span>
                    </div>
                ))}
            </div>

            <motion.div
                animate={animateCard}
                transition={{duration: 0.5, delayChildren: 0.5}}
                className="app__work-portfolio"
            >
                {text.work.map((job, index) => (
                    <div className={`app__work-item app__flex ${activeFilter === index ? '' : 'item-inactive'}`} key={index}>
                        <div className="app__work-title app_flex">
                            <h1 className="head-text">{job.title} <span>@{job.company}</span></h1>
                        </div>
                        <div className="app__work-content-time app__flex">
                                <p className="small-text">{job.start} - {job.end}</p>
                            </div>
                        <div className="app__work-content-responsibilities app__flex">
                            
                            <ul className="app__work-content-responsibilities-list">
                                {job.responsibilities.map((r, index) => (
                                    <li 
                                        key={job.title + job.company + index}
                                        className="p-text"
                                    >
                                        {r}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    )
}

export default Work;
