import React from 'react';
import classes from '../ProjectStyle.css';
import goldespImg from '../../../assets/portfolio/JavaScript/goldesp.jpg';

const goldesp = () => (
    <section className={classes.Project}>
        <section className={classes.FlexRow}>
            <section className={classes.ProjectDiv}>
                <p className={classes.ProjectName}>GOLDesp</p>
                <p className={classes.ProjectDescription}>User interface for the leading military MRO & Supply solution produced by Tapestry Solutions.
                    Written in <span className={classes.Bold}> ECMAScript 5</span>.</p>
                <ul className={classes.ProjectDescription}>
                    <li>Agile Team Project</li>
                    <li><span className={classes.Bold}>My Role:</span> Senior Developer</li>
                    <li><span className={classes.Bold}>My Contributions:</span></li>
                    <ul>
                        <li>Code optimization and maintenance</li>
                        <li>UI/UX Look-and-Feel updates</li>
                        <li>Communication with back-end API endpoints</li>
                        <li>Feature Inclusion</li>
                        <li>Bug Fixes</li>
                    </ul>
                    <li><em>Source is proprietary information owned by Tapestry Solutions, Inc.</em></li>
                    <li><a href="https://www.tapestrysolutions.com/products/goldesp-mro-supply/"
                           rel="noopener noreferrer" target="_blank">Learn more</a></li>
                    <li><a href="https://www.youtube.com/watch?v=yQzc9aW_7n0"
                           rel="noopener noreferrer" target="_blank">Watch Video</a></li>
                </ul>
            </section>
            <section className={classes.ProjectDiv}>
                <img className={classes.Image} src={goldespImg} alt="GoldESP"/>
            </section>
        </section>
    </section>
);

export default goldesp;