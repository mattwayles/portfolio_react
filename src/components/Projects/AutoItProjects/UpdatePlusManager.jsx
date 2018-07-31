import React from 'react';
import classes from '../ProjectStyle.css';
import updatePlusMgrImg from '../../../assets/portfolio/AutoIt/update+mgr.jpg';

const updatePlusManager = () => (
    <section className={classes.Project}>
        <section className={classes.FlexRow}>
            <section className={classes.ProjectDiv}>
                <p className={classes.ProjectName}>Update+ Manager</p>
                <p className={classes.ProjectDescription}>User Interface to create automated Windows update packages. Written in
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
                <img className={classes.Image} src={updatePlusMgrImg} alt="Update+ Manager"/>
            </section>
        </section>
    </section>
);

export default updatePlusManager;