import React from 'react';
import classes from './../ProjectStyle.css';
import scoreboardConfigImg from '../../../assets/portfolio/Java/scoreboardConfig.png';

const scoreboardConfig = () => (
    <section className={classes.Project}>
        <section className={classes.ProjectDiv}>
            <section className={classes.ImageDiv}>
                <img className={classes.Image} src={scoreboardConfigImg} alt="Scoreboard Configuration"/>
            </section>
            <p className={classes.ProjectName}>AST Scoreboard Configuration</p>
            <p className={classes.ProjectDescription}>Android Mobile app to configure an AST Scoreboard via Bluetooth</p>
            <ul className={classes.List}>
                <li>Recreational Solo Project</li>
                <ul className={classes.InnerList}>
                    <li>Bluetooth Integration</li>
                    <li>Android 4.0.3+ Support</li>
                    <li><a href="https://github.com/mattwayles/scoreboardconfig" rel="noopener noreferrer"
                           target="_blank">Open Source</a></li>
                    <li><a href="https://play.google.com/store/apps/details?id=com.advancedsportstechnologies.scoreboardconfig" rel="noopener noreferrer"
                           target="_blank">Available on Google Play Store</a></li>
                </ul>
            </ul>
        </section>
    </section>
);

export default scoreboardConfig;