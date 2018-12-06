import React from 'react';

import classes from './MainNavigation.css';
import posed from "react-pose";
import SocialIcons from "../Sections/SocialIcons/SocialIcons";
import Auxil from "../../hoc/Auxil";

const TRANSITION_DURATION = 1000;
const SHOW_LABEL_HEIGHT = window.innerHeight / 5;
const SHOW_BUTTON1_HEIGHT = SHOW_LABEL_HEIGHT + window.innerHeight / 5;
const SHOW_BUTTON2_HEIGHT = SHOW_LABEL_HEIGHT + window.innerHeight / 4;
const SHOW_BUTTON3_HEIGHT = SHOW_LABEL_HEIGHT + window.innerHeight / 3;
const SHOW_BUTTON4_HEIGHT = SHOW_LABEL_HEIGHT + window.innerHeight / 2;
const SHOW_BUTTON5_HEIGHT = SHOW_LABEL_HEIGHT + window.innerHeight / 1.5;

const HowCanIHelpLabel = posed.p({
    hidden: { opacity: 0, scale: 4.0},
    visible: { opacity: 1,  scale: 1.0, transition: { ease: 'easeIn', duration: TRANSITION_DURATION } }
});

const Button = posed.button({
    hoverable: true,
    init: { scale: 1, color: "#779ecb", backgroundColor: "#FFF"},
    hover: {scale: 1.1, color: "#fff", backgroundColor: "#779ecb"},
    hiddenLeft: { opacity: 0, x: -600},
    hiddenRight: { opacity: 0, x: 600},
    visible: { opacity: 1, x: 0, transition: { ease: 'easeIn', duration: TRANSITION_DURATION } }
});

class MainNavigation extends React.Component {
    state = {
        howCanIHelpLabelVisible: false,
        buttons: {
          button1: false,
          button2: false,
          button3: false,
          button4: false,
          button5: false,
        }
    };

    componentDidUpdate() {
        if (window.pageYOffset > SHOW_LABEL_HEIGHT) {
            if (!this.state.howCanIHelpLabelVisible) {
                this.setState({howCanIHelpLabelVisible: true});
            }
            else if (window.pageYOffset > SHOW_BUTTON1_HEIGHT && !this.state.buttons.button1) {
                this.setState({buttons: {...this.state.buttons, button1: true}});
            }
            else if (window.pageYOffset > SHOW_BUTTON2_HEIGHT && !this.state.buttons.button2) {
                this.setState({buttons: {...this.state.buttons, button2: true}});
            }
            else if (window.pageYOffset > SHOW_BUTTON3_HEIGHT && !this.state.buttons.button3) {
                this.setState({buttons: {...this.state.buttons, button3: true}});
            }
            else if (window.pageYOffset > SHOW_BUTTON4_HEIGHT && !this.state.buttons.button4) {
                this.setState({buttons: {...this.state.buttons, button4: true}});
            }
            else if (window.pageYOffset > SHOW_BUTTON5_HEIGHT && !this.state.buttons.button5) {
                this.setState({buttons: {...this.state.buttons, button5: true}});
            }
        }
        else if (window.pageYOffset < window.innerHeight / 5 && this.state.howCanIHelpLabelVisible) {
            this.resetMainNavigationAnimation();
        }

    }

    resetMainNavigationAnimation = () => {
        this.setState({ howCanIHelpLabelVisible: false, buttons: {} });
    };



    render() {
        const {howCanIHelpLabelVisible, buttons} = this.state;

        return (
            <Auxil>
            <section className={classes.MainNavigation}>
                {window.pageYOffset > SHOW_LABEL_HEIGHT ?
                    <Auxil>
                        <SocialIcons />
                        <section className={classes.NavigationOptions}>
                            <HowCanIHelpLabel
                                pose={howCanIHelpLabelVisible ? "visible" : "hidden"}
                                className={classes.HowCanIHelp}> How can I help you?
                            </HowCanIHelpLabel>
                            <section className={classes.ButtonDiv}>
                                <Button pose={buttons.button1 ? "visible" : "hiddenLeft"} className={classes.Button}>I want to view your <span style={{fontWeight: "bold"}}><em>Resume</em></span></Button>
                                <Button pose={buttons.button2 ? "visible" : "hiddenRight"} className={classes.Button}>I want to view your <span style={{fontWeight: "bold"}}><em>Development Portfolio</em></span></Button>
                                <Button pose={buttons.button3 ? "visible" : "hiddenLeft"} className={classes.Button}>I want to <span style={{fontWeight: "bold"}}><em>Learn more</em></span> about you</Button>
                                <Button pose={buttons.button4 ? "visible" : "hiddenRight"} className={classes.Button}>I want to <span style={{fontWeight: "bold"}}><em>Work With</em></span> you</Button>
                                <Button pose={buttons.button5 ? "visible" : "hiddenLeft"} className={classes.Button}>I want to <span style={{fontWeight: "bold"}}><em>Contact</em></span> you</Button>
                            </section>
                        </section>
                    </Auxil>
                    : null}
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