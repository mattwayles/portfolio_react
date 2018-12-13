import React from 'react';
import classes from '../ProjectStyle.css';
import gctLogo from '../../../assets/portfolio/expanded/gct.png';

const GCTUI = () => (
    <section className={classes.Project}>
            <section className={classes.ProjectDiv}>
                <section className={classes.ImageDiv}>
                    <img className={classes.Image} src={gctLogo} alt="GCT"/>
                </section>
                <p className={classes.ProjectName}>GOLDesp Configuration Toolkit (GCT)</p>
                <p className={classes.ProjectDescription}>User interface for the GoldESP Configuration Toolkit,
                    providing customers control over their application and the ability to make changes without server downtime.
                    Front-end written in <span className={classes.Bold}>React.js</span> and deployed via
                    <span className={classes.Bold}> Node.js</span>.</p>
                <ul className={classes.List}>
                    <li>Agile Team Project</li>
                    <li><span className={classes.Bold}>My Roles:</span> Lead Developer</li>
                    <li><span className={classes.Bold}>My Contributions:</span></li>
                    <ul className={classes.InnerList}>
                        <li>Responsible for UI design and implementation</li>
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
    </section>
);

export default GCTUI;