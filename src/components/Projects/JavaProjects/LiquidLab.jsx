import React from 'react';
import classes from '../ProjectStyle.css';
import liquidLabJava from '../../../assets/portfolio/Java/liquidlab_java.jpg';

const liquidLab = () => (
    <section className={classes.Project}>
        <section className={classes.FlexRow}>
            <section className={classes.ProjectDiv}>
                <p className={classes.ProjectName}>LiquidLab</p>
                <p className={classes.ProjectDescription}>Desktop DIY e-liquid calculator written with a <span
                    className={classes.Bold}>Java</span>
                    &nbsp; back-end and <span className={classes.Bold}>JavaFX</span> front-end.</p>
                <ul className={classes.ProjectDescription}>
                    <li>Solo recreational project</li>
                    <li>MVC Architecture</li>
                    <li>SQLite3 Database</li>
                    <li><a href="https://github.com/mattwayles/LiquidLabJava" rel="noopener noreferrer"
                           target="_blank">Open Source</a></li>
                </ul>
            </section>
            <section className={classes.ProjectDiv}>
                <img className={classes.Image} src={liquidLabJava} alt="LiquidLab"/>
            </section>
        </section>
    </section>
);

export default liquidLab;