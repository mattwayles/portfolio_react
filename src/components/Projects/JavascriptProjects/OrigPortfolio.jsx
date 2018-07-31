import React from 'react';
import classes from '../ProjectStyle.css';
import origPortfolioImg from '../../../assets/portfolio/JavaScript/mattwayles.jpg'

const origPortfolio = () => (
    <section className={classes.Project}>
        <section className={classes.FlexRow}>
            <section className={classes.ProjectDiv}>
                <p className={classes.ProjectName}>Digital Portfolio (Original)</p>
                <p className={classes.ProjectDescription}>Professional portfolio as a freeCodeCamp project.
                    Written in <span className={classes.Bold}>ECMAScript 6</span> with
                    <span className={classes.Bold}> HTML5</span> and <span className={classes.Bold}> CSS3</span>.</p>
                <ul className={classes.ProjectDescription}>
                    <li>Solo Educational Project</li>
                    <li>Part of FreeCodeCamp Full-Stack Certification</li>
                    <li>Assisted with MS70-480 MCP Certification</li>
                    <li><a href="http://codepen.io/LiquidIce25/pen/aJNPgE" rel="noopener noreferrer" target="_blank">
                        View Source</a></li>
                </ul>
            </section>
            <section className={classes.ProjectDiv}>
                <img className={classes.Image} src={origPortfolioImg} alt="Original Portfolio"/>
            </section>
        </section>
    </section>
);

export default origPortfolio;