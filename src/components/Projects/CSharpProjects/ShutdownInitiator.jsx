import React from 'react';
import classes from '../ProjectStyle.css';
import shutdownImg from '../../../assets/portfolio/CSharp/shutdowninitiator.jpg';

const shutdownInitiator = () => (
    <section className={classes.Project}>
            <section className={classes.ProjectDiv}>
                <section className={classes.ImageDiv}>
                    <img className={classes.Image} src={shutdownImg} alt="Shutdown Initiator"/>
                </section>
                <p className={classes.ProjectName}>Shutdown Initiator</p>
                <p className={classes.ProjectDescription}>Immediately send shutdown signal to specified systems in an
                    emergency, or perform a blanket shutdown. Written in <span className={classes.Bold}> C#</span> with
                    <span className={classes.Bold}> WPF</span>.</p>
                <ul className={classes.List}>
                    <li>Solo professional project</li>
                    <li>System registration and remote administration capabilities</li>
                    <li>Ordered, graceful, or forced shutdown options</li>
                    <li>Centralized location capable of registering Windows/UNIX hosts</li>
                    <li><em>Source is classified U.S. Government property</em></li>
                </ul>
            </section>
    </section>
);

export default shutdownInitiator;