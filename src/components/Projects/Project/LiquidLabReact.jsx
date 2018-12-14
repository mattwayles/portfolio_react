import React from 'react';
import classes from '../ProjectStyle.css';
import liquidLabImg from '../../../assets/portfolio/expanded/liquidlabreact.jpg';
import Button from "../../ui/Button/Button";

const PROJECT_NAME = 'liquidLabReact';

const liquidLabReact = (props) => (
    <section className={props.closing ? classes.ProjectClosing : classes.Project}>
        <section onClick={() => props.exit(PROJECT_NAME)} className={classes.CloseButton} />
            <section className={classes.ProjectDiv}>
                <section className={classes.ProjectDetails}>
                <p className={classes.ProjectName}>LiquidLab Web</p>
                <p className={classes.ProjectDescription}>Revolutionary inventory-centric DIY e-liquid calculator written in
                    <span className={classes.Bold}> React.js</span>. This web application assists users in custom e-liquid
                creation through powerful calculations and intuitive recipe storage. With LiquidLab Web, all of your custom
                e-liquid batches and current concentrate inventory are at your fingertips, available anywhere from any device.</p>
                <ul className={classes.List}>
                    <li>Solo Recreational Project</li>
                    <li>Currently Under Construction</li>
                    <li>Uses Authentication Template to store and retrieve user data</li>
                    <li>Uses Google Firebase database and hosting capabilities</li>
                </ul>
                </section>
                <section className={classes.ImageDiv}>
                    <img className={classes.Image} src={liquidLabImg} alt="LiquidLab"/>
                    <section className={classes.Buttons}>
                        <a href="https://github.com/mattwayles/liquidLab" rel="noopener noreferrer"
                           target="_blank">
                            <Button classes={classes.Button} visible={true} pressed={false} enter={"right"} label={"Open Source"} />
                        </a>
                    </section>
                </section>
            </section>
    </section>
);

export default liquidLabReact;