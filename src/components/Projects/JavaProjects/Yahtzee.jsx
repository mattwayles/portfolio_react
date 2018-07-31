import React from 'react';
import classes from './../ProjectStyle.css';
import yahtzeeImg from '../../../assets/portfolio/Java/yahtzee.jpg';

const yahtzee = () => (
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
                    <li><a href="https://github.com/mattwayles/yahtzee" rel="noopener noreferrer" target="_blank">Open
                        Source</a></li>
                </ul>
            </section>
            <section className={classes.ProjectDiv}>
                <img className={classes.Image} src={yahtzeeImg} alt="Yahtzee"/>
            </section>
        </section>
    </section>
);

export default yahtzee;