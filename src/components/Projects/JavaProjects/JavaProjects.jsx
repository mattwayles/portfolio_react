import React from 'react';
import classes from './JavaProjects.css';
import liquidLabJava from '../../../assets/portfolio/liquidlab_java.jpg';
import yahtzee from '../../../assets/portfolio/yahtzee.jpg';
import Auxil from "../../../hoc/Auxil";

const javaProjects = () => (
    <Auxil>

        {/* LiquidLab */}
        <section className={classes.Project}>
            <section className={classes.FlexRow}>
                <section className={classes.ProjectDiv}>
                    <p className={classes.ProjectName}>LiquidLab</p>
                    <p className={classes.ProjectDescription}>Desktop DIY e-liquid calculator written with a <span className={classes.Bold}>Java</span>
                        &nbsp; back-end and <span className={classes.Bold}>JavaFX</span> front-end.</p>
                    <ul className={classes.ProjectDescription}>
                        <li>Solo recreational project</li>
                        <li>MVC Architecture</li>
                        <li>SQLite3 Database</li>
                        <li><a href="https://github.com/mattwayles/LiquidLabJava" rel="noopener noreferrer" target="_blank">Open Source</a></li>
                    </ul>
                </section>
                <section className={classes.ProjectDiv}>
                    <img className={classes.Image} src={liquidLabJava} alt="LiquidLab" />
                </section>
            </section>
        </section>

        {/* Yahtzee */}
        <section className={classes.Project}>
            <section className={classes.FlexRow}>
                <section className={classes.ProjectDiv}>
                    <p className={classes.ProjectName}>Yahtzee</p>
                    <p className={classes.ProjectDescription}>Command driven fully-featured Yahtzee game written in
                        &nbsp;<span className={classes.Bold}>Java</span></p>
                    <ul className={classes.ProjectDescription}>
                        <li>Solo recreational project</li>
                        <li>Multiplayer Capabilities</li>
                        <li>SQLite3 Database</li>
                        <li><a href="https://github.com/mattwayles/yahtzee" rel="noopener noreferrer" target="_blank">Open Source</a></li>
                    </ul>
                </section>
                <section className={classes.ProjectDiv}>
                    <img className={classes.Image} src={yahtzee} alt="Yahtzee" />
                </section>
            </section>
        </section>
    </Auxil>
);

export default javaProjects;