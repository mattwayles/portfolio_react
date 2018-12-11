import React from 'react';
import classes from './ProjectStyle.css';
import elbuImg from '../../assets/portfolio/expanded/eventlogbackup.jpg';

const elbu = () => (
    <section className={classes.Project}>
            <section className={classes.ProjectDiv}>
                <section className={classes.ImageDiv}>
                    <img className={classes.Image} src={elbuImg} alt="ELBU"/>
                </section>
                <p className={classes.ProjectName}>Event Log Backup Utility</p>
                <p className={classes.ProjectDescription}>Background service utility that archives Windows Event Logs to a network location.
                    Written in <span className={classes.Bold}>AutoIt</span>.</p>
                <ul className={classes.List}>
                    <li>Solo professional project</li>
                    <li>Utilizes OS hooks to redirect Windows Event Logs</li>
                    <li>Configuration utility using AutoIT GUI included</li>
                    <li>Prevents user lockout if System log is full</li>
                    <li><em>Source is classified U.S. Government property</em></li>
                </ul>
            </section>
    </section>
);

export default elbu;