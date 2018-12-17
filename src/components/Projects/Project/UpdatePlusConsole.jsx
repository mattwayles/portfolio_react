import React from 'react';
import classes from '../ProjectStyle.css';
import updatePlusConsoleImg from '../../../assets/portfolio/expanded/update+.jpg';

const PROJECT_NAME = "updatePlusConsole";

const updatePlusConsole = (props) => (
    <section className={props.closing ? classes.ProjectClosing : classes.Project}>
        <section onClick={() => props.exit(PROJECT_NAME)} className={classes.CloseButton} />
        <section className={classes.ProjectDiv}>
            <section className={classes.ProjectDetails}>
                <p className={classes.ProjectName}>Update+ User Console</p>
                <p className={classes.ProjectDescription}>User console to execute automated Windows update packages. Written in
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
                <img className={classes.Image} src={updatePlusConsoleImg} alt="Update+ Console"/>
            </section>
        </section>
    </section>
);

export default updatePlusConsole;