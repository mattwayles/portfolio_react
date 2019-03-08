import React from 'react';

import classes from './Navigation.css';
import posed from "react-pose";
import Auxil from "../../components/Auxil";
import Resume from "../Resume/Resume";
import Button from "../../components/ui/Button/Button";
import Portfolio from "../Portfolio/Portfolio";
import Personal from "../Personal/Personal";
import Contact from "../Contact/Contact";
import Certifications from "../Certifications/Certifications";

const TRANSITION_DURATION = 1000;
const BOUNCE_DURATION = 500;

const SHOW_LABEL_HEIGHT = 62;
const SHOW_BUTTON1_HEIGHT = 67;
const SHOW_BUTTON2_HEIGHT = 72;
const SHOW_BUTTON3_HEIGHT = 77;
const SHOW_BUTTON4_HEIGHT = 82;
const SHOW_BUTTON5_HEIGHT = 87;
const SHOW_BUTTON6_HEIGHT = 92;
const MAIN_SCROLLED = 125;

const LABEL_ORIGINAL = "How can I help you?";
const LABEL_RESUME_SCROLLED = "If you liked my resume, read more about my certifications!";
const LABEL_CERTIFICATIONS_SCROLLED = "I've been busy lately, check out my portfolio!";
const LABEL_PORTFOLIO_SCROLLED = "Interested in collaborating on a project? Send me a message!";
const LABEL_ABOUT_SCROLLED = "I'm interested in learning about you, too. Send me a message!";
const LABEL_COLLABORATE_SCROLLED = "If we're going to be working together, read more about me!";
const LABEL_CONTACT_SCROLLED = "What else would you like to do while you're here?";

/**
 * React-Pose poses for the interactive label [hidden, visible, bounce]
 */
const HowCanIHelpLabel = posed.p({
    hidden: { opacity: 0, scale: 0},
    visible: {color: "#0f3460", opacity: 1, scale: 1.0, transition: {ease: 'easeIn', duration: TRANSITION_DURATION}},
    bounce: {color: "#999", scale: 1.2, transition: {ease: 'easeInOut', duration: BOUNCE_DURATION}}
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
            certifications: false
        },
        buttons: {
          button1: false,
          button2: false,
          button3: false,
          button4: false,
          button5: false,
          button6: false
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
            windowHeight: window.innerHeight});
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
     * When display arrows are clicked, scroll to the Navigation section
     */
    scrollClick = ( openPage ) => {
        this.setState({open: {any: true, [openPage]: true}, label: {...this.state.label, modified: false}});
        setTimeout(() => {
            const view = document.getElementById("view");
            view.scrollIntoView({block: "start", behavior: "smooth"});
        }, 200);
    };

    /**
     * Manage mouse clicks of the Back To Navigation button (browser-dependent)
     */
    backToNavClick = () => {
        const nav = document.getElementById("nav");
        nav.scrollIntoView({block: "start", behavior: "smooth"});
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
            }
            else if (scrollPercent > SHOW_BUTTON6_HEIGHT && !this.state.buttons.button6) {
                this.setState({buttons: {...this.state.buttons, button6: true}});
                setTimeout(() => this.bounceLabel(), 5000);
            }

            //Change label to SCROLLED value for open page
            else{
                if (scrollPercent > MAIN_SCROLLED && !this.state.label.modified) {
                    if (this.state.open.resume) { this.setState({
                            label: {...this.state.label, text: LABEL_RESUME_SCROLLED, modified: true},
                            suggest: 'certifications'})}
                    else if (this.state.open.certifications) { this.setState({
                        label: {...this.state.label, text: LABEL_CERTIFICATIONS_SCROLLED, modified: true},
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
            this.setState({ label: {...this.state.label, display: false, bounce: false}, buttons: {} });
        }
    }

    /**
     * Bounce the interactive label on an interval
     */
    bounceLabel = () => {
        this.setState({label: {...this.state.label, display: true, bounce: true}});
        setTimeout(() => this.setState({label: {...this.state.label, display: true, bounce: false}}), BOUNCE_DURATION);
        setTimeout(() => this.bounceLabel(), 5000);
    };

    render() {
        const {open, scroll, documentHeight, windowHeight, label, suggest, buttons} = this.state;

        const scrollPercent = ((scroll + windowHeight) / documentHeight) * 100;

        return (
            <Auxil>
                <section className={classes.MainNavigation} id={"nav"}>
                    <section className={classes.LabelDiv}>
                        <HowCanIHelpLabel
                            pose={label.display ? label.bounce ? "bounce" : "visible" : "hidden"}
                            className={ classes.Label }>
                            {label.text}
                        </HowCanIHelpLabel>
                    </section>
                    <section className={classes.ButtonDiv}>
                        <Button visible={buttons.button1} pressed={open.resume} enter={"left"} click={this.scrollClick} page={"resume"} label={"I want to view your "} span={"Resume"} />
                        <Button visible={buttons.button2} pressed={open.certifications} bounce={label.bounce && suggest === "certifications"} enter={"right"} click={this.scrollClick} page={"certifications"} label={"I want to view your "} span={"Certifications"} />
                        <Button visible={buttons.button3} pressed={open.portfolio} bounce={label.bounce && suggest === "portfolio"}  enter={"left"} click={this.scrollClick} page={"portfolio"} label={"I want to view your "} span={"Portfolio"} />
                        <Button visible={buttons.button4} pressed={open.collaborate} bounce={label.bounce && suggest === "collaborate"} enter={"right"} click={this.scrollClick} page={"collaborate"} label={"I want to "} span={"Work with"} suffix={" you"} />
                        <Button visible={buttons.button5} pressed={open.about} bounce={label.bounce && suggest === "about"} enter={"left"} click={this.scrollClick} page={"about"} label={"I want to "} span={"Learn more"} suffix={" about you"} />
                        <Button visible={buttons.button6} pressed={open.contact} bounce={label.bounce && suggest === "contact"} enter={"right"} click={this.scrollClick} page={"contact"} label={"I want to "} span={"Contact"} suffix={" you"} />
                    </section>
                </section>

                {open.resume ? <Resume /> : null}
                {open.certifications ? <Certifications scrollPercent={scrollPercent} /> : null}
                {open.portfolio ? <Portfolio scrollPercent={scrollPercent}/> : null}
                {open.about ? <Personal scrollPercent={scrollPercent}/> : null}
                {open.collaborate ? <Contact collab={true} scrollPercent={scrollPercent}/> : null}
                {open.contact ? <Contact collab={false} scrollPercent={scrollPercent}/> : null}
                {open.any ? <section className={classes.NavButtonDiv}>
                        <Button visible={true} enter={"right"} click={this.backToNavClick} label={"Go back to the "} span={"Navigation Panel"} />
                    </section> : null}
            </Auxil>

        )
    };
}

export default (Navigation);