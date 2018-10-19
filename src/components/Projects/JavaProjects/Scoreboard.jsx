import React from 'react';
import classes from './../ProjectStyle.css';
import scoreboardImg from '../../../assets/portfolio/Java/scoreboard.png';

const scoreboard = () => (
    <section className={classes.Project}>
        <section className={classes.ProjectDiv}>
            <section className={classes.ImageDiv}>
                <img className={classes.Image} src={scoreboardImg} alt="Scoreboard"/>
            </section>
            <p className={classes.ProjectName}>AST Scoreboard</p>
            <p className={classes.ProjectDescription}>User interface for a physical scoreboard and controller setup manufactured and sold by Advanced Sports Technologies, LLC.
                This application acts as a Bluetooth server to receive configuration information from clients and produce customized scoreboards. Interfaces
                with Raspberry Pi GPIO pins to register physical button presses or through keyboard presses.</p>
            <ul className={classes.List}>
                <li>Recreational Solo Project</li>
                <ul className={classes.InnerList}>
                    <li>Bluetooth service publishing</li>
                    <li>Raspberry Pi integration</li>
                    <li>MVC Architecture</li>
                    <li><a href="https://github.com/mattwayles/bluetoothscoreboard" rel="noopener noreferrer"
                           target="_blank">Open Source</a></li>
                </ul>
            </ul>
        </section>
    </section>
);

export default scoreboard;