import React from 'react';
import classes from './ProjectStyle.css';
import closeButton from '../../assets/arrows/upArrow.png';
import goldespImg from '../../assets/portfolio/expanded/goldespLogo.png';
import Button from "../ui/Button/Button";
import Auxil from "../Auxil";

const PROJECT_NAME = "gold";

const goldesp = (props) => (
    <Auxil>
        <section className={classes.Project}>
            <img onClick={() => props.exit(PROJECT_NAME)} className={classes.CloseButton} src={closeButton} alt={"X"} />
            <section className={classes.ProjectDiv}>
                <section className={classes.ProjectDetails}>
                        <p className={classes.ProjectName}>GOLDesp (Server)</p>
                        <p className={classes.ProjectDescription}>Leading military MRO & Supply solution that modernizes Maintenance, Repair and Overhaul
                            & supply chain operations for complex assets operating in land, air, sea and space environments.
                            Written in <span className={classes.Bold}>Java</span> and deployed using <span className={classes.Bold}>Apache Tomcat</span>.</p>
                        <ul className={classes.List}>
                            <li>Agile Team Project</li>
                            <li><span className={classes.Bold}>My Role:</span> Senior Developer</li>
                            <li><span className={classes.Bold}>My Contributions:</span></li>
                            <ul className={classes.InnerList}>
                                <li>Code optimization and maintenance</li>
                                <li>Expansion of RESTful services using <span className={classes.Bold}>Apache CXF</span></li>
                                <li>Feature Inclusion</li>
                                <li>Bug Fixes</li>
                                <li>Strangulation from monolithic to SOA micro-service architecture</li>
                            </ul>
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
    </Auxil>
);

export default goldesp;