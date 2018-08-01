import React from 'react';
import headshot from '../../assets/home/mattwayles.png';


import classes from './Main.css';
import Links from "../../components/Sections/Links/Links";
import Professional from "../../components/Sections/Professional/Professional";

class Main extends React.Component {
    componentWillMount() {
        window.scroll(0,0);
    }

    render() {

        return (
            <section className={classes.Main}>
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
                 <Professional />
            </section>
        );
    }
}

export default (Main);