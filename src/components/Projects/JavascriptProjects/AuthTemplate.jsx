import React from 'react';
import classes from '../ProjectStyle.css';
import authTemplateImg from '../../../assets/portfolio/JavaScript/authtemplate.jpg';

const authTemplate = () => (
    <section className={classes.Project}>
        <section className={classes.FlexRow}>
            <section className={classes.ProjectDiv}>
                <p className={classes.ProjectName}>Authentication Template</p>
                <p className={classes.ProjectDescription}>Token-based authentication template for React.js applications. Written in
                    <span className={classes.Bold}> React.js</span>.</p>
                <ul className={classes.ProjectDescription}>
                    <li>Solo Recreational Project</li>
                    <li>Utilizes browser token storage and Redux for state management</li>
                    <li>Employs Base64 Authentication</li>
                    <li>Portable to MongoDB or Google Firebase databases</li>
                    <li><a href="https://github.com/mattwayles/authTemplate" rel="noopener noreferrer"
                           target="_blank">Open Source</a></li>
                </ul>
            </section>
            <section className={classes.ProjectDiv}>
                <img className={classes.Image} src={authTemplateImg} alt="Authentication Template"/>
            </section>
        </section>
    </section>
);

export default authTemplate;