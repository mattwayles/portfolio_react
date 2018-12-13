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
import GoldESP from "../../components/Projects/Project/GoldESP";
import Auxil from "../../components/Auxil";
import GCT from "../../components/Projects/Project/GCT";
import AcidRain from "../../components/Projects/Project/AcidRain";
import ScoreboardConfig from "../../components/Projects/Project/ScoreboardConfig";
import HikersWatch from "../../components/Projects/Project/HikersWatch";
import ShuckShare from "../../components/Projects/Project/ShuckShare";
import AuthTemplate from "../../components/Projects/Project/AuthTemplate";
import BurgerBuilder from "../../components/Projects/Project/BurgerBuilder";
import FunCalc from "../../components/Projects/Project/FunCalc";

const SHOW_PORTFOLIO_HEIGHT = 120;

/**
 * React-Pose poses for Portfolio projects [hidden, visible] (4 variations)
 */
const LeftProject = posed.section({
    hidden: { opacity: 0, x: "-10vw"},
    visible: { opacity: 1, x: 0, transition: {ease: 'easeIn', duration: 1000}},
});
const TopProject = posed.section({
    hidden: { opacity: 0, y: "-20vh"},
    visible: { opacity: 1, y: 0, transition: {ease: 'easeIn', duration: 1000}},
});
const BottomProject = posed.section({
    hidden: { opacity: 0, y: "20vh"},
    visible: { opacity: 1, y: 0, transition: {ease: 'easeIn', duration: 1000}},
});
const RightProject = posed.section({
    hidden: { opacity: 0, x: "10vw"},
    visible: { opacity: 1, x: 0, transition: {ease: 'easeIn', duration: 1000}},
});

class Portfolio extends React.Component {

    //TODO:
    // Split GOLD / GCT Projects into Front-end and Back-end
    // Logos for all applications
    //Add Portfolio 2.0.

    state = {
      projects: {
          closing: false,
          gold: { display: false, expanded: false, closing: false},
          gct: { display: false, expanded: false, closing: false},
          acidRain: { display: false, expanded: false, closing: false},
          scoreboardConfig: {display: false, expanded: false, closing: false},
          hikersWatch: {display: false, expanded: false, closing: false},
          shuckShare: {display: false, expanded: false, closing: false},
          authTemplate: {display: false, expanded: false, closing: false},
          burgerBuilder: {display: false, expanded: false, closing: false},
          funCalc: {display: false, expanded: false, closing: false}
      }
    };

    /**
     * Make projects visible as they are scrolled to
     */
    componentDidUpdate() {
        if (this.props.scrollPercent > SHOW_PORTFOLIO_HEIGHT) {
            if (!this.state.projects.gold.display) {
                this.setState({projects: {...this.state.projects, gold: {display: true,  expanded: false, closing: false}}});
                setTimeout(() => this.setState({projects: {...this.state.projects, gct: {display: true,  expanded: false, closing: false}}}), 200);
                setTimeout(() => this.setState({projects: {...this.state.projects, acidRain: {display: true,  expanded: false, closing: false}}}), 400);
                setTimeout(() => this.setState({projects: {...this.state.projects, scoreboardConfig: {display: true,  expanded: false, closing: false}}}), 600);
                setTimeout(() => this.setState({projects: {...this.state.projects, hikersWatch: {display: true,  expanded: false, closing: false}}}), 800);
                setTimeout(() => this.setState({projects: {...this.state.projects, shuckShare: {display: true,  expanded: false, closing: false}}}), 1000);
                setTimeout(() => this.setState({projects: {...this.state.projects, authTemplate: {display: true,  expanded: false, closing: false}}}), 1200);
                setTimeout(() => this.setState({projects: {...this.state.projects, burgerBuilder: {display: true,  expanded: false, closing: false}}}), 1400);
                setTimeout(() => this.setState({projects: {...this.state.projects, funCalc: {display: true,  expanded: false, closing: false}}}), 1600);
            }
        }
        //Remove from DOM when user scrolls up
        else if (this.props.scrollPercent < SHOW_PORTFOLIO_HEIGHT && this.state.projects.display) {
            this.setState({ projects: {
                    gold: { display: false, expanded: false, closing: false},
                    gct: { display: false, expanded: false, closing: false},
                    acidRain: { display: false, expanded: false, closing: false},
                    scoreboardConfig: {display: false, expanded: false, closing: false},
                    hikersWatch: {display: false, expanded: false, closing: false},
                    shuckShare: {display: false, expanded: false, closing: false},
                    authTemplate: {display: false, expanded: false, closing: false},
                    burgerBuilder: {display: false, expanded: false, closing: false},
                    funCalc: {display: false, expanded: false, closing: false}
                } });
        }
    }

    /**
     * On project click, expand the section to display project details
     * @param proj  The project to expand
     */
    displayFullProject = (proj) => {
        this.setState({ projects: {...this.state.projects, [proj]: {display: true, expanded: true, closing: false}}});
    };

    /**
     * On project collapse, flatten the section to return to the thumbnail
     * @param proj   The project to collapse
     */
    exitFullProject = (proj) => {
        this.setState({  projects: {...this.state.projects, [proj]: {display: true, expanded: true, closing: true}} });
        setTimeout(() => this.setState({ projects: {...this.state.projects, [proj]: {display: true, expanded: false, closing: false}} }), 3000);
    };


