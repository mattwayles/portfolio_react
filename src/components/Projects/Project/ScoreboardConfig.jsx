import React from 'react';
import classes from '../ProjectStyle.css';
import scoreboardConfigImg from '../../../assets/portfolio/expanded/scoreboardConfig.png';
import googlePlay from '../../../assets/portfolio/logos/google-play-badge.png';
import Button from "../../ui/Button/Button";

const PROJECT_NAME = "scoreboardConfig";

const scoreboardConfig = (props) => (
    <section className={props.closing ? classes.ProjectClosing : classes.Project}>
        <section onClick={() => props.exit(PROJECT_NAME)} className={classes.CloseButton} />
        <section className={classes.ProjectDiv}>
            <section className={classes.ProjectDetails}>
                <p className={classes.ProjectName}>AST Scoreboard Configuration</p>
                <p className={classes.ProjectDescription}>Mobile app used as a premium addition to the Advanced Sports Technologies Scoreboard to configure settings
                    via <span className={classes.Bold}>Bluetooth</span>. This application is used to transform an AST Scoreboard session using different game types,
                    win scores, win by 2 functionality, animations, and much more! Written in <span className={classes.Bold}> Java</span> using Android Studio.</p>
                <ul className={classes.List}>
                    <li>Freelance Consulting Project</li>
                    <ul className={classes.InnerList}>
                        <li>Bluetooth Integration using <span className={classes.Bold}>Bluecove</span></li>
                        <li>Android 4.0.3+ Support</li>
                    </ul>
                </ul>
                <a href="https://play.google.com/store/apps/details?id=com.advancedsportstechnologies.astscoreboardconfig&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
                   rel="noopener noreferrer"
                   target="_blank"><img className={classes.GooglePlay} src={googlePlay} alt="Get it on Google Play" /></a>
            </section>
            <section className={classes.ImageDiv}>
                <img className={classes.Image} src={scoreboardConfigImg} alt="Scoreboard Configuration"/>
                <section className={classes.Buttons}>
                    <a href="https://github.com/mattwayles/scoreboardconfig" rel="noopener noreferrer"
                       target="_blank">
                        <Button classes={classes.Button} visible={true} pressed={false} enter={"right"} label={"Open Source"} />
                    </a>
                </section>
            </section>
        </section>
    </section>
);

export default scoreboardConfig;

