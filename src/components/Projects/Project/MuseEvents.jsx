import React from 'react';
import classes from '../ProjectStyle.css';
import Auxil from "../../Auxil";
import museEventsImg from "../../../assets/portfolio/expanded/museevents.jpg";
import Button from "../../ui/Button/Button";

const PROJECT_NAME = "museEvents";

const museEvents = (props) => (
    <Auxil>
        <section className={props.closing ? classes.ProjectClosing : classes.Project}>
            <section onClick={() => props.exit(PROJECT_NAME)} className={classes.CloseButton} />
            <section className={classes.ProjectDiv}>
                <section className={classes.ProjectDetails}>
                        <p className={classes.ProjectName}>Muse Events</p>
                        <p className={classes.ProjectDescription}>Freelance website for Colorado's top wedding & event planning business.
                            Written in <span className={classes.Bold}>React</span> with <span className={classes.Bold}>Tailwind CSS</span> and
                            <span className={classes.Bold}> fetch</span>.</p>
                        <ul className={classes.List}>
                            <li>Freelance Consulting Project</li>
                        </ul>
                </section>
                <section className={classes.ImageDiv}>
                    <img className={classes.Image} src={museEventsImg} alt="Muse Events"/>
                    <section className={classes.Buttons}>
                        <a href="https://master.d2zc05j2harmv7.amplifyapp.com/" rel="noopener noreferrer"
                           target="_blank"><Button classes={classes.Button} visible={true} pressed={false} enter={"right"} label={"Visit Website"} /></a>
                        <a href="https://github.com/mattwayles/museevents" rel="noopener noreferrer"
                           target="_blank"><Button classes={classes.Button} visible={true} pressed={false} enter={"right"} label={"Open Source"} /></a>
                    </section>
                </section>
            </section>
        </section>
    </Auxil>
);

export default museEvents;
