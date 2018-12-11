import React from 'react';
import classes from './ProjectStyle.css';
import expireGuardImg from '../../assets/portfolio/expanded/expireguard.jpg';
const expireGuard = () => (
    <section className={classes.Project}>
            <section className={classes.ProjectDiv}>
                <section className={classes.ImageDiv}>
                    <img className={classes.Image} src={expireGuardImg} alt="ExpireGuard"/>
                </section>
                <p className={classes.ProjectName}>ExpireGuard</p>
                <p className={classes.ProjectDescription}>Certificate Expiration prevention tool written in
                    <span className={classes.Bold}> C#</span> with <span className={classes.Bold}>WPF</span>.</p>
                <ul className={classes.List}>
                    <li>Solo professional Project</li>
                    <li>Supports Windows/UNIX deployment</li>
                    <li>System certificate retrieval and metadata extraction capabilities</li>
                    <li>OS Notification when certificate expiration hits user-supplied threshold</li>
                    <li>Configuration utility included to set threshold information</li>
                    <li><em>Source is classified U.S. Government property</em></li>
                </ul>
            </section>
    </section>
);

export default expireGuard;