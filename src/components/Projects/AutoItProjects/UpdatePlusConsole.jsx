import React from 'react';
import classes from '../ProjectStyle.css';
import updatePlusConsoleImg from '../../../assets/portfolio/AutoIt/update+.jpg';

const updatePlusConsole = () => (
    <section className={classes.Project}>
        <section className={classes.FlexRow}>
            <section className={classes.ProjectDiv}>
                <p className={classes.ProjectName}>Update+ User Console</p>
                <p className={classes.ProjectDescription}>User console to execute automated Windows update packages. Written in
                    <span className={classes.Bold}> AutoIt</span>.</p>
                <ul className={classes.ProjectDescription}>
                    <li>Agile Team project</li>
                    <li><span className={classes.Bold}>My Role:</span> Developer</li>
                    <li><span className={classes.Bold}>My Contributions:</span></li>
                    <ul>
                        <li>Code optimization and maintenance</li>
                        <li>Feature Inclusion</li>
                        <li>Bug Fixes</li>
                    </ul>
                    <li><em>Source is classified U.S. Government property</em></li>
                </ul>
            </section>
            <section className={classes.ProjectDiv}>
                <img className={classes.Image} src={updatePlusConsoleImg} alt="Update+ Console"/>
            </section>
        </section>
    </section>
);

export default updatePlusConsole;