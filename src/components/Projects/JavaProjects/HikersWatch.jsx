import React from 'react';
import classes from './../ProjectStyle.css';
import hikersWatchImg from '../../../assets/portfolio/Java/hikersWatch.png';

const hikersWatch = () => (
    <section className={classes.Project}>
        <section className={classes.ProjectDiv}>
            <section className={classes.ImageDiv}>
                <img className={classes.Image} src={hikersWatchImg} alt="Hiker's Watch"/>
            </section>
            <p className={classes.ProjectName}>AST Hiker's Watch</p>
            <p className={classes.ProjectDescription}>Android Mobile app to provide real-time geolocation information. Designed specifically
            to assist hikers with low cellular signal and scarce battery, the app is capable of providing instant location and altitude information.</p>
            <ul className={classes.List}>
                <li>Educational Solo Project</li>
                <ul className={classes.InnerList}>
                    <li>Google Maps Integration</li>
                    <li>Android 4.0.3+ Support</li>
                    <li>Google Play App coming soon!</li>
                </ul>
            </ul>
        </section>
    </section>
);

export default hikersWatch;