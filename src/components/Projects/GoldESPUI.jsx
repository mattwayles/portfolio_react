import React from 'react';
import classes from './ProjectStyle.css';
import goldespImg from '../../assets/portfolio/expanded/goldesp.jpg';

const goldESPUI = () => (
    <section className={classes.Project}>
            <section className={classes.ProjectDiv}>
                <section className={classes.ImageDiv}>
                    <img className={classes.Image} src={goldespImg} alt="GoldESP"/>
                </section>
                <p className={classes.ProjectName}>GOLDesp</p>
                <p className={classes.ProjectDescription}>User interface for the leading military MRO & Supply solution produced by Tapestry Solutions.
                    Written in <span className={classes.Bold}> ECMAScript 5</span>.</p>
                <ul className={classes.List}>
                    <li>Agile Team Project</li>
                    <li><span className={classes.Bold}>My Role:</span> Senior Developer</li>
                    <li><span className={classes.Bold}>My Contributions:</span></li>
                    <ul className={classes.InnerList}>
                        <li>Code optimization and maintenance</li>
                        <li>UI/UX Look-and-Feel updates</li>
                        <li>Communication with back-end API endpoints</li>
                        <li>Feature Inclusion</li>
                        <li>Bug Fixes</li>
                    </ul>
                    <li><em>Source is proprietary information owned by Tapestry Solutions, Inc.</em></li>
                    <li><a href="https://www.tapestrysolutions.com/products/goldesp-mro-supply/GoldESPUI.jsx"
                           rel="noopener noreferrer" target="_blank">Learn more</a></li>
                    <li><a href="https://www.youtube.com/watch?v=yQzc9aW_7n0"
                           rel="noopener noreferrer" target="_blank">Watch Video</a></li>
                </ul>
            </section>
    </section>
);

export default goldESPUI;