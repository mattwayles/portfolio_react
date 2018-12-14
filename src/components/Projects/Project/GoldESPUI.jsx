import React from 'react';
import classes from '../ProjectStyle.css';
import goldespImg from '../../../assets/portfolio/expanded/goldesp.jpg';
import Button from "../../ui/Button/Button";

const PROJECT_NAME = "goldui";

const goldESPUI = (props) => (
    <section className={props.closing ? classes.ProjectClosing : classes.Project}>
        <section onClick={() => props.exit(PROJECT_NAME)} className={classes.CloseButton} />
        <section className={classes.ProjectDiv}>
            <section className={classes.ProjectDetails}>
                <p className={classes.ProjectName}>GOLDesp</p>
                <p className={classes.ProjectDescription}>User interface for the leading military MRO & Supply solution produced by Tapestry Solutions.
                    Written in <span className={classes.Bold}> ECMAScript 5</span>.</p>
                <ul className={classes.List}>
                    <li>Agile Team Project</li>
                    <li><span className={classes.Bold}>My Role:</span> Senior Developer</li>
                    <li><span className={classes.Bold}>My Contributions:</span></li>
                    <ul className={classes.InnerList}>
                        <li>Code optimization and maintenance</li>
                        <li>UI/UX Look-and-Feel updates</li>
                        <li>Communication with back-end API endpoints</li>
                        <li>Feature Inclusion</li>
                        <li>Bug Fixes</li>
                    </ul>
                    <li><em>Source is proprietary information owned by Tapestry Solutions, Inc.</em></li>
                </ul>
            </section>
            <section className={classes.ImageDiv}>
                <img className={classes.Image} src={goldespImg} alt="GoldESP"/>
                <section className={classes.Buttons}>
                    <a href="https://www.tapestrysolutions.com/products/goldesp-mro-supply/"
                       rel="noopener noreferrer" target="_blank">
                        <Button classes={classes.Button} visible={true} pressed={false} enter={"right"} label={"Learn More"} />
                    </a>
                    <a href="https://www.youtube.com/watch?v=yQzc9aW_7n0"
                       rel="noopener noreferrer" target="_blank"><Button classes={classes.Button} visible={true} pressed={false} enter={"right"} label={"Watch Video"} /></a>
                </section>
            </section>
        </section>
    </section>
);

export default goldESPUI;