    render() {
        const {projects} = this.state;

        return(
            <section className={classes.Main}>
                <section className={classes.ProjectDiv}>

                    <LeftProject
                        pose={projects.gold.display ?  "visible" : "hidden" }
                        className={projects.gold.closing ? classes.Closing : projects.gold.expanded ? classes.ExpandedProject : classes.Project}>
                        {projects.gold.expanded ? <GoldESP exit={this.exitFullProject} /> :
                            <Auxil>
                                <img className={classes.Project} src={goldLogo} alt={"GOLDesp"} />
                                <HoveredLogo projName="gold" title={"GOLDesp"} tech={["Java", "JavaScript"]} clicked={this.displayFullProject} />
                            </Auxil>
                        }
                    </LeftProject>

                    <TopProject
                        pose={projects.gct.display ?  "visible" : "hidden" }
                        className={projects.gct.closing ? classes.Closing : projects.gct.expanded ? classes.ExpandedProject : classes.Project}>
                        {projects.gct.expanded ? <GCT exit={this.exitFullProject} /> :
                            <Auxil>
                                <img className={classes.Project} src={gctLogo} alt={"GOLDesp Config Tool"} />
                                <HoveredLogo projName="gct" title={"GOLDesp Config Tool"} tech={["Java", "React"]} clicked={this.displayFullProject} />
                            </Auxil>
                        }
                    </TopProject>

                    <BottomProject
                        pose={projects.acidRain.display ?  "visible" : "hidden" }
                        className={projects.acidRain.closing ? classes.Closing : projects.acidRain.expanded ? classes.ExpandedProject : classes.Project}>
                        {projects.acidRain.expanded ? <AcidRain exit={this.exitFullProject} /> :
                            <Auxil>
                                <img className={classes.Project} src={acidRainLogo} alt={"Acid Rain"} />
                                <HoveredLogo projName="acidRain" title={"Acid Rain"} tech={["Android", "Java", "LibGDX"]} clicked={this.displayFullProject} />
                            </Auxil>
                        }
                    </BottomProject>

                    <TopProject
                        pose={projects.scoreboardConfig.display ?  "visible" : "hidden" }
                        className={projects.scoreboardConfig.closing ? classes.Closing : projects.scoreboardConfig.expanded ? classes.ExpandedProject : classes.Project}>
                        {projects.scoreboardConfig.expanded ? <ScoreboardConfig exit={this.exitFullProject} /> :
                            <Auxil>
                                <img className={classes.Project} src={scoreboardConfigLogo} alt={"Scoreboard Config"} />
                                <HoveredLogo projName="scoreboardConfig" title={"AST Scoreboard Configuration"} tech={["Android", "Java"]} clicked={this.displayFullProject} />
                            </Auxil>
                        }
                    </TopProject>

                    <RightProject
                        pose={projects.hikersWatch.display ?  "visible" : "hidden" }
                        className={projects.hikersWatch.closing ? classes.Closing : projects.hikersWatch.expanded ? classes.ExpandedProject : classes.Project}>
                        {projects.hikersWatch.expanded ? <HikersWatch exit={this.exitFullProject} /> :
                            <Auxil>
                                <img className={classes.Project} src={hikersWatchLogo} alt={"Hiker's Watch"} />
                                <HoveredLogo projName="hikersWatch" title={"Hiker's Watch"} tech={["Android", "Java"]} clicked={this.displayFullProject} />
                            </Auxil>
                        }
                    </RightProject>

                    <LeftProject
                        pose={projects.shuckShare.display ?  "visible" : "hidden" }
                        className={projects.shuckShare.closing ? classes.Closing : projects.shuckShare.expanded ? classes.ExpandedProject : classes.Project}>
                        {projects.shuckShare.expanded ? <ShuckShare exit={this.exitFullProject} /> :
                            <Auxil>
                                <img className={classes.Project} src={shuckShareLogo} alt={"Shuck & Share"} />
                                <HoveredLogo projName="shuckShare" title={"Shuck & Share"} tech={["JavaScript", "Bootstrap", "HTML/CSS"]} clicked={this.displayFullProject} />
                            </Auxil>
                        }
                    </LeftProject>

                    <BottomProject
                        pose={projects.authTemplate.display ?  "visible" : "hidden" }
                        className={projects.authTemplate.closing ? classes.Closing : projects.authTemplate.expanded ? classes.ExpandedProject : classes.Project}>
                        {projects.authTemplate.expanded ? <AuthTemplate exit={this.exitFullProject} /> :
                            <Auxil>
                                <img className={classes.Project} src={authTemplateLogo} alt={"Authentication Template"} />
                                <HoveredLogo projName="authTemplate" title={"Authentication Template"} tech={["React"]} clicked={this.displayFullProject} />
                            </Auxil>
                        }
                    </BottomProject>

                    <TopProject
                        pose={projects.burgerBuilder.display ?  "visible" : "hidden" }
                        className={projects.burgerBuilder.closing ? classes.Closing : projects.burgerBuilder.expanded ? classes.ExpandedProject : classes.Project}>
                        {projects.burgerBuilder.expanded ? <BurgerBuilder exit={this.exitFullProject} /> :
                            <Auxil>
                                <img className={classes.Project} src={burgerBuilderLogo} alt={"Burger Builder"} />
                                <HoveredLogo projName="burgerBuilder" title={"Burger Builder"} tech={["React"]} clicked={this.displayFullProject} />
                            </Auxil>
                        }
                    </TopProject>

                    <BottomProject
                        pose={projects.funCalc.display ?  "visible" : "hidden" }
                        className={projects.funCalc.closing ? classes.Closing : projects.funCalc.expanded ? classes.ExpandedProject : classes.Project}>
                        {projects.funCalc.expanded ? <FunCalc exit={this.exitFullProject} /> :
                            <Auxil>
                                <img className={classes.Project} src={funCalcLogo} alt={"FunCalc"} />
                                <HoveredLogo projName="funCalc" title={"FunCalc"} tech={["JavaScript", "HTML/CSS"]} clicked={this.displayFullProject} />
                            </Auxil>
                        }
                    </BottomProject>
                </section>
            </section>

        );
    }
}

export default (Portfolio);