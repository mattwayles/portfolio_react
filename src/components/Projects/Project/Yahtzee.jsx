import React from 'react';
import classes from '../ProjectStyle.css';
import yahtzeeImg from '../../../assets/portfolio/expanded/yahtzee.jpg';
import Button from "../../ui/Button/Button";

const PROJECT_NAME = "yahtzee";

const yahtzee = (props) => (
    <section className={props.closing ? classes.ProjectClosing : classes.Project}>
        <section onClick={() => props.exit(PROJECT_NAME)} className={classes.CloseButton} />
        <section className={classes.ProjectDiv}>
            <section className={classes.ProjectDetails}>
                <p className={classes.ProjectName}>YahtCMD</p>
                <p className={classes.ProjectDescription}>Command driven fully-featured Yahtzee game written in
                    &nbsp;<span className={classes.Bold}>Java</span></p>
                <ul className={classes.List}>
                    <li>Solo recreational project</li>
                    <li>Multiplayer Capabilities</li>
                    <li>SQLite3 Database</li>
                </ul>
            </section>
            <section className={classes.ImageDiv}>
                <img className={classes.Image} src={yahtzeeImg} alt="Yahtzee"/>
                <section className={classes.Buttons}>
                    <a href="https://github.com/mattwayles/yahtzee" rel="noopener noreferrer"
                       target="_blank"><Button classes={classes.Button} visible={true} pressed={false} enter={"right"} label={"Open Source"} /></a>
                </section>
            </section>
        </section>
    </section>
);

export default yahtzee;