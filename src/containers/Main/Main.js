import React from 'react';

import classes from './Main.css';
import Auxil from "../../hoc/Auxil";
import posed from 'react-pose';
import MainNavigation from "../../components/MainNavigation/MainNavigation";
import DownArrows from "../../components/ui/DownArrows/DownArrows";

const TRANSITION_DURATION = 1500;

const WelcomeImage = posed.section({
    divHidden: { opacity: 0 },
    divVisible: { opacity: 1, transition: { ease: 'easeIn', duration: TRANSITION_DURATION } }
});

const DescriptionLine = posed.p({
    descHidden: { width: 0 },
    descVisible: { width: "100%", transition: { ease: "easeIn", duration: TRANSITION_DURATION } }
});

class Main extends React.Component {
    state = {
        scroll: 0,
        currentLineNo: 1,
        maxLineNo: 4,
        displayArrows: false,
        originalWelcomeImageLoaded: false,
        coloredWelcomeImageLoaded: false,
        description: {
            line1: false,
            line2: false,
            line3: false,
            line4: false,
        },

    };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        window.scrollTo(0,0);
        if (!this.state.originalWelcomeImageLoaded) {
            this.loadOriginalWelcomeImage();
        }
    }

    componentWillUnmount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        if (window.pageYOffset !== this.state.scroll) {
            this.setState({scroll: window.pageYOffset});
        }
    };

    loadOriginalWelcomeImage = () => {
        this.setState({ originalWelcomeImageLoaded: true });
        setTimeout(() => {this.loadColoredWelcomeImage()}, TRANSITION_DURATION)
    };

    loadColoredWelcomeImage = () => {
        this.setState({ coloredWelcomeImageLoaded: true});
        setTimeout(() => {this.displayDescriptionLine()}, TRANSITION_DURATION)
    };

    displayDescriptionLine = () => {
        const line = "line" + this.state.currentLineNo;
        this.setState({ description: {...this.state.description, [line]: true}, currentLineNo: this.state.currentLineNo + 1});
        setTimeout(() => {this.state.currentLineNo <= this.state.maxLineNo ? this.displayDescriptionLine()
            : this.setState({displayArrows: true})}, TRANSITION_DURATION - 500);

    };

    scrollClick = () => {
        document.documentMode || window.StyleMedia ?
            window.scrollTo(0, window.innerHeight)
            : window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    };

    render() {
        const {originalWelcomeImageLoaded, coloredWelcomeImageLoaded, description, displayArrows, scroll} = this.state;

        return (
            <Auxil>
                <WelcomeImage pose={originalWelcomeImageLoaded ? 'divVisible' : 'divHidden'} className={classes.WelcomeImage} />
                <WelcomeImage pose={coloredWelcomeImageLoaded ? 'divVisible' : 'divHidden'} className={classes.WelcomeImageColored}>
                    <section className={classes.Intro}>
                    <p className={classes.Hello}>Hello, I'm Matthew Wayles.</p>
                        <DescriptionLine pose={description.line1 ? 'descVisible' : 'descHidden'} className={classes.Description}><em>✓&emsp;<span className={classes.Bold}>Full-Stack</span> Software Engineer</em></DescriptionLine>
                        <DescriptionLine pose={description.line2 ? 'descVisible' : 'descHidden'} className={classes.Description}><em>✓&emsp;Cross-platform <span className={classes.Bold}>Desktop</span>, <span className={classes.Bold}>Mobile</span>, and <span className={classes.Bold}>Web</span> Applications</em></DescriptionLine>
                        <DescriptionLine pose={description.line3 ? 'descVisible' : 'descHidden'} className={classes.Description}><em>✓&emsp;10+ yrs <span className={classes.Bold}>Professional</span> and <span className={classes.Bold}>Educational</span> Experience</em></DescriptionLine>
                        <DescriptionLine pose={description.line4 ? 'descVisible' : 'descHidden'} className={classes.Description}><em>✓&emsp;Available for <span className={classes.Bold}>Freelance</span> projects and <span className={classes.Bold}>Consulting</span></em></DescriptionLine>
                    </section>
                </WelcomeImage>
                {scroll < window.innerHeight / 2 && displayArrows ? <DownArrows click={this.scrollClick} /> : <section className={classes.Placeholder} />}
                <MainNavigation />

                <section className={classes.Footer}>
                    <p>©2018</p>
                    <p>All content is original and developed independently by Matthew Wayles.</p>
                    <p>Reproduction without authorization is prohibited.</p>
                </section>
            </Auxil>
    );
    }
}

export default (Main);