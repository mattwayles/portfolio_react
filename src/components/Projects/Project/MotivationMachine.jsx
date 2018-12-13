import React from 'react';
import classes from '../ProjectStyle.css';
import motivationMachineImg from '../../../assets/portfolio/expanded/motivation.jpg'

const motivationMachine = () => (
    <section className={classes.Project}>
            <section className={classes.ProjectDiv}>
                <section className={classes.ImageDiv}>
                    <img className={classes.Image} src={motivationMachineImg} alt="Motivation Machine"/>
                </section>
                <p className={classes.ProjectName}>Motivation Machine</p>
                <p className={classes.ProjectDescription}>Random quote generator intended to boost motivation.
                    Written in <span className={classes.Bold}> JQuery</span> with
                    <span className={classes.Bold}> HTML5</span> and <span className={classes.Bold}> CSS3</span>.</p>
                <ul className={classes.List}>
                    <li>Solo Educational Project</li>
                    <li>Part of FreeCodeCamp Full-Stack Certification</li>
                    <li>Assisted with MS70-480 MCP Certification</li>
                    <li><a href="http://codepen.io/LiquidIce25/pen/qrKEGW" rel="noopener noreferrer" target="_blank">
                        View Source</a></li>
                </ul>
            </section>
    </section>
);

export default motivationMachine;