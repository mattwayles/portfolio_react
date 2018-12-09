import React from 'react';
import classes from './Portfolio.css';
import acidRainLogo from '../../assets/portfolio/logos/acidRainLogo.jpg';
import scoreboardConfigLogo from '../../assets/portfolio/logos/scoreboardConfigLogo.jpg';
import hikersWatchLogo from '../../assets/portfolio/logos/hikersWatchLogo.jpg';
import shuckShareLogo from '../../assets/portfolio/logos/shuckShareLogo.jpg';
import authTemplateLogo from '../../assets/portfolio/logos/authTemplateLogo.png';
import burgerBuilderLogo from '../../assets/portfolio/logos/burgerBuilderLogo.jpg';
import funCalcLogo from '../../assets/portfolio/logos/funCalcLogo.jpg';
import gctLogo from '../../assets/portfolio/logos/gctLogo.jpg';
import goldespLogo from '../../assets/portfolio/logos/goldespLogo.jpg';

class Portfolio extends React.Component {

    //TODO:
    //Maybe save this for last? It's likely to be very time-consuming
    //Logos for all applications
    //Add Portfolio 2.0
    //I want squares showing images of all of my applications.
    //I want some sort of time-based animation with the squares.
    //When I hover, i want a semi-ransparent backdrop
    //and the name of the application along with the technologies it uses.
    //When clicked, I want the square to expand to show the full detail pane from the original portfolio.
    //All other squares should rearrange themselves.
    //An X should appear, or some indication to close the expanded section
    //All other squares should rearrange back to normal.

    render() {
        return(

            <section className={classes.Main}>
                <section className={classes.ProjectDiv}>
                    <img className={classes.Project} src={goldespLogo} alt={"GOLDesp"} />
                    <img className={classes.Project} src={gctLogo} alt={"GOLDesp Config Tool"} />
                    <img className={classes.Project} src={acidRainLogo} alt={"Acid Rain"} />
                    <img className={classes.Project} src={scoreboardConfigLogo} alt={"AST Scoreboard"} />
                    <img className={classes.Project} src={hikersWatchLogo} alt={"Hiker's Watch"} />
                    <img className={classes.Project} src={shuckShareLogo} alt={"Shuck & Share"} />
                    <img className={classes.Project} src={authTemplateLogo} alt={"Authentication Template"} />
                    <img className={classes.Project} src={burgerBuilderLogo} alt={"Burger Builder"} />
                    <img className={classes.Project} src={funCalcLogo} alt={"FunCalc"} />
                </section>
            </section>

        );
    }
}

export default (Portfolio);