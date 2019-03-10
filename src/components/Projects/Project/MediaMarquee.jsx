import React from 'react';
import classes from '../ProjectStyle.css';
import Button from "../../ui/Button/Button";
import mediaMarqueeImg from '../../../assets/portfolio/expanded/mediaMarqueeImg.jpg';

const PROJECT_NAME = "mediaMarquee";

const mediaMarquee = (props) => (
    <section className={props.closing ? classes.ProjectClosing : classes.Project}>
        <section onClick={() => props.exit(PROJECT_NAME)} className={classes.CloseButton} />
        <section className={classes.ProjectDiv}>
            <section className={classes.ProjectDetails}>
                <p className={classes.ProjectName}>Media Marquee</p>
                <p className={classes.ProjectDescription}>Media Marquee is a Raspberry Pi application that interfaces with an
                    RGB Matrix to provide live information to your media center. This application intercepts the IR signal sent
                    when a TV is turned on, and provides the user with configurable information. The application can be adapted
                    to run any Python script, allowing each user to curate the content displayed to the matrix. Map each script
                    to a remote control to run custom Python code with the push of a button! My personal setup contains a "New
                    on Netflix Today" script, a Movie Suggestion script, a pushup timer, RemindByPi integration, and an asteroid
                    dodging interactive game. Written in <span className={classes.Bold}>Python</span>.</p>
                <ul className={classes.List}>
                    <li>Solo Recreational Project</li>
                    <ul className={classes.InnerList}>
                        <li>Raspberry Pi Integration</li>
                        <li>Numerous API Integration options</li>
                        <li>RGB Matrix display</li>
                        <li>Infrared Receiver signal interception</li>
                    </ul>
                </ul>
            </section>
            <section className={classes.ImageDiv}>
                <img className={classes.Image} src={mediaMarqueeImg} alt="Media Marquee"/>
                <section className={classes.Buttons}>
                    <a href="https://github.com/mattwayles/pi_scripts" rel="noopener noreferrer"
                       target="_blank"><Button classes={classes.Button} visible={true} pressed={false} enter={"right"} label={"Open Source"} /></a>
                </section>
            </section>
        </section>
    </section>
);

export default mediaMarquee;