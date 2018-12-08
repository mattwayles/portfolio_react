import React from 'react';
import classes from './Portfolio.css';
import acidRainLogo from '../../assets/portfolio/web/acidRainLogo.png';
import scoreboardConfigLogo from '../../assets/portfolio/web/scoreboardConfigLogo.jpg';
import hikersWatchLogo from '../../assets/portfolio/web/hikersWatchLogo.jpg';

class Portfolio extends React.Component {

    //TODO:
    //Maybe save this for last? It's likely to be very time-consuming
    //Headers or no headers? 'Tis the question
    //Fix AcidRain logo. Put the words against a stormy background
    //Logos for all applications
    //I want some sort of animation on all labels
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
                {/* <p className={classes.Header}><em>Mobile</em></p> */}
                <section className={classes.ProjectDiv}>
                    <img className={classes.Project} src={acidRainLogo} alt={"Acid Rain"} />
                    <img className={classes.Project} src={scoreboardConfigLogo} alt={"AST Scoreboard"} />
                    <img className={classes.Project} src={hikersWatchLogo} alt={"Hiker's Watch"} />
                </section>
            </section>

        );
    }
}

export default (Portfolio);