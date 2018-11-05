import React from 'react';
import classes from './../ProjectStyle.css';
import acidRainImg from '../../../assets/portfolio/Java/acidRain.png';

const acidRain = () => (
    <section className={classes.Project}>
        <section className={classes.ProjectDiv}>
            <section className={classes.ImageDiv}>
                <img className={classes.Image} src={acidRainImg} alt="Acid Rain"/>
            </section>
            <p className={classes.ProjectName}>Acid Rain</p>
            <p className={classes.ProjectDescription}>Casual Android game challenging users to catch clean water while
                protecting a city from acid rain. Written in <span className={classes.Bold}>Java</span> using
                <span className={classes.Bold}> LibGDX</span> in Android Studio.</p>
            <ul className={classes.List}>
                <li>Solo Recreational Project</li>
                <ul className={classes.InnerList}>
                    <li>Android 4.0.3+ Support</li>
                    <li>In-App Purchase Support coming soon!</li>
                    <li>Live online leaderboard coming soon!</li>
                    <li>Google Play, iOS App coming soon!</li>
                </ul>
            </ul>
        </section>
    </section>
);

export default acidRain;