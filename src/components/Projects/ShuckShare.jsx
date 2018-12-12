import React from 'react';
import classes from './ProjectStyle.css';
import closeButton from '../../assets/arrows/upArrow.png';
import shuckShareImg from '../../assets/portfolio/expanded/shuckandshare.jpg';
import Button from "../ui/Button/Button";

const PROJECT_NAME = "shuckShare";

const shuckShare = (props) => (
    <section className={classes.Project}>
        <img onClick={() => props.exit(PROJECT_NAME)} className={classes.CloseButton} src={closeButton} alt={"X"} />
        <section className={classes.ProjectDiv}>
            <section className={classes.ProjectDetails}>
            <p className={classes.ProjectName}>Shuck & Share</p>
            <p className={classes.ProjectDescription}>Freelance website written for Shuck & Share humanitarian organization in Florida.
                Current contract includes indefinite updates, bug fixes, and feature inclusion.
                Written in <span className={classes.Bold}> ECMAScript 6</span> with <span className={classes.Bold}> HTML5 </span>
                and <span className={classes.Bold}> CSS3</span>.</p>
            <ul className={classes.List}>
                <li>Freelance Consulting Project</li>
                <ul className={classes.InnerList}>
                    <li>Pure HTML5 / CSS3 / Bootstrap4 / ES6</li>
                    <li><em>Source owned and protected by <a href="https://www.marinediscoverycenter.org/" rel="noopener noreferrer"
                                                             target="_blank">Marine Discovery Center</a></em></li>
                </ul>
            </ul>
            </section>
            <section className={classes.ImageDiv}>
                <img className={classes.Image} src={shuckShareImg} alt="Shuck & Share"/>
                <section className={classes.Buttons}>
                    <a href="http://shuckandshare.org" rel="noopener noreferrer"
                       target="_blank"><Button visible={true} pressed={false} enter={"right"} label={"Visit Website"} /></a>
                </section>
            </section>
        </section>
    </section>
);

export default shuckShare;