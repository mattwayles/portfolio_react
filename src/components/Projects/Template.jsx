import React from 'react';
import classes from './ProjectStyle.css';
import templateImg from '../../assets/Placeholder.png';

const template = () => (
    <section className={classes.Project}>
        <section className={classes.ProjectDiv}>
            <section className={classes.ImageDiv}>
                <img className={classes.Image} src={templateImg} alt="templateImg"/>
            </section>
            <p className={classes.ProjectName}>TemplateName</p>
            <p className={classes.ProjectDescription}>TemplateDesc</p>
            <ul className={classes.List}>
                <li>TemplateListItem</li>
                <li><em>TemplateSource</em></li>
            </ul>
        </section>
    </section>
);

export default template;