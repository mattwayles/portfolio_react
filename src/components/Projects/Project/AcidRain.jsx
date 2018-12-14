import React from 'react';
import classes from '../ProjectStyle.css';
import acidRainImg from '../../../assets/portfolio/expanded/acidRain.png';

const PROJECT_NAME = "acidRain";

const acidRain = (props) => (
    <section className={props.closing ? classes.ProjectClosing : classes.Project}>
        <section onClick={() => props.exit(PROJECT_NAME)} className={classes.CloseButton} />
        <section className={classes.ProjectDiv}>
            <section className={classes.ProjectDetails}>
            <p className={classes.ProjectName}>Acid Rain</p>
            <p className={classes.ProjectDescription}>Casual mobile game challenging users to catch clean water while
                protecting a city from acid rain drops. Written in <span className={classes.Bold}>Java</span> using
                <span className={classes.Bold}> LibGDX</span> in Android Studio. This project is currently in its infancy,
                and I am working to port the code to a cross-platform solution using <span className={classes.Bold}>React Native</span>.</p>
            <ul className={classes.List}>
                <li>Solo Recreational Project</li>
                <ul className={classes.InnerList}>
                    <li>Android 4.0.3+ Support</li>
                    <li>In-App Purchase Support coming soon!</li>
                    <li>Live online leaderboard coming soon!</li>
                    <li>React Native cross-platform solution</li>
                    <li>Google Play, iOS App coming soon!</li>
                </ul>
            </ul>
            </section>
            <section className={classes.ImageDiv}>
                <img className={classes.Image} src={acidRainImg} alt="Acid Rain"/>
            </section>
        </section>
    </section>
);

export default acidRain;