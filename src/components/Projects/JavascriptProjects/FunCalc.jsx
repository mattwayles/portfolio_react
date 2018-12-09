import React from 'react';
import classes from '../ProjectStyle.css';
import funCalcImg from '../../../assets/portfolio/expandimages/funcalc.jpg'

const funCalc = () => (
    <section className={classes.Project}>
            <section className={classes.ProjectDiv}>
                <section className={classes.ImageDiv}>
                    <img className={classes.Image} src={funCalcImg} alt="FunCalc"/>
                </section>
                <p className={classes.ProjectName}>FunCalc</p>
                <p className={classes.ProjectDescription}>Arithmetic calculator offering colorful themes to enhance
                    interest in mathematics in children. Written in <span className={classes.Bold}>ECMAScript 6</span> with
                    <span className={classes.Bold}> HTML5</span> and <span className={classes.Bold}> CSS3</span>.</p>
                <ul className={classes.List}>
                    <li>Solo Educational Project</li>
                    <li>Part of FreeCodeCamp Full-Stack Certification</li>
                    <li>Assisted with MS70-480 MCP Certification</li>
                    <li><a href="http://codepen.io/LiquidIce25/pen/NpZdeK" rel="noopener noreferrer" target="_blank">
                        View Source</a></li>
                </ul>
            </section>
    </section>
);

export default funCalc;