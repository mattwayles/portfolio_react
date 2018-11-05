import React from 'react';
import classes from './../ProjectStyle.css';
import scoreboardConfigImg from '../../../assets/portfolio/Java/scoreboardConfig.png';
import googlePlay from '../../../assets/google-play-badge.png';

const scoreboardConfig = () => (
    <section className={classes.Project}>
        <section className={classes.ProjectDiv}>
            <section className={classes.ImageDiv}>
                <img className={classes.Image} src={scoreboardConfigImg} alt="Scoreboard Configuration"/>
            </section>
            <p className={classes.ProjectName}>AST Scoreboard Configuration</p>
            <p className={classes.ProjectDescription}>Android Mobile app to configure an AST Scoreboard via <span className={classes.Bold}>Bluetooth</span>. Written in
                <span className={classes.Bold}>Java</span> using Android Studio.</p>
            <ul className={classes.List}>
                <li>Recreational Solo Project</li>
                <ul className={classes.InnerList}>
                    <li>Bluetooth Integration</li>
                    <li>Android 4.0.3+ Support</li>
                    <li><a href="https://github.com/mattwayles/scoreboardconfig" rel="noopener noreferrer"
                           target="_blank">Open Source</a></li>
                </ul>
            </ul>
            <a href="https://play.google.com/store/apps/details?id=com.advancedsportstechnologies.astscoreboardconfig&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
               rel="noopener noreferrer"
               target="_blank"><img className={classes.GooglePlay} src={googlePlay} alt="Get it on Google Play" /></a>
        </section>
    </section>
);

export default scoreboardConfig;

