import React from 'react';

import classes from './MainNavigation.css';
import posed from "react-pose";
import SocialIcons from "../Sections/SocialIcons/SocialIcons";
import Auxil from "../../hoc/Auxil";
import CertificationIcons from "../Sections/CertificationIcons/CertificationIcons";
import Resume from "../../containers/Resume/Resume";
import DownArrows from "../ui/DownArrows/DownArrows";
import DynamicFont from 'react-dynamic-font';
import Button from "../ui/Button/Button";
import Portfolio from "../../containers/Portfolio/Portfolio";

const TRANSITION_DURATION = 1000;
const BOUNCE_DURATION = 500;

const SHOW_LABEL_HEIGHT = 62;
const SHOW_BUTTON1_HEIGHT = 67;
const SHOW_BUTTON2_HEIGHT = 72;
const SHOW_BUTTON3_HEIGHT = 78;
const SHOW_BUTTON4_HEIGHT = 83;
const SHOW_BUTTON5_HEIGHT = 88;
const MAIN_SCROLLED = 100;

const LABEL_ORIGINAL = "How can I help you?"; 
const LABEL_RESUME = "Okay, check out my Resume below!";
const LABEL_RESUME_SCROLLED = "If you liked my Resume, why not check out my Portfolio?";
const LABEL_PORTFOLIO = "Voila! Scroll down for my portfolio, and peruse at your leisure!";
const LABEL_PORTFOLIO_SCROLLED = "Interested in collaborating on a project? Send me a message!";
const LABEL_ERROR = "Whoops! That operation isn't supported yet.";

const HowCanIHelpLabel = posed.p({
    hidden: { opacity: 0, scale: 0},
    visible: {color: "#779ecb", opacity: 1, scale: 1.0, transition: {ease: 'easeIn', duration: TRANSITION_DURATION}},
    bounce: {color: "#BBB", scale: 1.25, transition: {ease: 'easeIn', duration: BOUNCE_DURATION}},
});

