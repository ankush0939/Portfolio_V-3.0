import React, { useContext } from 'react';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { HiArrowRight } from "react-icons/hi";

import './Skills.css'

import { ThemeContext } from '../../contexts/ThemeContext';
import { skillsData } from '../../data/skillsData'
import { skillsImage } from '../../utils/skillsImage'

function Skills() {

    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles(() => ({
        viewAllBtn: {
            color: theme.tertiary,
            backgroundColor: theme.primary,
            transition: 'color 0.2s',
            "&:hover": {
                color: theme.secondary,
                backgroundColor: theme.primary,
            }
        },
        viewArr: {
            color: theme.tertiary,
            backgroundColor: theme.secondary70,
            width: '40px',
            height: '40px',
            padding: '0.5rem',
            fontSize: '1.05rem',
            borderRadius: '50%',
            cursor: 'pointer',
            transition: 'background-color 0.2s',
            "&:hover": {
                color: theme.tertiary,
                backgroundColor: theme.secondary,
            }
        },
    }));

    const classes = useStyles();

    const skillBoxStyle = {
        backgroundColor: theme.secondary,
        boxShadow: `0px 0px 30px ${theme.primary30}`
    }

    return (
        <div className="skills" style={{ backgroundColor: theme.secondary }}>
            <div className="skillsHeader">
                <h2 style={{ color: theme.primary }}>Skills</h2>
            </div>
            <div className="skillsContainer">
                <div className="skill--scroll">
                    <Marquee
                        gradient={false}
                        speed={250}
                        pauseOnHover={true}
                        pauseOnClick={true}
                        delay={0}
                        play={true}
                        direction="left"
                    >
                        {skillsData.map((skill, id) => (
                            <div className="skill--box" key={id} style={skillBoxStyle}>
                                <img src={skillsImage(skill)} alt={skill} />
                                <h3 style={{ color: theme.tertiary }}>
                                    {skill}
                                </h3>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>

            <div className="projects--viewAll">
                <Link to="/projects">
                    <button className={classes.viewAllBtn}>
                        View All
                        <HiArrowRight className={classes.viewArr} />
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Skills
