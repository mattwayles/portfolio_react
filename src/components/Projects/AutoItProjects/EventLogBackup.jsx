import React from 'react';
import classes from '../ProjectStyle.css';
import elbuImg from '../../../assets/portfolio/AutoIt/eventlogbackup.jpg';

const elbu = () => (
    <section className={classes.Project}>
        <section className={classes.FlexRow}>
            <section className={classes.ProjectDiv}>
                <p className={classes.ProjectName}>Event Log Backup Utility</p>
                <p className={classes.ProjectDescription}>Background service utility that archives Windows Event Logs to a network location.
                    Written in <span className={classes.Bold}>AutoIt</span>.</p>
                <ul className={classes.ProjectDescription}>
                    <li>Solo professional project</li>
                    <li>Utilizes OS hooks to redirect Windows Event Logs</li>
                    <li>Configuration utility using AutoIT GUI included</li>
                    <li>Prevents user lockout if System log is full</li>
                    <li><em>Source is classified U.S. Government property</em></li>
                </ul>
            </section>
            <section className={classes.ProjectDiv}>
                <img className={classes.Image} src={elbuImg} alt="ELBU"/>
            </section>
        </section>
    </section>
);

export default elbu;