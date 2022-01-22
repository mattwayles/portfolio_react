import React from 'react';
import posed from 'react-pose';
import classes from './Projects.css';
import acidRainLogo from '../../../assets/portfolio/logos/acidRainLogo.jpg';
import scoreboardLogo from '../../../assets/portfolio/logos/scoreboardLogo.jpg';
import scoreboardConfigLogo from '../../../assets/portfolio/logos/scoreboardConfigLogo.jpg';
import hikersWatchLogo from '../../../assets/portfolio/logos/hikersWatchLogo.jpg';
import shuckShareLogo from '../../../assets/portfolio/logos/shuckShareLogo.jpg';
import authTemplateLogo from '../../../assets/portfolio/logos/authTemplateLogo.png';
import burgerBuilderLogo from '../../../assets/portfolio/logos/burgerBuilderLogo.jpg';
import expireGuardLogo from '../../../assets/portfolio/logos/expireGuardLogo.jpg';
import funCalcLogo from '../../../assets/portfolio/logos/funCalcLogo.jpg';
import gctLogo from '../../../assets/portfolio/logos/gctLogo.jpg';
import gctUiLogo from '../../../assets/portfolio/logos/gctUiLogo.png';
import goldLogo from '../../../assets/portfolio/logos/goldLogo.jpg';
import goldUiLogo from '../../../assets/portfolio/logos/goldUiLogo.jpg';
import liquidLabReactLogo from '../../../assets/portfolio/logos/liquidLabReactLogo.jpg';
import liquidLabJavaLogo from '../../../assets/portfolio/logos/liquidLabJavaLogo.jpg';
import localWeatherLogo from '../../../assets/portfolio/logos/localWeather.jpg';
import motivationMachineLogo from '../../../assets/portfolio/logos/motivationMachine.jpg';
import shutdownLogo from '../../../assets/portfolio/logos/shutdownLogo.jpg';
import elbuLogo from '../../../assets/portfolio/logos/elbuLogo.jpg';
import twitchStreamLogo from '../../../assets/portfolio/logos/twitchStreamLogo.jpg';
import updatePlusConsoleLogo from '../../../assets/portfolio/logos/updatePlusConsole.jpg';
import updatePlusManagerLogo from '../../../assets/portfolio/logos/updatePlusManager.jpg';
import versioncheckLogo from '../../../assets/portfolio/logos/versioncheckLogo.jpg';
import wikiViewerLogo from '../../../assets/portfolio/logos/wikiViewerLogo.png';
import yahtzeeLogo from '../../../assets/portfolio/logos/yahtzeeLogo.jpg';
import deadCodeLogo from '../../../assets/portfolio/logos/deadCodeLogo.png';
import remindByPiLogo from '../../../assets/portfolio/logos/remindByPiLogo.png';
import mediaMarqueeLogo from '../../../assets/portfolio/logos/mediaMarqueeLogo.jpg';
import milsSetupUiLogo from '../../../assets/portfolio/logos/milsSetupUi.jpg';
import mobile40apiLogo from '../../../assets/portfolio/logos/mobile40api.jpg';
import HoveredLogo from "../../../components/Projects/HoveredLogo/HoveredLogo";
import MilsSetupUi from "../../../components/Projects/Project/MilsSetupUi";
import Mobile40Api from "../../../components/Projects/Project/Mobile40Api";
import GoldESP from "../../../components/Projects/Project/GoldESP";
import GCT from "../../../components/Projects/Project/GCT";
import AcidRain from "../../../components/Projects/Project/AcidRain";
import ScoreboardConfig from "../../../components/Projects/Project/ScoreboardConfig";
import HikersWatch from "../../../components/Projects/Project/HikersWatch";
import RemindByPi from "../../../components/Projects/Project/RemindByPi";
import DeadCode from "../../../components/Projects/Project/DeadCode";
import ShuckShare from "../../../components/Projects/Project/ShuckShare";
import AuthTemplate from "../../../components/Projects/Project/AuthTemplate";
import BurgerBuilder from "../../../components/Projects/Project/BurgerBuilder";
import FunCalc from "../../../components/Projects/Project/FunCalc";
import GoldESPUI from "../../../components/Projects/Project/GoldESPUI";
import GCTUI from "../../../components/Projects/Project/GCTUI";
import LiquidLabReact from "../../../components/Projects/Project/LiquidLabReact";
import LiquidLab from "../../../components/Projects/Project/LiquidLab";
import MediaMarquee from "../../../components/Projects/Project/MediaMarquee";
import Scoreboard from "../../../components/Projects/Project/Scoreboard";
import ShutdownInitiator from "../../../components/Projects/Project/ShutdownInitiator";
import EventLogBackup from "../../../components/Projects/Project/EventLogBackup";
import VersionCheck from "../../../components/Projects/Project/VersionCheck";
import ExpireGuard from "../../../components/Projects/Project/ExpireGuard";
import UpdatePlusConsole from "../../../components/Projects/Project/UpdatePlusConsole";
import UpdatePlusManager from "../../../components/Projects/Project/UpdatePlusManager";
import MotivationMachine from "../../../components/Projects/Project/MotivationMachine";
import LocalWeather from "../../../components/Projects/Project/LocalWeather";
import TwitchStream from "../../../components/Projects/Project/TwitchStream";
import WikiView from "../../../components/Projects/Project/WikiView";
import Yahtzee from "../../../components/Projects/Project/Yahtzee";

