import React from 'react';
import classes from './ProjectStyle.css';
import closeButton from '../../assets/arrows/upArrow.png';
import funCalcImg from '../../assets/portfolio/expanded/funcalc.jpg'
import Button from "../ui/Button/Button";

const PROJECT_NAME = "funCalc";

const funCalc = (props) => (
    <section className={classes.Project}>
        <img onClick={() => props.exit(PROJECT_NAME)} className={classes.CloseButton} src={closeButton} alt={"X"} />
        <section className={classes.ImageDiv}>
            <img className={classes.Image} src={funCalcImg} alt="FunCalc"/>
            <section className={classes.Buttons}>
                <a href="http://codepen.io/LiquidIce25/pen/NpZdeK" rel="noopener noreferrer"
                   target="_blank"><Button visible={true} pressed={false} enter={"right"} label={"View Source"} /></a>
            </section>
        </section>
        <section className={classes.ProjectDiv}>
            <p className={classes.ProjectName}>FunCalc</p>
            <p className={classes.ProjectDescription}>Arithmetic calculator offering colorful themes to enhance
                interest in mathematics for children. Written in <span className={classes.Bold}>ECMAScript 6</span> with
                <span className={classes.Bold}> HTML5</span> and <span className={classes.Bold}> CSS3</span>.</p>
            <ul className={classes.List}>
                <li>Solo Educational Project</li>
                <ul className={classes.InnerList}>
                    <li>Part of <a href="https://guide.freecodecamp.org/meta/free-code-camp-full-stack-development-certification/" rel="noopener noreferrer"
                                   target="_blank">FreeCodeCamp Full-Stack Certification</a></li>
                    <li>Assisted with <a href="https://www.microsoft.com/en-us/learning/exam-70-480.aspx" rel="noopener noreferrer"
                                         target="_blank">MS70-480 MCP Certification</a></li>
                </ul>
            </ul>
        </section>
    </section>
);

export default funCalc;