import React from 'react';
import classes from './ProjectStyle.css';
import liquidLabImg from '../../assets/portfolio/expanded/liquidlabreact.jpg';

const liquidLabReact = () => (
    <section className={classes.Project}>
            <section className={classes.ProjectDiv}>
                <section className={classes.ImageDiv}>
                    <img className={classes.Image} src={liquidLabImg} alt="LiquidLab"/>
                </section>
                <p className={classes.ProjectName}>LiquidLab</p>
                <p className={classes.ProjectDescription}>Browser-based DIY e-liquid calculator written in
                    <span className={classes.Bold}> React.js</span>.</p>
                <ul className={classes.List}>
                    <li>Solo Recreational Project</li>
                    <li>Currently Under Construction</li>
                    <li>Uses Authentication Template to store and retrieve user data</li>
                    <li>Uses Google Firebase database and hosting</li>
                    <li><a href="https://github.com/mattwayles/liquidLab" rel="noopener noreferrer"
                           target="_blank">Open Source</a></li>
                </ul>
            </section>
    </section>
);

export default liquidLabReact;