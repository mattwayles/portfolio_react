import React from 'react';
import classes from '../ProjectStyle.css';
import liquidLabImg from '../../../assets/portfolio/JavaScript/liquidlabreact.jpg';

const liquidLab = () => (
    <section className={classes.Project}>
        <section className={classes.FlexRow}>
            <section className={classes.ProjectDiv}>
                <p className={classes.ProjectName}>LiquidLab</p>
                <p className={classes.ProjectDescription}>Browser-based DIY e-liquid calculator written in
                    <span className={classes.Bold}> React.js</span>.</p>
                <ul className={classes.ProjectDescription}>
                    <li>Solo Recreational Project</li>
                    <li>Currently Under Construction</li>
                    <li>Uses Authentication Template to store and retrieve user data</li>
                    <li>Uses Google Firebase database and hosting</li>
                    <li><a href="https://github.com/mattwayles/liquidLab" rel="noopener noreferrer"
                           target="_blank">Open Source</a></li>
                </ul>
            </section>
            <section className={classes.ProjectDiv}>
                <img className={classes.Image} src={liquidLabImg} alt="LiquidLab"/>
            </section>
        </section>
    </section>
);

export default liquidLab;