class MainNavigation extends React.Component {
    state = {
        scroll: 0,
        documentHeight: 0,
        windowHeight: 0,
        label: {text: LABEL_ORIGINAL, display: false, bounce: false},
        labelModified: false,
        open: {
            any: false,
            resume: false,
            portfolio: false
        },
        buttons: {
          button1: false,
          button2: false,
          button3: false,
          button4: false,
          button5: false,
        }
    };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('resize', this.handleWindowSizeChange);
        this.setState({
            documentHeight: document.documentElement.offsetHeight,
            windowHeight: window.innerHeight})
    }

    componentWillUnmount() {
        window.addEventListener('scroll', this.handleScroll);
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    componentDidUpdate() {
        let scrollPercent = ((this.state.scroll + this.state.windowHeight) / this.state.documentHeight) * 100;
        //console.log(scrollPercent);
        if (scrollPercent > SHOW_LABEL_HEIGHT) {
            if (!this.state.label.display) {
                this.setState({label: {...this.state.label, display: true, bounce: false}});
            }
            else if (scrollPercent > SHOW_BUTTON1_HEIGHT && !this.state.buttons.button1) {
                this.setState({buttons: {...this.state.buttons, button1: true}});
            }
            else if (scrollPercent > SHOW_BUTTON2_HEIGHT && !this.state.buttons.button2) {
                this.setState({buttons: {...this.state.buttons, button2: true}});
            }
            else if (scrollPercent > SHOW_BUTTON3_HEIGHT && !this.state.buttons.button3) {
                this.setState({buttons: {...this.state.buttons, button3: true}});
            }
            else if (scrollPercent > SHOW_BUTTON4_HEIGHT && !this.state.buttons.button4) {
                this.setState({buttons: {...this.state.buttons, button4: true}});
            }
            else if (scrollPercent > SHOW_BUTTON5_HEIGHT && !this.state.buttons.button5) {
                this.setState({buttons: {...this.state.buttons, button5: true}});
                setTimeout(() => this.bounceLabel(), 5000);
            }
            else{
                scrollPercent = (this.state.scroll / this.state.documentHeight) * 100;
                if (scrollPercent > MAIN_SCROLLED && !this.state.labelModified) {
                    this.state.open.resume ? this.setState({
                            label: {...this.state.label, text: LABEL_RESUME_SCROLLED},
                            labelModified: true}) : null;
                    this.state.open.portfolio ? this.setState({
                        label: {...this.state.label, text: LABEL_PORTFOLIO_SCROLLED},
                        labelModified: true}) : null;
                }
            }
        }
        else if (scrollPercent < SHOW_LABEL_HEIGHT && this.state.label.display) {
            this.resetMainNavigationAnimation();
        }

    }

    resetMainNavigationAnimation = () => {
        this.setState({ label: {...this.state.label, display: false, bounce: false}, buttons: {} });
    };

    bounceLabel = () => {
        this.setState({label: {...this.state.label, display: true, bounce: true}});
        setTimeout(() => this.setState({label: {...this.state.label, display: true, bounce: false}}), BOUNCE_DURATION);
        setTimeout(() => this.bounceLabel(), 5000);
    };

    handleScroll = () => {
        if (window.pageYOffset !== this.state.scroll) {
            this.setState({scroll: window.pageYOffset});
        }
    };

    handleWindowSizeChange = () => {
        this.setState({
            documentHeight: document.documentElement.offsetHeight,
            windowHeight: window.innerHeight})
    };

    openPage = (openPage) => {
        switch (openPage) {
            case "resume":
                this.setState({open: {any: true, resume: true, portfolio: false}});
                setTimeout(() => {
                    this.setState({
                        label: {...this.state.label, text: LABEL_RESUME},
                        labelModified: false,
                    });
                }, 1000);
                break;
            case "portfolio":
                this.setState({open: {any: true, portfolio: true, resume: false}});
                setTimeout(() => {
                    this.setState({
                        label: {...this.state.label, text: LABEL_PORTFOLIO},
                        labelModified: false,
                    });
                }, 1000);
                break;
            default:
                    this.setState({ label: {...this.state.label, text: LABEL_ERROR}});

        }
    };

    scrollClick = () => {
        document.documentMode || window.StyleMedia ?
            window.scrollTo(0, this.state.documentHeight)
            : window.scrollTo({ top: this.state.documentHeight, behavior: 'smooth' });
    };

    backToNavClick = () => {
        document.documentMode || window.StyleMedia ?
            window.scrollTo(0, this.state.windowHeight)
            : window.scrollTo({ top: this.state.windowHeight, behavior: 'smooth' });
    };

    render() {
        const {open, scroll, documentHeight, label, buttons} = this.state;

        const scrollPercent = ((scroll + this.state.windowHeight) / this.state.documentHeight) * 100;

        return (
            <Auxil>
            <section className={classes.MainNavigation}>
                    <Auxil>
                        {scrollPercent > SHOW_BUTTON5_HEIGHT ? <SocialIcons /> : null}
                        <section className={classes.NavigationOptions}>
                            <HowCanIHelpLabel
                                pose={label.display ? label.bounce ? "bounce" : "visible" : "hidden"}
                                className={open.any ? classes.AnimateLabel : classes.Label}>
                                    <DynamicFont content={label.text} />
                            </HowCanIHelpLabel>
                            <section className={classes.ButtonDiv}>
                                <Button visible={buttons.button1} pressed={open.resume} enter={"left"} click={this.openPage} page={"resume"} label={"I want to view your "} span={"Resume"} />
                                <Button visible={buttons.button2} pressed={open.portfolio} enter={"right"} click={this.openPage} page={"portfolio"} label={"I want to view your "} span={"Portfolio"} />
                                <Button visible={buttons.button3} pressed={open.about} enter={"left"} click={this.openPage} page={"about"} label={"I want to "} span={"Learn more"} suffix={" about you"} />
                                <Button visible={buttons.button4} pressed={open.collaborate} enter={"right"} click={this.openPage} page={"collaborate"} label={"I want to "} span={"Work with"} suffix={" you"} />
                                <Button visible={buttons.button5} pressed={open.contact} enter={"left"} click={this.openPage} page={"contact"} label={"I want to "} span={"Contact"} suffix={" you"} />
                                {open.any ? <DownArrows click={this.scrollClick}/> : null}
                            </section>
                        </section>
                        {scrollPercent > SHOW_BUTTON5_HEIGHT ? <CertificationIcons /> : null}
                    </Auxil>
            </section>
                {open.resume ? <Resume scrollTo={documentHeight} /> : null}
                {open.portfolio ? <Portfolio /> : null}
                {open.any ?
                    <section className={classes.NavButtonDiv}>
                        <Button visible={true} enter={"right"} click={this.backToNavClick} label={"Take me back to the "} span={"Navigation Panel"} />
                    </section>
                        : null}
            </Auxil>

        )
    };
}

export default (MainNavigation);