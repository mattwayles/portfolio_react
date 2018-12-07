import React from 'react';

import classes from './MainNavigation.css';
import posed from "react-pose";
import SocialIcons from "../Sections/SocialIcons/SocialIcons";
import Auxil from "../../hoc/Auxil";
import CertificationIcons from "../Sections/CertificationIcons/CertificationIcons";

const TRANSITION_DURATION = 1000;
const BOUNCE_DURATION = 500;

const SHOW_LABEL_HEIGHT = 62;
const SHOW_BUTTON1_HEIGHT = 67;
const SHOW_BUTTON2_HEIGHT = 72;
const SHOW_BUTTON3_HEIGHT = 78;
const SHOW_BUTTON4_HEIGHT = 83;
const SHOW_BUTTON5_HEIGHT = 88;

const HowCanIHelpLabel = posed.p({
    hidden: { opacity: 0, scale: 0},
    visible: {color: "#779ecb", opacity: 1, scale: 1.0, transition: {ease: 'easeIn', duration: TRANSITION_DURATION}},
    bounce: {color: "#BBB", scale: 1.25, transition: {ease: 'easeIn', duration: BOUNCE_DURATION}}
});

const Button = posed.button({
    hoverable: true,
    init: { scale: 1, color: "#779ecb", backgroundColor: "#FFF"},
    hover: {scale: 1.1, color: "#fff", backgroundColor: "#779ecb"},
    hiddenLeft: { opacity: 0, x: "-15vw"},
    hiddenRight: { opacity: 0, x: "15vw"},
    visible: { opacity: 1, x: 0, transition: { ease: 'easeIn', duration: TRANSITION_DURATION } }
});

class MainNavigation extends React.Component {
    state = {
        documentHeight: 0,
        windowHeight: 0,
        howCanIHelpLabel: {display: false, bounce: false},
        buttons: {
          button1: false,
          button2: false,
          button3: false,
          button4: false,
          button5: false,
        }
    };

    componentDidMount() {
        this.setState({
            documentHeight: document.documentElement.offsetHeight,
            windowHeight: window.innerHeight})
    }

    componentDidUpdate() {
        const scrollPercent = ((window.pageYOffset + this.state.windowHeight) / this.state.documentHeight) * 100;
        if (scrollPercent > SHOW_LABEL_HEIGHT) {
            if (!this.state.howCanIHelpLabel.display) {
                this.setState({howCanIHelpLabel: {display: true, bounce: false}});
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
        }
        else if (scrollPercent < window.innerHeight / 5 && this.state.howCanIHelpLabel.display) {
            this.resetMainNavigationAnimation();
        }

    }

    resetMainNavigationAnimation = () => {
        this.setState({ howCanIHelpLabel: {display: false, bounce: false}, buttons: {} });
    };

    bounceLabel = () => {
        this.setState({howCanIHelpLabel: {display: true, bounce: true}});
        setTimeout(() => this.setState({howCanIHelpLabel: {display: true, bounce: false}}), BOUNCE_DURATION);
        setTimeout(() => this.bounceLabel(), 5000);
    };

    render() {
        const {howCanIHelpLabel, buttons} = this.state;

        const scrollPercent = ((window.pageYOffset + this.state.windowHeight) / this.state.documentHeight) * 100;

        return (
            <Auxil>
            <section className={classes.MainNavigation}>
                    <Auxil>
                        {scrollPercent > SHOW_BUTTON5_HEIGHT ? <SocialIcons /> : null}
                        <section className={classes.NavigationOptions}>
                            <HowCanIHelpLabel
                                pose={howCanIHelpLabel.display ? howCanIHelpLabel.bounce ? "bounce" : "visible" : "hidden"}
                                className={classes.HowCanIHelp}> How can I help you?
                            </HowCanIHelpLabel>
                            <section className={classes.ButtonDiv}>
                                <Button pose={buttons.button1 ? "visible" : "hiddenLeft"} className={classes.Button}>I want to view your <span style={{fontWeight: "bold"}}><em>Resume</em></span></Button>
                                <Button pose={buttons.button2 ? "visible" : "hiddenRight"} className={classes.Button}>I want to view your <span style={{fontWeight: "bold"}}><em>Portfolio</em></span></Button>
                                <Button pose={buttons.button3 ? "visible" : "hiddenLeft"} className={classes.Button}>I want to <span style={{fontWeight: "bold"}}><em>Learn more</em></span> about you</Button>
                                <Button pose={buttons.button4 ? "visible" : "hiddenRight"} className={classes.Button}>I want to <span style={{fontWeight: "bold"}}><em>Work With</em></span> you</Button>
                                <Button pose={buttons.button5 ? "visible" : "hiddenLeft"} className={classes.Button}>I want to <span style={{fontWeight: "bold"}}><em>Contact</em></span> you</Button>
                            </section>
                        </section>
                        {scrollPercent > SHOW_BUTTON5_HEIGHT ? <CertificationIcons /> : null}
                    </Auxil>
            </section>
                <section className={classes.Footer}>
                    <p>©2018</p>
                    <p>All content is original and developed independently by Matthew Wayles.</p>
                    <p>Reproduction without authorization is prohibited.</p>
                </section>
            </Auxil>

        )
    };
}

export default (MainNavigation);