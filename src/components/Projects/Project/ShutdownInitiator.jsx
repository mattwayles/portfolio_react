import React from 'react';
import classes from '../ProjectStyle.css';
import shutdownImg from '../../../assets/portfolio/expanded/shutdowninitiator.jpg';

const PROJECT_NAME = 'shutdown';

const shutdownInitiator = (props) => (
    <section className={props.closing ? classes.ProjectClosing : classes.Project}>
        <section onClick={() => props.exit(PROJECT_NAME)} className={classes.CloseButton} />
        <section className={classes.ProjectDiv}>
            <section className={classes.ProjectDetails}>
                <p className={classes.ProjectName}>Shutdown Initiator</p>
                <p className={classes.ProjectDescription}>Immediately send shutdown signal to specified systems in an
                    emergency, or perform a blanket shutdown. Customizable to allow for group or individual shutdowns, however
                    you wish to organize your systems. Written in <span className={classes.Bold}> C#</span> with
                    <span className={classes.Bold}> WPF</span>.</p>
                <ul className={classes.List}>
                    <li>Solo professional project</li>
                    <li>System registration and remote administration capabilities</li>
                    <li>Ordered, graceful, or forced shutdown options</li>
                    <li>Centralized location capable of registering Windows/UNIX hosts</li>
                    <li><em>Source is classified U.S. Government property</em></li>
                </ul>
            </section>
            <section className={classes.ImageDiv}>
                <img className={classes.Image} src={shutdownImg} alt="Shutdown Initiator"/>
            </section>
        </section>
    </section>
);

export default shutdownInitiator;