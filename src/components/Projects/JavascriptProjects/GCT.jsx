import React from 'react';
import classes from '../ProjectStyle.css';
import gctLogo from '../../../assets/portfolio/JavaScript/gct.png';

const gct = () => (
    <section className={classes.Project}>
        <section className={classes.FlexRow}>
            <section className={classes.ProjectDiv}>
                <p className={classes.ProjectName}>GOLDesp Configuration Toolkit (GCT)</p>
                <p className={classes.ProjectDescription}>User interface for the GoldESP Configuration Toolkit,
                    providing customers control over their application and the ability to make changes without server downtime.
                    Front-end written in <span className={classes.Bold}>React.js</span> and deployed via
                    <span className={classes.Bold}> Node.js</span>.</p>
                <ul className={classes.ProjectDescription}>
                    <li>Agile Team Project</li>
                    <li><span className={classes.Bold}>My Roles:</span> Lead UI Developer</li>
                    <li><span className={classes.Bold}>My Contributions:</span></li>
                    <ul>
                        <li>Helped design the base UI design</li>
                        <li>Managed a small team of developers to complete UI tasks and keep up with back-end development</li>
                        <li>Responsible for securing the UI using <span className={classes.Bold}>Tomcat Basic Authentication</span></li>
                        <li>Responsible for receiving automatic updates using <span className={classes.Bold}>STOMP</span></li>
                        <li>Responsible for package and build management using <span className={classes.Bold}>NPM</span></li>
                        <li>Persisting and managing state using <span className={classes.Bold}>Redux Sagas</span></li>
                        <li>Communication with the back-end API using <span className={classes.Bold}>Axios</span></li>
                    </ul>
                    <li><em>Source is proprietary information owned by Tapestry Solutions, Inc.</em></li>
                </ul>
            </section>
            <section className={classes.ProjectDiv}>
                <img className={classes.Image} src={gctLogo} alt="GCT"/>
            </section>
        </section>
    </section>
);

export default gct;