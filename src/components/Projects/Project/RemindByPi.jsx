import React from 'react';
import classes from '../ProjectStyle.css';
import Button from "../../ui/Button/Button";
import remindByPiImg from '../../../assets/portfolio/expanded/remindByPiImg.png';

const PROJECT_NAME = "remindByPi";

const remindByPi = (props) => (
    <section className={props.closing ? classes.ProjectClosing : classes.Project}>
        <section onClick={() => props.exit(PROJECT_NAME)} className={classes.CloseButton} />
        <section className={classes.ProjectDiv}>
            <section className={classes.ProjectDetails}>
                <p className={classes.ProjectName}>Remind By Pi</p>
                <p className={classes.ProjectDescription}>Send reminders directly to your home Raspberry Pi with Remind By Pi!
                     This application runs as a service on a networked Raspberry Pi and polls a database at configurable
                    intervals to retrieve new messages. If you need to remember to do something when you get home, or want to
                    contact a household member in a revolutionary way, just access the web application and send a message.
                    Written in <span className={classes.Bold}>Python</span> with a
                    <span className={classes.Bold}> React</span> user interface.</p>
                <ul className={classes.List}>
                    <li>Solo Recreational Project</li>
                    <ul className={classes.InnerList}>
                        <li>Raspberry Pi Integration</li>
                        <li>Publicly accessible React web application</li>
                        <li>Firebase database authentication and support</li>
                    </ul> 
                </ul>
            </section>
            <section className={classes.ImageDiv}>
                <img className={classes.Image} src={remindByPiImg} alt="RemindByPi"/>
                <section className={classes.Buttons}>
                    <a href="http://remindbypi.firebaseapp.com" rel="noopener noreferrer"
                       target="_blank"><Button classes={classes.Button} visible={true} pressed={false} enter={"right"} label={"Visit Website"} /></a>
                    <a href="https://github.com/mattwayles/pi_scripts" rel="noopener noreferrer"
                       target="_blank"><Button classes={classes.Button} visible={true} pressed={false} enter={"right"} label={"Open Source"} /></a>
                </section>
            </section>
        </section>
    </section>
);

export default remindByPi;