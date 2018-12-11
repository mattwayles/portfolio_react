import React from 'react';
import posed from 'react-pose';
import classes from './DownArrows.css';
import downArrowImg from '../../../assets/arrows/downArrow.png';

const ARROW_DURATION = 500;

/**
 * React-Pose poses for DownArrow [hidden, visible]
 */
const DownArrow = posed.img({
    arrowHidden: { opacity: 0, y: "-2vh"},
    arrowVisible:{ opacity: 1, y: 0 }
});

/**
 * Display a group of three animated down arrows
 */
class DownArrows extends React.Component {
    state = {
        currentArrowNo: 1,
        maxArrowNo: 3,
        downArrows: {
            arrow1: false,
            arrow2: false,
            arrow3: false
        }
    };

    /**
     * Display arrows on mount
     */
    componentDidMount() {
        this.displayDownArrow();
    }

    /**
     * Manage the state and use logic to decice what to render
     */
    displayDownArrow = () => {
        const currentArrowNo = this.state.currentArrowNo;
        if (currentArrowNo <= this.state.maxArrowNo) {
            const arrow = "arrow" + this.state.currentArrowNo;
            this.setState({
                downArrows: {...this.state.downArrows, [arrow]: true},
                currentArrowNo: this.state.currentArrowNo + 1
            });
            setTimeout(() => {
                this.displayDownArrow()
            }, ARROW_DURATION)
        } else {
            setTimeout(() => {
                this.setState({currentArrowNo: 1});
                this.removeDownArrow()
            }, ARROW_DURATION)
        }
    };

    /**
     * Remove arrows
     */
    removeDownArrow = () => {
        const arrow = "arrow" + this.state.currentArrowNo;
        this.setState({
            downArrows: {...this.state.downArrows, [arrow]: false},
            currentArrowNo: this.state.currentArrowNo + 1
        });

        if (this.state.currentArrowNo <= this.state.maxArrowNo) {
            setTimeout(() => {
                this.removeDownArrow()
            }, ARROW_DURATION)
        } else {
            setTimeout(() => {
                this.setState({currentArrowNo: 1});
                this.displayDownArrow()
            }, ARROW_DURATION);
        }
    };

    render() {
        const {downArrows} = this.state;
        return (
            <section className={classes.ScrollDivContainer}>
                <section onClick={this.props.click} className={classes.ScrollDiv}>
                    <DownArrow pose={downArrows.arrow1 ? 'arrowVisible' : 'arrowHidden'} src={downArrowImg}/>
                    <DownArrow pose={downArrows.arrow2 ? 'arrowVisible' : 'arrowHidden'} src={downArrowImg}/>
                    <DownArrow pose={downArrows.arrow3 ? 'arrowVisible' : 'arrowHidden'} src={downArrowImg}/>
                </section>
            </section>)
    }
}

export default (DownArrows);