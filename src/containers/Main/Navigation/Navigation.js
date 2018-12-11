import React from 'react';

import classes from './Navigation.css';
import posed from "react-pose";
import SocialIcons from "./SocialIcons/SocialIcons";
import Auxil from "../../../components/Auxil";
import CertificationIcons from "./CertificationIcons/CertificationIcons";
import Resume from "../../Resume/Resume";
import DownArrows from "../../../components/ui/DownArrows/DownArrows";
import DynamicFont from 'react-dynamic-font';
import Button from "../../../components/ui/Button/Button";
import Portfolio from "../../Portfolio/Portfolio";
import Personal from "../../Personal/Personal";
import Contact from "../../Contact/Contact";

const TRANSITION_DURATION = 1000;
const LABEL_CHANGE_DURATION = 1200;
const BOUNCE_DURATION = 500;

const SHOW_LABEL_HEIGHT = 62;
const SHOW_BUTTON1_HEIGHT = 67;
const SHOW_BUTTON2_HEIGHT = 72;
const SHOW_BUTTON3_HEIGHT = 78;
const SHOW_BUTTON4_HEIGHT = 83;
const SHOW_BUTTON5_HEIGHT = 88;
const MAIN_SCROLLED = 125;

const LABEL_ORIGINAL = "How can I help you?"; 
const LABEL_RESUME = "Okay, check out my Resume below!";
const LABEL_RESUME_SCROLLED = "If you liked my Resume, why not check out my Portfolio?";
const LABEL_PORTFOLIO = "Voila! Scroll down for my portfolio, and peruse at your leisure!";
const LABEL_PORTFOLIO_SCROLLED = "Interested in collaborating on a project? Send me a message!";
const LABEL_ABOUT = "I'm flattered! Scroll down to learn more about me!";
const LABEL_ABOUT_SCROLLED = "I'm interested in learning about you, too. Send me a message!";
const LABEL_COLLABORATE = "Let's do it! Scroll down to fill out a contact form.";
const LABEL_COLLABORATE_SCROLLED = "If we're going to be working together, read more about me!";
const LABEL_CONTACT = "Awesome! I look forward to hearing from you!";
const LABEL_CONTACT_SCROLLED = "What else would you like to do while you're here?";
const LABEL_ERROR = "Whoops! That operation isn't supported yet.";

/**
 * React-Pose poses for the interactive label [hidden, visible, bounce]
 */
const HowCanIHelpLabel = posed.p({
    hidden: { opacity: 0, scale: 0},
    visible: {color: "#779ecb", opacity: 1, scale: 1.0, transition: {ease: 'easeIn', duration: TRANSITION_DURATION}},
    bounce: {color: "#BBB", scale: 1.25, transition: {ease: 'easeInOut', duration: BOUNCE_DURATION}},
});

/**
 * Display the main Navigation landing page for the application
 */
class Navigation extends React.Component {
    state = {
        scroll: 0,
        documentHeight: 0,
        windowHeight: 0,
        suggest: null,
        label: {
            text: LABEL_ORIGINAL,
            display: false,
            bounce: false,
            modified: false,
            change: false},
        open: {
            any: false,
            resume: false,
            contact: false,
            portfolio: false,
            collaborate: false,
        },
        buttons: {
          button1: false,
          button2: false,
          button3: false,
          button4: false,
          button5: false,
        }
    };

