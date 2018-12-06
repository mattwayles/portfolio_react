import React from 'react';

import posed from "react-pose";
import classes from './SocialIcons.css';
import {SocialIcon} from "react-social-icons";

const TRANSITION_DURATION = 500;
const SocialIconPosed = posed.section({
    hoverable: true,
    init: {  backgroundColor: "#FFF"},
    hover: { backgroundColor: "#CCC", borderTopRightRadius: '25%', borderBottomRightRadius: '25%', zIndex: 1},
    hidden: {  x: -200},
    visible: { opacity: 1,  x: 0, transition: { ease: 'easeIn', duration:  TRANSITION_DURATION} }
});

class SocialIcons extends React.Component {
    state = {
            currentRender: 1,
        icon1: false,
        icon2: false,
        icon3: false,
        icon4: false,
        icon5: false,
        icon6: false
    };

    componentDidUpdate() {
            if (!this.state.icon1) {
                    this.renderIcon(this.state.currentRender);
            }
    }

    renderIcon = (num) => {
            if (num <= 6) {
                const icon = "icon" + num;
                console.log(icon);
                this.setState({[icon]: true, currentRender: num + 1});
                setTimeout(() => this.renderIcon(num + 1), TRANSITION_DURATION);
            }
    };

    render() {
        return(
            <section className={classes.SocialIcons}>
                <SocialIconPosed pose={this.state.icon1 ? 'visible' : 'hidden'}><SocialIcon className={classes.SocialIcon} url='http://facebook.com/mwayles'/></SocialIconPosed>
                <SocialIconPosed pose={this.state.icon2 ? 'visible' : 'hidden'}><SocialIcon className={classes.SocialIcon} url='http://www.github.com/mattwayles'/></SocialIconPosed>
                <SocialIconPosed pose={this.state.icon3 ? 'visible' : 'hidden'}><SocialIcon className={classes.SocialIcon} url='https://www.linkedin.com/in/matthew-wayles-03354369'/></SocialIconPosed>
                <SocialIconPosed pose={this.state.icon4 ? 'visible' : 'hidden'}><SocialIcon className={classes.SocialIcon} url='https://plus.google.com/u/0/101869636481098207270'/></SocialIconPosed>
                <SocialIconPosed pose={this.state.icon5 ? 'visible' : 'hidden'}><SocialIcon className={classes.SocialIcon} url='https://codepen.io/LiquidIce25/'/></SocialIconPosed>
                <SocialIconPosed pose={this.state.icon6 ? 'visible' : 'hidden'}> <SocialIcon className={classes.SocialIcon} url='http://www.freecodecamp.com/mattwayles'/></SocialIconPosed>
            </section>
        )}};

export default (SocialIcons);