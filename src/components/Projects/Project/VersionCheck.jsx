import React from 'react';
import classes from '../ProjectStyle.css';
import versionCheckImg from '../../../assets/portfolio/expanded/versioncheck.jpg';

const PROJECT_NAME = "versionCheck";

const versionCheck = (props) => (
    <section className={props.closing ? classes.ProjectClosing : classes.Project}>
        <section onClick={() => props.exit(PROJECT_NAME)} className={classes.CloseButton} />
        <section className={classes.ProjectDiv}>
            <section className={classes.ProjectDetails}>
                <p className={classes.ProjectName}>VersionCheck</p>
                <p className={classes.ProjectDescription}>Baseline comparison tool to verify
                    successful Windows Update installations. Compare previous file versions with new file versions after windows updates
                    to ensure the update ran successfully. Intended for offline systems without access to Windows Update servers.
                    Written in <span className={classes.Bold}>C# </span>
                    with <span className={classes.Bold}>WPF</span></p>
                <ul className={classes.List}>
                    <li>Solo professional project</li>
                    <li>File metadata retrieval and R/W capabilities</li>
                    <li><em>Source is classified U.S. Government property</em></li>
                </ul>
            </section>
            <section className={classes.ImageDiv}>
                <img className={classes.Image} src={versionCheckImg} alt="VersionCheck"/>
            </section>
        </section>
    </section>
);

export default versionCheck;