const SHOW_PORTFOLIO_HEIGHT = 120;

/**
 * React-Pose poses for Portfolio projects [hidden, visible] (4 variations)
 */
const BottomProject = posed.section({
    hidden: { opacity: 0, y: "50vh"},
    visible: { opacity: 1, y: 0, transition: {ease: 'easeIn', duration: 1000}}
});

class Projects extends React.Component {
    state = {
        closing: false,
        populated: false,
        renderGold: true
    };

    componentWillMount() {
        this.setInitState();
    }

    /**
     * Make projects visible as they are scrolled to
     */
    componentDidUpdate() {
        if (this.props.scrollPercent > SHOW_PORTFOLIO_HEIGHT) {
            if (!this.state.populated) {
                this.setState({ populated: true, projects: {...this.state.projects, milsSetupUi: {display: true, expanded: false}}});
                setTimeout(() => this.setState({projects: {...this.state.projects, mobile40api: {display: true, expanded: false}}}), 200);
                setTimeout(() => this.setState({projects: {...this.state.projects, gold: {display: true, expanded: false}}}), 200);
                setTimeout(() => this.setState({projects: {...this.state.projects, goldui: {display: true,  expanded: false}}}), 200);
                setTimeout(() => this.setState({projects: {...this.state.projects, gct: {display: true,  expanded: false}}}), 400);
                setTimeout(() => this.setState({projects: {...this.state.projects, gctui: {display: true,  expanded: false}}}), 600);
                setTimeout(() => this.setState({projects: {...this.state.projects, liquidLabReact: {display: true,  expanded: false}}}), 800);
                setTimeout(() => this.setState({projects: {...this.state.projects, liquidLabJava: {display: true,  expanded: false}}}), 1000);
                setTimeout(() => this.setState({projects: {...this.state.projects, scoreboard: {display: true,  expanded: false}}}), 1200);
                setTimeout(() => this.setState({projects: {...this.state.projects, scoreboardConfig: {display: true,  expanded: false}}}), 1400);
                setTimeout(() => this.setState({projects: {...this.state.projects, hikersWatch: {display: true,  expanded: false}}}), 1600);
                setTimeout(() => this.setState({projects: {...this.state.projects, acidRain: {display: true,  expanded: false}}}), 1800);
                setTimeout(() => this.setState({projects: {...this.state.projects, mediaMarquee: {display: true,  expanded: false}}}), 2000);
                setTimeout(() => this.setState({projects: {...this.state.projects, remindByPi: {display: true,  expanded: false}}}), 2200);
                setTimeout(() => this.setState({projects: {...this.state.projects, shuckShare: {display: true,  expanded: false}}}), 2400);
                setTimeout(() => this.setState({projects: {...this.state.projects, elbu: {display: true,  expanded: false}}}), 2600);
                setTimeout(() => this.setState({projects: {...this.state.projects, authTemplate: {display: true,  expanded: false}}}), 2800);
                setTimeout(() => this.setState({projects: {...this.state.projects, shutdown: {display: true,  expanded: false}}}), 3000);
                setTimeout(() => this.setState({projects: {...this.state.projects, deadCode: {display: true,  expanded: false}}}), 3200);
                setTimeout(() => this.setState({projects: {...this.state.projects, versionCheck: {display: true,  expanded: false}}}), 3400);
                setTimeout(() => this.setState({projects: {...this.state.projects, expireGuard: {display: true,  expanded: false}}}), 3600);
                setTimeout(() => this.setState({projects: {...this.state.projects, updatePlusConsole: {display: true,  expanded: false}}}), 3800);
                setTimeout(() => this.setState({projects: {...this.state.projects, updatePlusManager: {display: true,  expanded: false}}}), 4000);
                setTimeout(() => this.setState({projects: {...this.state.projects, motivationMachine: {display: true,  expanded: false}}}), 4200);
                setTimeout(() => this.setState({projects: {...this.state.projects, localWeather: {display: true,  expanded: false}}}), 4400);
                setTimeout(() => this.setState({projects: {...this.state.projects, twitchStream: {display: true,  expanded: false}}}), 4600);
                setTimeout(() => this.setState({projects: {...this.state.projects, wikiViewer: {display: true,  expanded: false}}}), 4800);
                setTimeout(() => this.setState({projects: {...this.state.projects, burgerBuilder: {display: true,  expanded: false}}}), 5000);
                setTimeout(() => this.setState({projects: {...this.state.projects, funCalc: {display: true,  expanded: false}}}), 5200);
                setTimeout(() => this.setState({projects: {...this.state.projects, yahtzee: {display: true,  expanded: false}}}), 5400);
            }
        }
        //Remove from DOM when user scrolls up
        else if (this.props.scrollPercent < SHOW_PORTFOLIO_HEIGHT && this.state.projects.display) {
            this.setInitState();
        }
        else {

        }
    }

