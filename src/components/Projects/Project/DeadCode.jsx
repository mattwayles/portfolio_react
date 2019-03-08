import React from 'react';
import classes from '../ProjectStyle.css';
//import hikersWatchImg from '../../../assets/portfolio/expanded/hikersWatch.png';

const PROJECT_NAME = "deadCode";

const deadCode = (props) => (
    <section className={props.closing ? classes.ProjectClosing : classes.Project}>
        <section onClick={() => props.exit(PROJECT_NAME)} className={classes.CloseButton} />
        <section className={classes.ProjectDiv}>
            <section className={classes.ProjectDetails}>
                <p className={classes.ProjectName}>Dead Code Eliminator</p>
                <p className={classes.ProjectDescription}>Internal command-driven application that retrieves source code
                    package information from preformatted Excel spreadsheets and cross-references against OpenGrok engine to quickly
                    and efficiently identify dead code. Analysis results are output to a new Excel sheet within the existing
                    spreadsheet. Written in <span className={classes.Bold}>Java</span>.</p>
                <ul className={classes.List}>
                    <li>Solo Professional Project</li>
                    <ul className={classes.InnerList}>
                        <li>OpenGrok API Integration</li>
                        <li>Stable HTML Scraping support</li>
                        <li>Microsoft Excel I/O Abilities</li>
                        <li>Utilizes new Java 8 functional programming constructs</li>
                        <li><em>Source is proprietary information owned by Tapestry Solutions, Inc. Release by authorized request only.</em></li>
                    </ul>
                </ul> 
            </section>
            <section className={classes.ImageDiv}>
                {/*<img className={classes.Image} src={hikersWatchImg} alt="Hiker's Watch"/>*/}
            </section>
        </section>
    </section>
);

export default deadCode;