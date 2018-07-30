import React from 'react';
import headshot from '../../assets/home/mattwayles.png';
import more from '../../assets/home/more/more.png';
import moreHover from '../../assets/home/more/more_hover.png';
import less from '../../assets/home/more/less.png';
import lessHover from '../../assets/home/more/less_hover.png';


import classes from './Main.css';
import Links from "../../components/Sections/Links/Links";
import Professional from "../../components/Sections/Professional/Professional";

class Main extends React.Component {
    state = {
        hover: false,
        moreExpanded: false
    };


    handleMore = () => {
        this.setState({ moreExpanded: !this.state.moreExpanded });
    };

    toggleHover = () => {
        console.log("Hover:" ,this.state.hover);
        this.setState({ hover: !this.state.hover });
    };

    render() {
        const {hover, moreExpanded } = this.state;

        return (
            <main className={classes.Main}>
                <section className={classes.Intro}>
                    <section className={classes.Headshot}>
                        <img src={headshot} alt="Broken" />
                    </section>
                    <section className={classes.NameTag}>
                        <header>Matthew Wayles</header>
                        <h2><em>Engineering with vision</em></h2>
                    </section>
                </section>
                <Links />
                <div className={classes.MoreDiv}>
                    {moreExpanded ? <img
                            className={classes.More}
                            onMouseEnter={this.toggleHover}
                            onMouseLeave={this.toggleHover}
                            onClick={this.handleMore}
                            src={hover? lessHover : less} alt="More..." />
                        : <img className={classes.More}
                               onMouseEnter={this.toggleHover}
                               onMouseLeave={this.toggleHover}
                               onClick={this.handleMore}
                               src={hover? moreHover : more} alt="More..." />}
                </div>
                {moreExpanded ? <Professional /> : null}
            </main>
        );
    }
}

export default (Main);