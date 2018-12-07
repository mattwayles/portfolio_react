import React from 'react';

import posed from "react-pose";
import classes from './SocialIcons.css';
import facebookIcon from '../../../assets/home/social/facebookIcon.png';
import githubIcon from '../../../assets/home/social/githubIcon.png';
import linkedinIcon from '../../../assets/home/social/linkedinIcon.png';
import googlePlusIcon from '../../../assets/home/social/googlePlusIcon.png';
import codepenIcon from '../../../assets/home/social/codepenIcon.png';
import freeCodeCampIcon from '../../../assets/home/social/freeCodeCampIcon.png';

const TRANSITION_DURATION = 250;
const ROTATE_DURATION = 600;
const ICON_COUNT = 6;
const Icon = posed.img({
    hidden: {  x: "-15vw"},
    visible: { x: 0, rotate: 0, transition: { ease: 'easeIn', duration:  TRANSITION_DURATION} },
    rotate: { rotate: 360, transition: { ease: 'easeIn', duration:  ROTATE_DURATION} },
});
const FacebookIcon = posed.section({
    hoverable: true,
    init: { scale: 1, backgroundColor: "#FFF"},
    hover: { scale: 1.1, backgroundColor: "rgb(59, 89, 152)", borderTopRightRadius: '25%', borderBottomRightRadius: '25%', zIndex: 1},
});
const GithubIcon = posed.section({
    hoverable: true,
    init: { scale: 1, backgroundColor: "#FFF"},
    hover: { scale: 1.1, backgroundColor: "rgb(65, 131, 196)", borderTopRightRadius: '25%', borderBottomRightRadius: '25%', zIndex: 1},
});
const LinkedInIcon = posed.section({
    hoverable: true,
    init: { scale: 1, backgroundColor: "#FFF"},
    hover: { scale: 1.1, backgroundColor: "rgb(0, 127, 177)", borderTopRightRadius: '25%', borderBottomRightRadius: '25%', zIndex: 1},
});
const GooglePlusIcon = posed.section({
    hoverable: true,
    init: { scale: 1, backgroundColor: "#FFF"},
    hover: { scale: 1.1, backgroundColor: "rgb(221, 75, 57)", borderTopRightRadius: '25%', borderBottomRightRadius: '25%', zIndex: 1},
});
const CodePenIcon = posed.section({
    hoverable: true,
    init: { scale: 1, backgroundColor: "#FFF"},
    hover: { scale: 1.1, backgroundColor: "#000", borderTopRightRadius: '25%', borderBottomRightRadius: '25%', zIndex: 1},
});
const FreeCodeCampIcon = posed.section({
    hoverable: true,
    init: { scale: 1, backgroundColor: "#FFF"},
    hover: { scale: 1.1, backgroundColor: "rgb(48, 98, 3)", borderTopRightRadius: '25%', borderBottomRightRadius: '25%', zIndex: 1},
});

class SocialIcons extends React.Component {
    state = {
        currentRender: 1,
        icon1: {display: false, rotate: false},
        icon2: {display: false, rotate: false},
        icon3: {display: false, rotate: false},
        icon4: {display: false, rotate: false},
        icon5: {display: false, rotate: false},
        icon6: {display: false, rotate: false},
    };

    componentDidUpdate() {
            if (!this.state.icon1.display) {
                    this.renderIcon(this.state.currentRender);
            }
    }

    renderIcon = (num) => {
            if (num <= ICON_COUNT) {
                const icon = "icon" + num;
                this.setState({[icon]: {display:true, rotate: false}, currentRender: num + 1});
                setTimeout(() => this.renderIcon(num + 1), TRANSITION_DURATION);
            }
            else {
                setTimeout(() => this.rotateSocialIcon(), 5000);
            }
    };

    rotateSocialIcon = () => {
        const min = Math.ceil(1);
        const max = Math.floor(ICON_COUNT);
        const r = Math.floor(Math.random() * (max - min)) + min;
        const icon = "icon" + r;
        this.setState({[icon]: {display: true, rotate: true}});
        setTimeout(() => this.setState({[icon]: {display: true, rotate: false}}), ROTATE_DURATION);
        setTimeout(() => this.rotateSocialIcon(), 5000);
    };

    render() {
        const {icon1, icon2, icon3, icon4, icon5, icon6} = this.state;
        return(
            <section className={classes.SocialIcons}>
                <a href={'http://facebook.com/mwayles'}><FacebookIcon><Icon pose={icon1.display ? icon1.rotate? 'rotate' : 'visible' : 'hidden'} src={facebookIcon} className={classes.SocialIcon}/></FacebookIcon></a>
                <a href={'http://www.github.com/mattwayles'}><GithubIcon><Icon pose={icon2.display ? icon2.rotate? 'rotate' : 'visible' : 'hidden'} src={githubIcon} className={classes.SocialIcon}/></GithubIcon></a>
                <a href={'https://www.linkedin.com/in/matthew-wayles-03354369'}><LinkedInIcon><Icon  pose={icon3.display ? icon3.rotate? 'rotate' : 'visible' : 'hidden'} src={linkedinIcon} className={classes.SocialIcon}/></LinkedInIcon></a>
                <a href={'https://plus.google.com/u/0/101869636481098207270'}><GooglePlusIcon><Icon pose={icon4.display ? icon4.rotate? 'rotate' : 'visible' : 'hidden'} src={googlePlusIcon} className={classes.SocialIcon}/></GooglePlusIcon></a>
                <a href={'https://codepen.io/LiquidIce25/'}><CodePenIcon><Icon pose={icon5.display ? icon5.rotate? 'rotate' : 'visible' : 'hidden'} src={codepenIcon} className={classes.SocialIcon}/></CodePenIcon></a>
                <a href={'http://www.freecodecamp.com/mattwayles'}><FreeCodeCampIcon><Icon pose={icon6.display ? icon6.rotate? 'rotate' : 'visible' : 'hidden'} src={freeCodeCampIcon} className={classes.SocialIcon}/></FreeCodeCampIcon></a>
            </section>
        )}}

export default (SocialIcons);