import React from 'react';
import classes from './ProjectStyle.css';
import updatePlusConsoleImg from '../../assets/portfolio/expanded/update+.jpg';

const updatePlusConsole = () => (
    <section className={classes.Project}>
            <section className={classes.ProjectDiv}>
                <section className={classes.ImageDiv}>
                    <img className={classes.Image} src={updatePlusConsoleImg} alt="Update+ Console"/>
                </section>
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
    </section>
);

export default updatePlusConsole;