    /**
     * Create initial state for each project
     */
    setInitState = () => {
        this.setState({ projects: {
            acidRain: { display: false, expanded: false},
            authTemplate: {display: false, expanded: false},
            burgerBuilder: {display: false, expanded: false},
            deadCode: {display: false, expanded: false},
            elbu: {display: false, expanded: false},
            expireGuard: {display: false, expanded: false},
            funCalc: {display: false, expanded: false},
            gct: { display: false, expanded: false},
            gctui: { display: false, expanded: false},
            gold: { display: false, expanded: false},
            goldui: { display: false, expanded: false},
            hikersWatch: {display: false, expanded: false},
            liquidLabReact: { display: false, expanded: false},
            liquidLabJava: { display: false, expanded: false},
            localWeather: { display: false, expanded: false},
            mediaMarquee: { display: false, expanded: false},
            milsSetupUi: { display: false, expanded: false},
            mobile40api: { display: false, expanded: false},
            motivationMachine: { display: false, expanded: false},
            remindByPi: { display: false, expanded: false},
            scoreboard: {display: false, expanded: false},
            scoreboardConfig: {display: false, expanded: false},
            shuckShare: {display: false, expanded: false},
            shutdown: {display: false, expanded: false},
            twitchStream: {display: false, expanded: false},
            updatePlusConsole: {display: false, expanded: false},
            updatePlusManager: {display: false, expanded: false},
            versionCheck: {display: false, expanded: false},
            wikiViewer: {display: false, expanded: false},
            yahtzee: {display: false, expanded: false}
        } });
    };

    /**
     * On project click, expand the section to display project details
     * @param proj  The project to expand
     */
    displayFullProject = (proj) => {
        this.setState({ projects: {...this.state.projects, [proj]: {display: true, expanded: true}}});
    };

    /**
     * On project collapse, flatten the section to return to the thumbnail
     * @param proj   The project to collapse
     */
    exitFullProject = (proj) => {
        this.setState({  closing: true });
        setTimeout(() => this.setState({ closing: false, projects: {...this.state.projects, [proj]: {display: true, expanded: false}}}), 800);
    };


