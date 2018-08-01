import React from 'react';
import classes from './ProjectStyle.css';
import templateImg from '../../assets/Placeholder.png';

const template = () => (
    <section className={classes.Project}>
        <section className={classes.FlexRow}>
            <section className={classes.ProjectDiv}>
                <p className={classes.ProjectName}>templateName</p>
                <p className={classes.ProjectDescription}>templateDesc</p>
                <ul className={classes.List}>
                    <li>templateList</li>
                    <li><a href="http://templateURL" rel="noopener noreferrer"
                           target="_blank">Open Source</a></li>
                </ul>
            </section>
            <section className={classes.ProjectDiv}>
                <img className={classes.Image} src={templateImg} alt="template"/>
            </section>
        </section>
    </section>
);

export default template;