import React from 'react';
import classes from '../ProjectStyle.css';
import twitchStreamImg from '../../../assets/portfolio/JavaScript/twitch.jpg';

const twitchStream = () => (
    <section className={classes.Project}>
        <section className={classes.FlexRow}>
            <section className={classes.ProjectDiv}>
                <p className={classes.ProjectName}>Twitch Streaming</p>
                <p className={classes.ProjectDescription}>Quickly find out if friends are streaming on Twitch!
                    Written in <span className={classes.Bold}>ECMAScript 6</span> with
                    <span className={classes.Bold}> HTML5</span> and <span className={classes.Bold}> CSS3</span>.</p>
                <ul className={classes.ProjectDescription}>
                    <li>Solo Educational Project</li>
                    <li>Uses JSON parsing to send and display information in real-time</li>
                    <li>Part of FreeCodeCamp Full-Stack Certification</li>
                    <li>Assisted with MS70-480 MCP Certification</li>
                    <li><a href="http://codepen.io/LiquidIce25/pen/evLGaX" rel="noopener noreferrer" target="_blank">
                        View Source</a></li>
                </ul>
            </section>
            <section className={classes.ProjectDiv}>
                <img className={classes.Image} src={twitchStreamImg} alt="Twitch Stream"/>
            </section>
        </section>
    </section>
);

export default twitchStream;