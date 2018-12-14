import React from 'react';
import classes from '../ProjectStyle.css';
import liquidLabJava from '../../../assets/portfolio/expanded/liquidlab_java.jpg';
import Button from "../../ui/Button/Button";

const PROJECT_NAME = 'liquidLabJava';
const liquidLab = (props) => (
    <section className={props.closing ? classes.ProjectClosing : classes.Project}>
        <section onClick={() => props.exit(PROJECT_NAME)} className={classes.CloseButton} />
            <section className={classes.ProjectDiv}>
                <section className={classes.ProjectDetails}>
                <p className={classes.ProjectName}>LiquidLab Native</p>
                <p className={classes.ProjectDescription}>Desktop DIY e-liquid calculator written with a <span
                    className={classes.Bold}>Java</span>
                    &nbsp; back-end and <span className={classes.Bold}>JavaFX</span> front-end. Create and store custom e-liquid recipes
                while keeping track of current concentrate inventory with SQLite3 database integration.</p>
                <ul className={classes.List}>
                    <li>Solo recreational project</li>
                    <li>MVC Architecture</li>
                    <li>SQLite3 Database</li>
                </ul><br />
            </section>
                <section className={classes.ImageDiv}>
                    <img className={classes.Image} src={liquidLabJava} alt="LiquidLab"/>
                    <section className={classes.Buttons}>
                        <a href="https://github.com/mattwayles/LiquidLabJava" rel="noopener noreferrer"
                           target="_blank">
                            <Button classes={classes.Button} visible={true} pressed={false} enter={"right"} label={"Open Source"} />
                        </a>
                    </section>
                </section>
            </section>
    </section>
);

export default liquidLab;