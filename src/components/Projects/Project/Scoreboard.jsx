import React from 'react';
import classes from '../ProjectStyle.css';
import scoreboardImg from '../../../assets/portfolio/expanded/scoreboard.png';

const scoreboard = () => (
    <section className={classes.Project}>
        <section className={classes.ProjectDiv}>
            <section className={classes.ImageDiv}>
                <img className={classes.Image} src={scoreboardImg} alt="Scoreboard"/>
            </section>
            <p className={classes.ProjectName}>AST Scoreboard</p>
            <p className={classes.ProjectDescription}>User interface for a physical scoreboard and controller setup manufactured and sold by Matt Wayles' recreational company
                <span className={classes.Bold}> Advanced Sports Technologies, LLC.</span> This application acts as a <span className={classes.Bold}>Bluetooth server</span> to receive
                configuration information from clients and produce customized scoreboards. Interfaces with <span className={classes.Bold}>Raspberry Pi GPIO pins</span> to register
                physical button presses or through keyboard presses. Written in  <span className={classes.Bold}>JavaFX</span>, multiple scoreboard themes available.</p>
            <ul className={classes.List}>
                <li>Solo Recreational Project</li>
                <li>Bluetooth service publishing</li>
                <li>Raspberry Pi integration</li>
                <li>MVC Architecture</li>
                <li><a href="https://github.com/mattwayles/bluetoothscoreboard" rel="noopener noreferrer"
                       target="_blank">Open Source</a></li>
            </ul>
        </section>
    </section>
);

export default scoreboard;