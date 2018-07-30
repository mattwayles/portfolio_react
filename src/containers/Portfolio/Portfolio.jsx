import React from 'react';
import classes from './Portfolio.css';
import liquidLabJava from '../../assets/portfolio/liquidlab_java.jpg';

class Portfolio extends React.Component {
    render() {


        //Order into Java, C#, JavaScript, AutoIt


        return (
            <main className={classes.Main}>
                <p className={classes.Header}>Development Portfolio</p>
                <section className={classes.Project}>
                <section className={classes.FlexRow}>
                    <section>
                        <p className={classes.ProjectName}>LiquidLab (Java)</p>
                        <p className={classes.ProjectDescription}>Desktop DIY e-liquid calculator written in <span className={classes.Bold}>Java</span>
                            &nbsp;and <span className={classes.Bold}>JavaFX</span></p>
                        <ul>
                            <li>Solo project</li>
                            <li><a href="https://github.com/mattwayles/LiquidLabJava" rel="noopener noreferrer" target="_blank">Open Source</a></li>
                        </ul>
                    </section>
                    <img className={classes.Image} src={liquidLabJava} alt="LiquidLab" />
                    </section>
                </section>
            </main>
        );
    }
}

export default (Portfolio);