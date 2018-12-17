import React from 'react';
import classes from '../ProjectStyle.css';
import twitchStreamImg from '../../../assets/portfolio/expanded/twitch.jpg';
import Button from "../../ui/Button/Button";

const PROJECT_NAME = "twitchStream";

const twitchStream = (props) => (
    <section className={props.closing ? classes.ProjectClosing : classes.Project}>
        <section onClick={() => props.exit(PROJECT_NAME)} className={classes.CloseButton} />
        <section className={classes.ProjectDiv}>
            <section className={classes.ProjectDetails}>
                <p className={classes.ProjectName}>Twitch Streaming</p>
                <p className={classes.ProjectDescription}>Quickly find out if friends are streaming on Twitch!
                    Written in <span className={classes.Bold}>ECMAScript 6</span> with
                    <span className={classes.Bold}> HTML5</span> and <span className={classes.Bold}> CSS3</span>.</p>
                <ul className={classes.List}>
                    <li>Solo Educational Project</li>
                    <li>Uses JSON parsing to send and display information in real-time</li>
                    <li>Part of FreeCodeCamp Full-Stack Certification</li>
                    <li>Assisted with MS70-480 MCP Certification</li>
                </ul>
            </section>
            <section className={classes.ImageDiv}>
                <img className={classes.Image} src={twitchStreamImg} alt="Twitch Stream"/>
                <section className={classes.Buttons}>
                    <a href="http://codepen.io/LiquidIce25/pen/evLGaX" rel="noopener noreferrer"
                       target="_blank"><Button classes={classes.Button} visible={true} pressed={false} enter={"right"} label={"View Source"} /></a>
                </section>
            </section>
        </section>
    </section>
);

export default twitchStream;