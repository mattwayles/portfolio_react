import React from 'react';
import classes from '../ProjectStyle.css';
import motivationMachineImg from '../../../assets/portfolio/expanded/motivation.jpg'
import Button from "../../ui/Button/Button";

const PROJECT_NAME = "motivationMachine";

const motivationMachine = (props) => (
    <section className={props.closing ? classes.ProjectClosing : classes.Project}>
        <section onClick={() => props.exit(PROJECT_NAME)} className={classes.CloseButton} />
        <section className={classes.ProjectDiv}>
            <section className={classes.ProjectDetails}>
                <p className={classes.ProjectName}>Motivation Machine</p>
                <p className={classes.ProjectDescription}>Random quote generator intended to boost motivation.
                    Written in <span className={classes.Bold}> JQuery</span> with
                    <span className={classes.Bold}> HTML5</span> and <span className={classes.Bold}> CSS3</span>.</p>
                <ul className={classes.List}>
                    <li>Solo Educational Project</li>
                    <li>Part of FreeCodeCamp Full-Stack Certification</li>
                    <li>Assisted with MS70-480 MCP Certification</li>
                </ul>
            </section>
            <section className={classes.ImageDiv}>
                <img className={classes.Image} src={motivationMachineImg} alt="Motivation Machine"/>
                <section className={classes.Buttons}>
                    <a href="http://codepen.io/LiquidIce25/pen/qrKEGW" rel="noopener noreferrer"
                       target="_blank"><Button classes={classes.Button} visible={true} pressed={false} enter={"right"} label={"View Source"} /></a>
                </section>
            </section>
        </section>
    </section>
);

export default motivationMachine;