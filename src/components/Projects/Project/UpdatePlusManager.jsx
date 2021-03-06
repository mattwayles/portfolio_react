import React from 'react';
import classes from '../ProjectStyle.css';
import updatePlusMgrImg from '../../../assets/portfolio/expanded/update+mgr.jpg';

const PROJECT_NAME = "updatePlusManager";

const updatePlusManager = (props) => (
    <section className={props.closing ? classes.ProjectClosing : classes.Project}>
        <section onClick={() => props.exit(PROJECT_NAME)} className={classes.CloseButton} />
        <section className={classes.ProjectDiv}>
            <section className={classes.ProjectDetails}>
                <p className={classes.ProjectName}>Update+ Manager</p>
                <p className={classes.ProjectDescription}>User Interface to create automated Windows update packages. Written in
                    <span className={classes.Bold}> AutoIt</span>.</p>
                <ul className={classes.List}>
                    <li>Agile Team project</li>
                    <li><span className={classes.Bold}>My Role:</span> Developer</li>
                    <li><span className={classes.Bold}>My Contributions:</span></li>
                    <ul className={classes.InnerList}>
                        <li>Code optimization and maintenance</li>
                        <li>Feature Inclusion</li>
                        <li>Bug Fixes</li>
                    </ul>
                    <li><em>Source is classified U.S. Government property</em></li>
                </ul>
            </section>
            <section className={classes.ImageDiv}>
                <img className={classes.Image} src={updatePlusMgrImg} alt="Update+ Manager"/>
            </section>
        </section>
    </section>
);

export default updatePlusManager;