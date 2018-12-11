import React from 'react';
import classes from './ProjectStyle.css';
import versionCheckImg from '../../assets/portfolio/expanded/versioncheck.jpg';

const versionCheck = () => (
    <section className={classes.Project}>
            <section className={classes.ProjectDiv}>
                <section className={classes.ImageDiv}>
                    <img className={classes.Image} src={versionCheckImg} alt="VersionCheck"/>
                </section>
                <p className={classes.ProjectName}>VersionCheck</p>
                <p className={classes.ProjectDescription}>Baseline comparison tool to verify
                    successful Windows Update installations. Written in <span className={classes.Bold}>C# </span>
                    with <span className={classes.Bold}>WPF</span></p>
                <ul className={classes.List}>
                    <li>Solo professional project</li>
                    <li>File metadata retrieval and R/W capabilities</li>
                    <li><em>Source is classified U.S. Government property</em></li>
                </ul>
            </section>
    </section>
);

export default versionCheck;