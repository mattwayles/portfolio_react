import React from 'react';
import posed from 'react-pose';
import classes from './Portfolio.css';
import acidRainLogo from '../../assets/portfolio/logos/acidRainLogo.jpg';
import scoreboardConfigLogo from '../../assets/portfolio/logos/scoreboardConfigLogo.jpg';
import hikersWatchLogo from '../../assets/portfolio/logos/hikersWatchLogo.jpg';
import shuckShareLogo from '../../assets/portfolio/logos/shuckShareLogo.jpg';
import authTemplateLogo from '../../assets/portfolio/logos/authTemplateLogo.png';
import burgerBuilderLogo from '../../assets/portfolio/logos/burgerBuilderLogo.jpg';
import funCalcLogo from '../../assets/portfolio/logos/funCalcLogo.jpg';
import gctLogo from '../../assets/portfolio/logos/gctLogo.jpg';
import goldLogo from '../../assets/portfolio/logos/goldLogo.jpg';
import HoveredLogo from "../../components/Projects/HoveredLogo/HoveredLogo";
import GoldESP from "../../components/Projects/JavaProjects/GoldESP";
import Auxil from "../../hoc/Auxil";

const SHOW_PORTFOLIO_HEIGHT = 120;
const LeftProject = posed.section({
    hidden: { opacity: 0, x: "-20vw"},
    visible: { opacity: 1, x: 0, transition: {ease: 'easeIn', duration: 1000}},
    expand: { width: '80vw', height: '80vh', transition: {ease: 'easeIn', duration: 1000} }
});
const TopProject = posed.img({
    hidden: { opacity: 0, y: "-20vh"},
    visible: { opacity: 1, y: 0, transition: {ease: 'easeIn', duration: 1000}},
});
const BottomProject = posed.img({
    hidden: { opacity: 0, y: "20vh"},
    visible: { opacity: 1, y: 0, transition: {ease: 'easeIn', duration: 1000}},
});
const RightProject = posed.img({
    hidden: { opacity: 0, x: "20vw"},
    visible: { opacity: 1, x: 0, transition: {ease: 'easeIn', duration: 1000}},
});

class Portfolio extends React.Component {

    //TODO:
    //Clean up EXPAND and implement FLATTEN
    // Logos for all applications
    //Transition on down arrow hover
    //Transition on click, make div expand and slowly fade to details. Needs to look like one cohesive unit
    //Clean up the full project views. Yuck!
    //Add Portfolio 2.0.

    state = {
      projects: {
          gold: { display: false, expanded: false},
          gct: { display: false, expanded: false},
          acidRain: { display: false, expanded: false},
          scoreboardConfig: {display: false, expanded: false},
          hikersWatch: {display: false, expanded: false},
          shuckShare: {display: false, expanded: false},
          authTemplate: {display: false, expanded: false},
          burgerBuilder: {display: false, expanded: false},
          funCalc: {display: false, expanded: false}
      }
    };
    
    componentDidUpdate() {
        if (this.props.scrollPercent > SHOW_PORTFOLIO_HEIGHT) {
            if (!this.state.projects.gold.display) {
                this.setState({projects: {...this.state.projects, gold: {display: true,  expanded: false}}});
                setTimeout(() => this.setState({projects: {...this.state.projects, gct: {display: true,  expanded: false}}}), 200);
                setTimeout(() => this.setState({projects: {...this.state.projects, acidRain: {display: true,  expanded: false}}}), 400);
                setTimeout(() => this.setState({projects: {...this.state.projects, scoreboardConfig: {display: true,  expanded: false}}}), 600);
                setTimeout(() => this.setState({projects: {...this.state.projects, hikersWatch: {display: true,  expanded: false}}}), 800);
                setTimeout(() => this.setState({projects: {...this.state.projects, shuckShare: {display: true,  expanded: false}}}), 1000);
                setTimeout(() => this.setState({projects: {...this.state.projects, authTemplate: {display: true,  expanded: false}}}), 1200);
                setTimeout(() => this.setState({projects: {...this.state.projects, burgerBuilder: {display: true,  expanded: false}}}), 1400);
                setTimeout(() => this.setState({projects: {...this.state.projects, funCalc: {display: true,  expanded: false}}}), 1600);
            }
        }
        else if (this.props.scrollPercent < SHOW_PORTFOLIO_HEIGHT && this.state.projects.display) {
            this.setState({ projects: {
                    gold: { display: false, expanded: false},
                    gct: { display: false, expanded: false},
                    acidRain: { display: false, expanded: false},
                    scoreboardConfig: {display: false, expanded: false},
                    hikersWatch: {display: false, expanded: false},
                    shuckShare: {display: false, expanded: false},
                    authTemplate: {display: false, expanded: false},
                    burgerBuilder: {display: false, expanded: false},
                    funCalc: {display: false, expanded: false}
                } });
        }
    }
    displayFullProject = (proj) => {
        this.setState({ projects: {...this.state.projects, [proj]: {display: true, expanded: true}}});
    };

