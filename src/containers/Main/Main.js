import React from 'react';
import downArrowImg from '../../assets/arrows/downArrow.png';

import classes from './Main.css';
import Auxil from "../../hoc/Auxil";
import posed from 'react-pose';
import MainNavigation from "../../components/MainNavigation/MainNavigation";

const TRANSITION_DURATION = 1500;
const ARROW_DURATION = 500;

const WelcomeImage = posed.section({
    divHidden: { opacity: 0 },
    divVisible: { opacity: 1, transition: { ease: 'easeIn', duration: TRANSITION_DURATION } }
});

const DescriptionLine = posed.p({
    descHidden: { width: 0 },
    descVisible: { width: "100%", transition: { ease: "easeIn", duration: TRANSITION_DURATION } }
});

const DownArrow = posed.img({
    arrowHidden: { opacity: 0, y: -100},
    arrowVisible:{ opacity: 1, y: 0 }
});

class Main extends React.Component {
    state = {
        currentLineNo: 1,
        currentArrowNo: 1,
        maxLineNo: 4,
        maxArrowNo: 3,
        originalWelcomeImageLoaded: false,
        coloredWelcomeImageLoaded: false,
        description: {
            line1: false,
            line2: false,
            line3: false,
            line4: false,
        },
        downArrows: {
            arrow1: false,
            arrow2: false,
            arrow3: false
        }
    };

    componentDidMount() {
        window.scrollTo(0,0);
        if (!this.state.originalWelcomeImageLoaded) {
            this.loadOriginalWelcomeImage();
        }
    }

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
        setTimeout(() => {this.state.currentLineNo <= this.state.maxLineNo ? this.displayDescriptionLine() : this.displayDownArrow()}, TRANSITION_DURATION - 500);

    };

    displayDownArrow =() => {
        const currentArrowNo = this.state.currentArrowNo;
        if (currentArrowNo <= this.state.maxArrowNo) {
            const arrow = "arrow" + this.state.currentArrowNo;
            this.setState({ downArrows: {...this.state.downArrows, [arrow]: true }, currentArrowNo: this.state.currentArrowNo + 1});
            setTimeout(() => {this.displayDownArrow()}, ARROW_DURATION)
        } else {
            setTimeout(() => {
                this.setState({ currentArrowNo: 1});
                this.removeDownArrow()}, ARROW_DURATION)
        }
    };

    removeDownArrow = () => {
        const arrow = "arrow" + this.state.currentArrowNo;
        this.setState({ downArrows: {...this.state.downArrows, [arrow]: false }, currentArrowNo: this.state.currentArrowNo + 1});

        if (this.state.currentArrowNo <= this.state.maxArrowNo) {
            setTimeout(() => {this.removeDownArrow()}, ARROW_DURATION)
        } else {
            setTimeout(() => {
                this.setState({ currentArrowNo: 1});
                this.displayDownArrow()}, ARROW_DURATION);
        }
    };

    render() {
        const {originalWelcomeImageLoaded, coloredWelcomeImageLoaded, description, downArrows} = this.state;

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
                <section className={classes.ScrollDivContainer}>
                    {window.pageYOffset < window.innerHeight / 2 ?  <section className={classes.ScrollDiv}>
                        <DownArrow pose={downArrows.arrow1 ? 'arrowVisible' : 'arrowHidden'} src={downArrowImg} />
                        <DownArrow pose={downArrows.arrow2 ? 'arrowVisible' : 'arrowHidden'} src={downArrowImg} />
                        <DownArrow pose={downArrows.arrow3 ? 'arrowVisible' : 'arrowHidden'} src={downArrowImg} />
                    </section> : null}
                </section>
                <MainNavigation />

            </Auxil>
    );
    }
}

export default (Main);