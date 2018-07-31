import React from 'react';
import classes from '../ProjectStyle.css';
import gctLogo from '../../../assets/portfolio/Java/gctLogo.png';

const gct = () => (
    <section className={classes.Project}>
        <section className={classes.FlexRow}>
            <section className={classes.ProjectDiv}>
                <p className={classes.ProjectName}>GOLDesp Configuration Toolkit (GCT)</p>
                <p className={classes.ProjectDescription}>A configuration utility used to customize GOLDesp instances on the fly,
                    providing customers control over their application and the ability to make changes without server downtime.
                    Back-end written in <span className={classes.Bold}>Java</span> and deployed via
                    <span className={classes.Bold}> Spring Boot</span>.</p>
                <ul className={classes.ProjectDescription}>
                    <li>Agile Team Project</li>
                    <li><span className={classes.Bold}>My Roles:</span> Senior Engineer, Junior Architect</li>
                    <li><span className={classes.Bold}>My Contributions:</span></li>
                    <ul>
                        <li>Helped design the <span className={classes.Bold}>onion</span> and
                            <span className={classes.Bold}>event sourcing</span> architecture patterns</li>
                        <li>Responsible for implementing the backend framework used as a template by developers</li>
                        <li>Responsible for securing the application using <span className={classes.Bold}>Spring Security</span></li>
                        <li>Responsible for providing automatic updates using <span className={classes.Bold}>Websockets</span></li>
                        <li>Responsible for package and build management using <span className={classes.Bold}>Apache Maven</span></li>
                        <li>Persisting and organizing data using <span className={classes.Bold}>MongoDB</span></li>
                        <li>Designed and implemented the API using <span className={classes.Bold}>Spring RESTful Services</span></li>
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