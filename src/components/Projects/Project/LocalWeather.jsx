import React from 'react';
import classes from '../ProjectStyle.css';
import weatherImg from '../../../assets/portfolio/expanded/weather.jpg';
import Button from "../../ui/Button/Button";

const PROJECT_NAME = "localWeather";

const weather = (props) => (
    <section className={props.closing ? classes.ProjectClosing : classes.Project}>
        <section onClick={() => props.exit(PROJECT_NAME)} className={classes.CloseButton} />
        <section className={classes.ProjectDiv}>
            <section className={classes.ProjectDetails}>
                <p className={classes.ProjectName}>Local Weather</p>
                <p className={classes.ProjectDescription}>Display local weather with relevant backgrounds, using data from
                    Weather API. Written in <span className={classes.Bold}>JQuery</span> with
                    <span className={classes.Bold}> HTML5</span> and <span className={classes.Bold}> CSS3</span>.</p>
                <ul className={classes.List}>
                    <li>Solo Educational Project</li>
                    <li>Part of FreeCodeCamp Full-Stack Certification</li>
                    <li>Assisted with MS70-480 MCP Certification</li>
                </ul>
            </section>
            <section className={classes.ImageDiv}>
                <img className={classes.Image} src={weatherImg} alt="Local Weather"/>
                <a href="http://codepen.io/LiquidIce25/pen/PpBBQy" rel="noopener noreferrer"
                   target="_blank"><Button classes={classes.Button} visible={true} pressed={false} enter={"right"} label={"View Source"} /></a>
            </section>
        </section>
    </section>
);

export default weather;