    exitFullProject = (proj) => {
        this.setState({ projects: {...this.state.projects, [proj]: {display: true, expanded: false}}});
    };

    render() {
        const {projects} = this.state;

        return(
            <section className={classes.Main}>
                <section className={classes.ProjectDiv}>
                    <LeftProject pose={projects.gold.display ?  "visible" : "hidden" } className={projects.gold.expanded ? classes.ExpandedProject : classes.Project}>
                        {projects.gold.expanded ? <GoldESP exit={this.exitFullProject} /> :
                            <Auxil><img className={classes.Project} src={goldLogo} alt={"GOLDesp"} />
                                <HoveredLogo projName="gold" title={"GOLDesp"} tech={["Java"]} clicked={this.displayFullProject} /></Auxil>}
                    </LeftProject>
                    <TopProject pose={projects.gct.display ? "visible" : "hidden" } className={classes.Project} src={gctLogo} alt={"GOLDesp Config Tool"} />
                    <BottomProject pose={projects.acidRain.display ? "visible" : "hidden" } className={classes.Project} src={acidRainLogo} alt={"Acid Rain"} />
                    <TopProject pose={projects.scoreboardConfig.display ? "visible" : "hidden" } className={classes.Project} src={scoreboardConfigLogo} alt={"AST Scoreboard"} />
                    <RightProject pose={projects.hikersWatch.display ? "visible" : "hidden" } className={classes.Project} src={hikersWatchLogo} alt={"Hiker's Watch"} />
                    <LeftProject pose={projects.shuckShare.display ? "visible" : "hidden" } className={classes.Project} src={shuckShareLogo} alt={"Shuck & Share"} />
                    <BottomProject pose={projects.authTemplate.display ? "visible" : "hidden" } className={classes.Project} src={authTemplateLogo} alt={"Authentication Template"} />
                    <TopProject pose={projects.burgerBuilder.display ? "visible" : "hidden" } className={classes.Project} src={burgerBuilderLogo} alt={"Burger Builder"} />
                    <BottomProject pose={projects.funCalc.display ? "visible" : "hidden" } className={classes.Project} src={funCalcLogo} alt={"FunCalc"} />
                    <RightProject pose={projects.funCalc.display ? "visible" : "hidden" } className={classes.Project} src={authTemplateLogo} alt={"Authentication Template"} />
                    <LeftProject pose={projects.funCalc.display ? "visible" : "hidden" } className={classes.Project} src={authTemplateLogo} alt={"Authentication Template"} />
                    <LeftProject pose={projects.funCalc.display ? "visible" : "hidden" } className={classes.Project} src={authTemplateLogo} alt={"Authentication Template"} />
                    <LeftProject pose={projects.funCalc.display ? "visible" : "hidden" } className={classes.Project} src={authTemplateLogo} alt={"Authentication Template"} />
                    <LeftProject pose={projects.funCalc.display ? "visible" : "hidden" } className={classes.Project} src={authTemplateLogo} alt={"Authentication Template"} />
                    <LeftProject pose={projects.funCalc.display ? "visible" : "hidden" } className={classes.Project} src={authTemplateLogo} alt={"Authentication Template"} />
                    <LeftProject pose={projects.funCalc.display ? "visible" : "hidden" } className={classes.Project} src={authTemplateLogo} alt={"Authentication Template"} />
                    <LeftProject pose={projects.funCalc.display ? "visible" : "hidden" } className={classes.Project} src={authTemplateLogo} alt={"Authentication Template"} />
                    <LeftProject pose={projects.funCalc.display ? "visible" : "hidden" } className={classes.Project} src={authTemplateLogo} alt={"Authentication Template"} />
                    <LeftProject pose={projects.funCalc.display ? "visible" : "hidden" } className={classes.Project} src={authTemplateLogo} alt={"Authentication Template"} />
                    <LeftProject pose={projects.funCalc.display ? "visible" : "hidden" } className={classes.Project} src={authTemplateLogo} alt={"Authentication Template"} />
                    <LeftProject pose={projects.funCalc.display ? "visible" : "hidden" } className={classes.Project} src={authTemplateLogo} alt={"Authentication Template"} />
                    <LeftProject pose={projects.funCalc.display ? "visible" : "hidden" } className={classes.Project} src={authTemplateLogo} alt={"Authentication Template"} />
                    <LeftProject pose={projects.funCalc.display ? "visible" : "hidden" } className={classes.Project} src={authTemplateLogo} alt={"Authentication Template"} />
                </section>
            </section>

        );
    }
}

export default (Portfolio);