    /**
     * On component mount, register scroll and resize handlers
     */
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('resize', this.handleWindowSizeChange);
        this.setState({
            documentHeight: window.innerHeight * 2,
            windowHeight: window.innerHeight})
    }

    /**
     * On component unmount, unregister scroll and resize handlers
     */
    componentWillUnmount() {
        window.addEventListener('scroll', this.handleScroll);
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    /**
     * Handler for scrolling events
     */
    handleScroll = () => {
        if (window.pageYOffset !== this.state.scroll) {
            this.setState({scroll: window.pageYOffset});
        }
    };

    /**
     * Handler for window resize events
     */
    handleWindowSizeChange = () => {
        this.setState({
            documentHeight: window.innerHeight * 2,
            windowHeight: window.innerHeight})
    };

    /**
     * Manage mouse clicks of the Down Arrows (browser-dependent)
     */
    scrollClick = () => {
        document.documentMode || window.StyleMedia ?
            window.scrollTo(0, this.state.documentHeight + 1)
            : window.scrollTo({ top: this.state.documentHeight + 1, behavior: 'smooth' });
    };

    /**
     * Manage mouse clicks of the Back To Navigation button (browser-dependent)
     */
    backToNavClick = () => {
        document.documentMode || window.StyleMedia ?
            window.scrollTo(0, this.state.windowHeight)
            : window.scrollTo({ top: this.state.windowHeight, behavior: 'smooth' });
    };

    /**
     * On component update, analyze scroll location to determine what to render
     */
    componentDidUpdate() {
        let scrollPercent = ((this.state.scroll + this.state.windowHeight) / this.state.documentHeight) * 100;

        if (scrollPercent > SHOW_LABEL_HEIGHT) {
            if (!this.state.label.display) { //Render label
                this.setState({label: {...this.state.label, display: true, bounce: false}});
            }

            //Render buttons
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

            //Change label to SCROLLED value for open page
            else{
                if (scrollPercent > MAIN_SCROLLED && !this.state.label.modified) {
                    if (this.state.open.resume) { this.setState({
                            label: {...this.state.label, text: LABEL_RESUME_SCROLLED, modified: true},
                            suggest: 'portfolio'})}
                    else if (this.state.open.portfolio) { this.setState({
                        label: {...this.state.label, text: LABEL_PORTFOLIO_SCROLLED, modified: true},
                            suggest: 'collaborate'})}
                    else if (this.state.open.about) { this.setState({
                        label: {...this.state.label, text: LABEL_ABOUT_SCROLLED, modified: true},
                        suggest: 'contact'})}
                    else if (this.state.open.collaborate) { this.setState({
                        label: {...this.state.label, text: LABEL_COLLABORATE_SCROLLED, modified: true},
                        suggest: 'about'})}
                    else if (this.state.open.contact) { this.setState({
                        label: {...this.state.label, text: LABEL_CONTACT_SCROLLED, modified: true},
                        suggest: null})}
                }
            }
        }
        else if (scrollPercent < SHOW_LABEL_HEIGHT && this.state.label.display) {
            this.resetMainNavigationAnimation();
        }
    }

    /**
     * Remove navigation elements from DOM when user scrolls up
     */
    resetMainNavigationAnimation = () => {
        this.setState({ label: {...this.state.label, display: false, bounce: false}, buttons: {} });
    };

    /**
     * Bounce the interactive label on an interval
     */
    bounceLabel = () => {
        this.setState({label: {...this.state.label, display: true, bounce: true}});
        setTimeout(() => this.setState({label: {...this.state.label, display: true, bounce: false}}), BOUNCE_DURATION);
        setTimeout(() => this.bounceLabel(), 5000);
    };

    /**
     * Dynamically render content below the navigation page based on button clicks
     * @param openPage  The page to open
     */
    openPage = (openPage) => {
        let labelText = "";
        this.setState({open: {any: true, [openPage]: true}, label: {...this.state.label, change: true}});
        switch (openPage) {
            case "resume":
                labelText = LABEL_RESUME;
                break;
            case "portfolio":
                labelText = LABEL_PORTFOLIO;
                break;
            case "about":
                labelText = LABEL_ABOUT;
                break;
            case "collaborate":
                labelText = LABEL_COLLABORATE;
                break;
            case "contact":
                labelText = LABEL_CONTACT;
                break;
            default:
                labelText = LABEL_ERROR;
                break;
        }
        setTimeout(() => {
            this.setState({label: {...this.state.label, text: labelText, modified: false}});}, LABEL_CHANGE_DURATION / 2);
        setTimeout(() => {
            this.setState({label: {...this.state.label, change: false}, suggest: null});}, LABEL_CHANGE_DURATION);
    };

    render() {
        const {open, scroll, documentHeight, windowHeight, label, suggest, buttons} = this.state;

        const scrollPercent = ((scroll + windowHeight) / this.state.documentHeight) * 100;

        return (
            <Auxil>
            <section className={classes.MainNavigation}>
                    <Auxil>
                        {scrollPercent > SHOW_BUTTON5_HEIGHT ? <SocialIcons /> : null}
                        <section className={classes.NavigationOptions}>
                            <HowCanIHelpLabel
                                pose={label.display ? label.bounce ? "bounce" : "visible" : "hidden"}
                                className={label.change ? classes.AnimateLabel : classes.Label}>
                                    <DynamicFont content={label.text} />
                            </HowCanIHelpLabel>
                            <section className={classes.ButtonDiv}>
                                <Button visible={buttons.button1} pressed={open.resume} enter={"left"} click={this.openPage} page={"resume"} label={"I want to view your "} span={"Resume"} />
                                <Button visible={buttons.button2} pressed={open.portfolio} bounce={label.bounce && suggest === "portfolio"}  enter={"right"} click={this.openPage} page={"portfolio"} label={"I want to view your "} span={"Portfolio"} />
                                <Button visible={buttons.button3} pressed={open.about} bounce={label.bounce && suggest === "about"} enter={"left"} click={this.openPage} page={"about"} label={"I want to "} span={"Learn more"} suffix={" about you"} />
                                <Button visible={buttons.button4} pressed={open.collaborate} bounce={label.bounce && suggest === "collaborate"} enter={"right"} click={this.openPage} page={"collaborate"} label={"I want to "} span={"Work with"} suffix={" you"} />
                                <Button visible={buttons.button5} pressed={open.contact} bounce={label.bounce && suggest === "contact"} enter={"left"} click={this.openPage} page={"contact"} label={"I want to "} span={"Contact"} suffix={" you"} />
                                {open.any ? <DownArrows click={this.scrollClick}/> : null}
                            </section>
                        </section>
                        {scrollPercent > SHOW_BUTTON5_HEIGHT ? <CertificationIcons /> : null}
                    </Auxil>
            </section>

                {open.resume ? <Resume scrollTo={documentHeight} /> : null}
                {open.portfolio ? <Portfolio scrollPercent={scrollPercent}/> : null}
                {open.about ? <Personal scrollPercent={scrollPercent}/> : null}
                {open.collaborate ? <Contact collab={true} scrollPercent={scrollPercent}/> : null}
                {open.contact ? <Contact collab={false} scrollPercent={scrollPercent}/> : null}
                {open.any ? <section className={classes.NavButtonDiv}>
                        <Button visible={true} enter={"right"} click={this.backToNavClick} label={"Take me back to the "} span={"Navigation Panel"} />
                    </section> : null}

            </Auxil>

        )
    };
}

export default (Navigation);