import React from 'react';
import classes from './ProjectStyle.css';
import closeButton from '../../assets/arrows/upArrow.png';
import hikersWatchImg from '../../assets/portfolio/expanded/hikersWatch.png';
import googlePlay from '../../assets/portfolio/logos/google-play-badge.png';

const PROJECT_NAME = "hikersWatch";

const hikersWatch = (props) => (
    <section className={classes.Project}>
        <img onClick={() => props.exit(PROJECT_NAME)} className={classes.CloseButton} src={closeButton} alt={"X"} />
        <section className={classes.ProjectDiv}>
            <section className={classes.ProjectDetails}>
                <p className={classes.ProjectName}>AST Hiker's Watch</p>
                <p className={classes.ProjectDescription}>Mobile app to provide real-time geolocation information. Designed specifically
                    to assist hikers with low cellular signal and scarce battery, the app is capable of providing instant location and altitude information.
                    Written in <span className={classes.Bold}>Java</span>. Currently porting to cross-platform single-codebase solution using
                    <span className={classes.Bold}> React Native</span>.</p>
                <ul className={classes.List}>
                    <li>Freelance Consulting Project</li>
                    <ul className={classes.InnerList}>
                        <li>Google Maps Integration</li>
                        <li>Android 4.0.3+ Support</li>
                        <li>iOS Support Coming Soon!</li>
                    </ul>
                </ul>
                <a href="https://play.google.com/store/apps/details?id=com.advancedsportstechnologies.hikerswatch&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
                   rel="noopener noreferrer"
                   target="_blank"><img className={classes.GooglePlay} src={googlePlay} alt="Get it on Google Play" /></a>
            </section>
            <section className={classes.ImageDiv}>
                <img className={classes.Image} src={hikersWatchImg} alt="Hiker's Watch"/>
            </section>
        </section>
    </section>
);

export default hikersWatch;