    render() {
        const {projects, closing} = this.state;
        const {filters} = this.props;

        //Set filter lists for each project
        let projectsToRender = {
            milsSetupUi: ['team', 'professional', 'react', 'graphql'],
            mobile40api: ['team', 'professional', 'csharp', 'graphql'],
            gold: ['team', 'professional', 'java', 'spring'],
            goldui: ['team', 'professional', 'java', 'javascript'],
            gct: ['team', 'professional', 'java', 'spring'],
            gctui: ['team', 'professional', 'react'],
            liquidLabReact: ['solo', 'recreational', 'react', 'openSource'],
            liquidLabJava: ['solo', 'recreational', 'java', 'javafx', 'openSource'],
            scoreboard: ['solo', 'freelance', 'java', 'javafx', 'openSource'],
            scoreboardConfig: ['solo', 'freelance', 'android', 'java', 'openSource'],
            hikersWatch: ['solo', 'recreational', 'java', 'android', 'openSource'],
            acidRain: ['solo', 'recreational', 'android', 'java', 'libgdx', 'openSource'],
            mediaMarquee: ['solo', 'recreational', 'python', 'openSource'],
            remindByPi: ['solo', 'recreational', 'react', 'python', 'openSource'],
            shuckShare: ['solo', 'freelance', 'javascript', 'html'],
            authTemplate: ['solo', 'recreational', 'react', 'openSource'],
            elbu: ['solo', 'professional', 'autoit'],
            shutdown: ['solo', 'professional', 'csharp'],
            deadCode: ['solo', 'professional', 'java'],
            versionCheck: ['solo', 'professional', 'csharp'],
            expireGuard: ['solo', 'professional', 'csharp'],
            updatePlusConsole: ['team', 'professional', 'autoit'],
            updatePlusManager: ['team', 'professional', 'autoit'],
            motivationMachine: ['solo', 'educational', 'javascript', 'html', 'openSource'],
            localWeather: ['solo', 'educational', 'javascript', 'html', 'openSource'],
            twitchStream: ['solo', 'educational', 'javascript', 'html', 'openSource'],
            wikiViewer: ['solo', 'educational', 'javascript', 'html', 'openSource'],
            burgerBuilder: ['solo', 'educational', 'react', 'openSource'],
            funCalc: ['solo', 'educational', 'javascript', 'html', 'openSource'],
            yahtzee: ['solo', 'recreational', 'java', 'openSource']
        };

        //Remove project from render if filters don't match
        for (let i=0; i < Object.keys(projectsToRender).length; i++) {
            let project = Object.keys(projectsToRender)[i];
            let values = projectsToRender[project];
            for(let j in filters) {
                if (values && values.indexOf(filters[j]) < 0) {
                    delete projectsToRender[project];
                    --i;
                    break;
                }
            }
        }

        return(
            <section className={classes.Main}>
                <section className={classes.ProjectDiv}>
                    {Object.keys(projectsToRender).indexOf('milsSetupUi') >= 0 ? <BottomProject
                        pose={projects.milsSetupUi.display ?  "visible" : "hidden" }
                        className={classes.Project}>
                        {projects.milsSetupUi.expanded ? <section onClick={() => this.exitFullProject('milsSetupUi')} className={classes.Backdrop}>
                            <MilsSetupUi closing={closing} exit={this.exitFullProject} /></section> : null}
                        <img className={classes.Project} src={milsSetupUiLogo} alt={"MILS Setup UI"} />
                        <HoveredLogo projName="milsSetupUi" title={"MILS Setup (UI)"} tech={["React", "Redux", "GraphQL"]} clicked={this.displayFullProject} />
                    </BottomProject> : null}
                    {Object.keys(projectsToRender).indexOf('mobile40api') >= 0 ? <BottomProject
                        pose={projects.mobile40api.display ?  "visible" : "hidden" }
                        className={classes.Project}>
                        {projects.mobile40api.expanded ? <section onClick={() => this.exitFullProject('mobile40api')} className={classes.Backdrop}>
                            <Mobile40Api closing={closing} exit={this.exitFullProject} /></section> : null}
                        <img className={classes.Project} src={mobile40apiLogo} alt={"Mobile 4.0 API"} />
                        <HoveredLogo projName="mobile40api" title={"Mobile 4.0 API"} tech={["GraphQL", "C#"]} clicked={this.displayFullProject} />
                    </BottomProject> : null}
                    {Object.keys(projectsToRender).indexOf('gold') >= 0 ? <BottomProject
                        pose={projects.gold.display ?  "visible" : "hidden" }
                        className={classes.Project}>
                        {projects.gold.expanded ? <section onClick={() => this.exitFullProject('gold')} className={classes.Backdrop}>
                            <GoldESP closing={closing} exit={this.exitFullProject} /></section> : null}
                        <img className={classes.Project} src={goldLogo} alt={"GOLDesp Server"} />
                        <HoveredLogo projName="gold" title={"GOLDesp (Server)"} tech={["Java", "Spring"]} clicked={this.displayFullProject} />
                    </BottomProject> : null}
                    {Object.keys(projectsToRender).indexOf('goldui') >= 0 ? <BottomProject
                        pose={projects.goldui.display ?  "visible" : "hidden" }
                        className={classes.Project}>
                        {projects.goldui.expanded ? <section onClick={() => this.exitFullProject('goldui')} className={classes.Backdrop}>
                            <GoldESPUI closing={closing} exit={this.exitFullProject} /></section> : null}
                        <img className={classes.Project} src={goldUiLogo} alt={"GOLDesp UI"} />
                        <HoveredLogo projName="goldui" title={"GOLDesp (UI)"} tech={["Java", "JavaScript"]} clicked={this.displayFullProject} />
                    </BottomProject> : null}

                    {Object.keys(projectsToRender).indexOf('gct') >= 0 ? <BottomProject
                        pose={projects.gct.display ?  "visible" : "hidden" }
                        className={classes.Project}>
                        {projects.gct.expanded ?  <section onClick={() => this.exitFullProject('gct')} className={classes.Backdrop}>
                            <GCT closing={closing} exit={this.exitFullProject} /></section> : null}
                        <img className={classes.Project} src={gctLogo} alt={"GOLDesp Config Tool (Server)"} />
                        <HoveredLogo projName="gct" title={"GOLDesp Config Tool (Server)"} tech={["Java", "Spring"]} clicked={this.displayFullProject} />
                    </BottomProject> : null}

                    {Object.keys(projectsToRender).indexOf('gctui') >= 0 ? <BottomProject
                        pose={projects.gctui.display ?  "visible" : "hidden" }
                        className={classes.Project}>
                        {projects.gctui.expanded ?  <section onClick={() => this.exitFullProject('gctui')} className={classes.Backdrop}>
                            <GCTUI closing={closing} exit={this.exitFullProject} /></section> : null}
                        <img className={classes.Project} src={gctUiLogo} alt={"GOLDesp Config Tool (UI)"} />
                        <HoveredLogo projName="gctui" title={"GOLDesp Config Tool (UI)"} tech={["React", "Redux"]} clicked={this.displayFullProject} />
                    </BottomProject> : null}

                    {Object.keys(projectsToRender).indexOf('liquidLabReact') >= 0 ? <BottomProject
                        pose={projects.liquidLabReact.display ?  "visible" : "hidden" }
                        className={classes.Project}>
                        {projects.liquidLabReact.expanded ? <section onClick={() => this.exitFullProject('liquidLabReact')} className={classes.Backdrop}>
                            <LiquidLabReact closing={closing} exit={this.exitFullProject} /></section> : null}
                        <img className={classes.Project} src={liquidLabReactLogo} alt={"LiquidLab (React)"} />
                        <HoveredLogo projName="liquidLabReact" title={"LiquidLab (Web)"} tech={["React"]} clicked={this.displayFullProject} />
                    </BottomProject> : null}

                    {Object.keys(projectsToRender).indexOf('liquidLabJava') >= 0 ? <BottomProject
                        pose={projects.liquidLabJava.display ?  "visible" : "hidden" }
                        className={classes.Project}>
                        {projects.liquidLabJava.expanded ? <section onClick={() => this.exitFullProject('liquidLabJava')} className={classes.Backdrop}>
                            <LiquidLab closing={closing} exit={this.exitFullProject} /></section> : null}
                        <img className={classes.Project} src={liquidLabJavaLogo} alt={"LiquidLab (Java)"} />
                        <HoveredLogo projName="liquidLabJava" title={"LiquidLab (Native)"} tech={["JavaFX", "Java"]} clicked={this.displayFullProject} />
                    </BottomProject> : null}

                    {Object.keys(projectsToRender).indexOf('scoreboard') >= 0 ? <BottomProject
                        pose={projects.scoreboard.display ?  "visible" : "hidden" }
                        className={classes.Project}>
                        {projects.scoreboard.expanded ? <section onClick={() => this.exitFullProject('scoreboard')} className={classes.Backdrop}>
                            <Scoreboard closing={closing} exit={this.exitFullProject} /></section> : null}
                        <img className={classes.Project} src={scoreboardLogo} alt={"Scoreboard"} />
                        <HoveredLogo projName="scoreboard" title={"AST Scoreboard"} tech={["JavaFX", "Java"]} clicked={this.displayFullProject} />
                    </BottomProject> : null}


                    {Object.keys(projectsToRender).indexOf('scoreboardConfig') >= 0 ? <BottomProject
                        pose={projects.scoreboardConfig.display ?  "visible" : "hidden" }
                        className={classes.Project}>
                        {projects.scoreboardConfig.expanded ? <section onClick={() => this.exitFullProject('scoreboardConfig')} className={classes.Backdrop}>
                            <ScoreboardConfig closing={closing} exit={this.exitFullProject} /></section> : null}
                        <img className={classes.Project} src={scoreboardConfigLogo} alt={"Scoreboard Config"} />
                        <HoveredLogo projName="scoreboardConfig" title={"AST Scoreboard Configuration"} tech={["Android", "Java"]} clicked={this.displayFullProject} />
                    </BottomProject> : null}

                    {Object.keys(projectsToRender).indexOf('hikersWatch') >= 0 ? <BottomProject
                        pose={projects.hikersWatch.display ?  "visible" : "hidden" }
                        className={classes.Project}>
                        {projects.hikersWatch.expanded ? <section onClick={() => this.exitFullProject('hikersWatch')} className={classes.Backdrop}>
                            <HikersWatch closing={closing} exit={this.exitFullProject} /></section> : null}
                        <img className={classes.Project} src={hikersWatchLogo} alt={"Hiker's Watch"} />
                        <HoveredLogo projName="hikersWatch" title={"Hiker's Watch"} tech={["Android", "Java"]} clicked={this.displayFullProject} />
                    </BottomProject> : null}

                    {Object.keys(projectsToRender).indexOf('acidRain') >= 0 ? <BottomProject
                        pose={projects.acidRain.display ?  "visible" : "hidden" }
                        className={classes.Project}>
                        {projects.acidRain.expanded ?  <section onClick={() => this.exitFullProject('acidRain')} className={classes.Backdrop}>
                            <AcidRain closing={closing} exit={this.exitFullProject} /></section> : null}
                        <img className={classes.Project} src={acidRainLogo} alt={"Acid Rain"} />
                        <HoveredLogo projName="acidRain" title={"Acid Rain"} tech={["Android", "Java", "LibGDX"]} clicked={this.displayFullProject} />
                    </BottomProject> : null}

                    {Object.keys(projectsToRender).indexOf('mediaMarquee') >= 0 ? <BottomProject
                        pose={projects.mediaMarquee.display ?  "visible" : "hidden" }
                        className={classes.Project}>
                        {projects.mediaMarquee.expanded ? <section onClick={() => this.exitFullProject('mediaMarquee')} className={classes.Backdrop}>
                            <MediaMarquee closing={closing} exit={this.exitFullProject} /></section> : null}
                        <img className={classes.Project} src={mediaMarqueeLogo} alt={"Media Marquee"} />
                        <HoveredLogo projName="mediaMarquee" title={"Media Marquee"} tech={["Python"]} clicked={this.displayFullProject} />
                    </BottomProject> : null}

                    {Object.keys(projectsToRender).indexOf('remindByPi') >= 0 ? <BottomProject
                        pose={projects.remindByPi.display ?  "visible" : "hidden" }
                        className={classes.Project}>
                        {projects.remindByPi.expanded ? <section onClick={() => this.exitFullProject('mediaMarquee')} className={classes.Backdrop}>
                            <RemindByPi closing={closing} exit={this.exitFullProject} /></section> : null}
                        <img className={classes.Project} src={remindByPiLogo} alt={"Remind By Pi"} />
                        <HoveredLogo projName="remindByPi" title={"Remind By Pi"} tech={["React", "Python"]} clicked={this.displayFullProject} />
                    </BottomProject> : null}

                    {Object.keys(projectsToRender).indexOf('shuckShare') >= 0 ? <BottomProject
                        pose={projects.shuckShare.display ?  "visible" : "hidden" }
                        className={classes.Project}>
                        {projects.shuckShare.expanded ? <section onClick={() => this.exitFullProject('shuckShare')} className={classes.Backdrop}>
                            <ShuckShare closing={closing} exit={this.exitFullProject} /></section> : null}
                        <img className={classes.Project} src={shuckShareLogo} alt={"Shuck & Share"} />
                        <HoveredLogo projName="shuckShare" title={"Shuck & Share"} tech={["JavaScript", "HTML/CSS", "Bootstrap"]} clicked={this.displayFullProject} />
                    </BottomProject> : null}

                    {Object.keys(projectsToRender).indexOf('authTemplate') >= 0 ? <BottomProject
                        pose={projects.authTemplate.display ?  "visible" : "hidden" }
                        className={classes.Project}>
                        {projects.authTemplate.expanded ? <section onClick={() => this.exitFullProject('authTemplate')} className={classes.Backdrop}>
                            <AuthTemplate closing={closing} exit={this.exitFullProject} /></section> : null}
                        <img className={classes.Project} src={authTemplateLogo} alt={"Authentication Template"} />
                        <HoveredLogo projName="authTemplate" title={"Authentication Template"} tech={["React"]} clicked={this.displayFullProject} />
                    </BottomProject> : null}

                    {Object.keys(projectsToRender).indexOf('elbu') >= 0 ? <BottomProject
                        pose={projects.elbu.display ?  "visible" : "hidden" }
                        className={classes.Project}>
                        {projects.elbu.expanded ? <section onClick={() => this.exitFullProject('elbu')} className={classes.Backdrop}>
                            <EventLogBackup closing={closing} exit={this.exitFullProject} /></section> : null}
                        <img className={classes.Project} src={elbuLogo} alt={"Event Log Backup"} />
                        <HoveredLogo projName="elbu" title={"Event Log Backup Utility"} tech={["AutoIt"]} clicked={this.displayFullProject} />
                    </BottomProject> : null}

                    {Object.keys(projectsToRender).indexOf('shutdown') >= 0 ? <BottomProject
                        pose={projects.shutdown.display ?  "visible" : "hidden" }
                        className={classes.Project}>
                        {projects.shutdown.expanded ? <section onClick={() => this.exitFullProject('shutdown')} className={classes.Backdrop}>
                            <ShutdownInitiator closing={closing} exit={this.exitFullProject} /></section> : null}
                        <img className={classes.Project} src={shutdownLogo} alt={"Shutdown Initiator"} />
                        <HoveredLogo projName="shutdown" title={"TacMobile Shutdown Initiator"} tech={["C#", "WPF"]} clicked={this.displayFullProject} />
                    </BottomProject> : null}

                    {Object.keys(projectsToRender).indexOf('deadCode') >= 0 ? <BottomProject
                        pose={projects.deadCode.display ?  "visible" : "hidden" }
                        className={classes.Project}>
                        {projects.deadCode.expanded ? <section onClick={() => this.exitFullProject('deadCode')} className={classes.Backdrop}>
                            <DeadCode closing={closing} exit={this.exitFullProject} /></section> : null}
                        <img className={classes.Project} src={deadCodeLogo} alt={"Dead Code"} />
                        <HoveredLogo projName="deadCode" title={"Dead Code Eliminator"} tech={["Java"]} clicked={this.displayFullProject} />
                    </BottomProject> : null}

                    {Object.keys(projectsToRender).indexOf('versionCheck') >= 0 ? <BottomProject
                        pose={projects.versionCheck.display ?  "visible" : "hidden" }
                        className={classes.Project}>
                        {projects.versionCheck.expanded ? <section onClick={() => this.exitFullProject('versionCheck')} className={classes.Backdrop}>
                            <VersionCheck closing={closing} exit={this.exitFullProject} /></section> : null}
                        <img className={classes.Project} src={versioncheckLogo} alt={"VersionCheck"} />
                        <HoveredLogo projName="versionCheck" title={"VersionCheck"} tech={["C#", "WPF"]} clicked={this.displayFullProject} />
                    </BottomProject> : null}

                    {Object.keys(projectsToRender).indexOf('expireGuard') >= 0 ? <BottomProject
                        pose={projects.expireGuard.display ?  "visible" : "hidden" }
                        className={classes.Project}>
                        {projects.expireGuard.expanded ? <section onClick={() => this.exitFullProject('expireGuard')} className={classes.Backdrop}>
                            <ExpireGuard closing={closing} exit={this.exitFullProject} /></section> : null}
                        <img className={classes.Project} src={expireGuardLogo} alt={"ExpireGuard"} />
                        <HoveredLogo projName="expireGuard" title={"ExpireGuard"} tech={["C#", "WPF"]} clicked={this.displayFullProject} />
                    </BottomProject> : null}

                    {Object.keys(projectsToRender).indexOf('updatePlusConsole') >= 0 ? <BottomProject
                        pose={projects.updatePlusConsole.display ?  "visible" : "hidden" }
                        className={classes.Project}>
                        {projects.updatePlusConsole.expanded ? <section onClick={() => this.exitFullProject('updatePlusConsole')} className={classes.Backdrop}>
                            <UpdatePlusConsole closing={closing} exit={this.exitFullProject} /></section> : null}
                        <img className={classes.Project} src={updatePlusConsoleLogo} alt={"Update+ Console"} />
                        <HoveredLogo projName="updatePlusConsole" title={"Update+ Console"} tech={["AutoIt"]} clicked={this.displayFullProject} />
                    </BottomProject> : null}

                    {Object.keys(projectsToRender).indexOf('updatePlusManager') >= 0 ? <BottomProject
                        pose={projects.updatePlusManager.display ?  "visible" : "hidden" }
                        className={classes.Project}>
                        {projects.updatePlusManager.expanded ? <section onClick={() => this.exitFullProject('updatePlusManager')} className={classes.Backdrop}>
                            <UpdatePlusManager closing={closing} exit={this.exitFullProject} /></section> : null}
                        <img className={classes.Project} src={updatePlusManagerLogo} alt={"Update+ Manager"} />
                        <HoveredLogo projName="updatePlusManager" title={"Update+ Manager"} tech={["AutoIt"]} clicked={this.displayFullProject} />
                    </BottomProject> : null}

                    {Object.keys(projectsToRender).indexOf('motivationMachine') >= 0 ? <BottomProject
                        pose={projects.motivationMachine.display ?  "visible" : "hidden" }
                        className={classes.Project}>
                        {projects.motivationMachine.expanded ? <section onClick={() => this.exitFullProject('motivationMachine')} className={classes.Backdrop}>
                            <MotivationMachine closing={closing} exit={this.exitFullProject} /></section> : null}
                        <img className={classes.Project} src={motivationMachineLogo} alt={"Motivation Machine"} />
                        <HoveredLogo projName="motivationMachine" title={"Motivation Machine"} tech={["JavaScript", "HTML/CSS"]} clicked={this.displayFullProject} />
                    </BottomProject> : null}

                    {Object.keys(projectsToRender).indexOf('localWeather') >= 0 ? <BottomProject
                        pose={projects.localWeather.display ?  "visible" : "hidden" }
                        className={classes.Project}>
                        {projects.localWeather.expanded ? <section onClick={() => this.exitFullProject('localWeather')} className={classes.Backdrop}>
                            <LocalWeather closing={closing} exit={this.exitFullProject} /></section> : null}
                        <img className={classes.Project} src={localWeatherLogo} alt={"Local Weather"} />
                        <HoveredLogo projName="localWeather" title={"Local Weather"} tech={["JavaScript", "HTML/CSS"]} clicked={this.displayFullProject} />
                    </BottomProject> : null}

                    {Object.keys(projectsToRender).indexOf('twitchStream') >= 0 ? <BottomProject
                        pose={projects.twitchStream.display ?  "visible" : "hidden" }
                        className={classes.Project}>
                        {projects.twitchStream.expanded ? <section onClick={() => this.exitFullProject('twitchStream')} className={classes.Backdrop}>
                            <TwitchStream closing={closing} exit={this.exitFullProject} /></section> : null}
                        <img className={classes.Project} src={twitchStreamLogo} alt={"Twitch Stream"} />
                        <HoveredLogo projName="twitchStream" title={"Twitch Stream"} tech={["JavaScript", "HTML/CSS"]} clicked={this.displayFullProject} />
                    </BottomProject> : null}

                    {Object.keys(projectsToRender).indexOf('wikiViewer') >= 0 ? <BottomProject
                        pose={projects.wikiViewer.display ?  "visible" : "hidden" }
                        className={classes.Project}>
                        {projects.wikiViewer.expanded ? <section onClick={() => this.exitFullProject('wikiViewer')} className={classes.Backdrop}>
                            <WikiView closing={closing} exit={this.exitFullProject} /></section> : null}
                        <img className={classes.Project} src={wikiViewerLogo} alt={"WikiViewer"} />
                        <HoveredLogo projName="wikiViewer" title={"Wikipedia Viewer"} tech={["JavaScript", "HTML/CSS"]} clicked={this.displayFullProject} />
                    </BottomProject> : null}

                    {Object.keys(projectsToRender).indexOf('burgerBuilder') >= 0 ? <BottomProject
                        pose={projects.burgerBuilder.display ?  "visible" : "hidden" }
                        className={classes.Project}>
                        {projects.burgerBuilder.expanded ? <section onClick={() => this.exitFullProject('burgerBuilder')} className={classes.Backdrop}>
                            <BurgerBuilder closing={closing} exit={this.exitFullProject} /></section> : null}
                        <img className={classes.Project} src={burgerBuilderLogo} alt={"Burger Builder"} />
                        <HoveredLogo projName="burgerBuilder" title={"Burger Builder"} tech={["React"]} clicked={this.displayFullProject} />
                    </BottomProject> : null}

                    {Object.keys(projectsToRender).indexOf('funCalc') >= 0 ? <BottomProject
                        pose={projects.funCalc.display ?  "visible" : "hidden" }
                        className={classes.Project}>
                        {projects.funCalc.expanded ? <section onClick={() => this.exitFullProject('funCalc')} className={classes.Backdrop}>
                            <FunCalc closing={closing} exit={this.exitFullProject} /></section> : null}
                        <img className={classes.Project} src={funCalcLogo} alt={"FunCalc"} />
                        <HoveredLogo projName="funCalc" title={"FunCalc"} tech={["JavaScript", "HTML/CSS"]} clicked={this.displayFullProject} />
                    </BottomProject> : null}

                    {Object.keys(projectsToRender).indexOf('yahtzee') >= 0 ? <BottomProject
                        pose={projects.yahtzee.display ?  "visible" : "hidden" }
                        className={classes.Project}>
                        {projects.yahtzee.expanded ? <section onClick={() => this.exitFullProject('yahtzee')} className={classes.Backdrop}>
                            <Yahtzee closing={closing} exit={this.exitFullProject} /></section> : null}
                        <img className={classes.Project} src={yahtzeeLogo} alt={"Yahtzee"} />
                        <HoveredLogo projName="yahtzee" title={"YahtCMD"} tech={["Java"]} clicked={this.displayFullProject} />
                    </BottomProject> : null}
                </section>
            </section>

        );
    }
}

export default (Projects);