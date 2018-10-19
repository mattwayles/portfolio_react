import React from 'react';
import classes from '../ProjectStyle.css';
import shuckShareImg from '../../../assets/portfolio/JavaScript/shuckandshare.jpg';

const shuckShare = () => (
    <section className={classes.Project}>
            <section className={classes.ProjectDiv}>
                <section className={classes.ImageDiv}>
                    <img className={classes.Image} src={shuckShareImg} alt="Shuck & Share"/>
                </section>
                <p className={classes.ProjectName}>Shuck & Share</p>
                <p className={classes.ProjectDescription}>Freelance website written for Shuck & Share humanitarian organization in Florida.
                    Written in <span className={classes.Bold}> ECMAScript 6</span> with <span className={classes.Bold}> HTML5 </span>
                    and <span className={classes.Bold}> CSS3</span>.</p>
                <ul className={classes.List}>
                    <li>Solo Professional Project</li>
                    <li><a href="http://shuckandshare.org" rel="noopener noreferrer"
                           target="_blank">Visit Website</a></li>
                    <li><a href="https://github.com/mattwayles/shuckShare" rel="noopener noreferrer"
                           target="_blank">Open Source</a></li>
                </ul>
            </section>
    </section>
);

export default shuckShare;