import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SocialIcon } from 'react-social-icons';
import headshot from '../../assets/mattwayles.png';
import mcp480 from '../../assets/certs/mcp_html.png';
import mcp410 from '../../assets/certs/mcp_win2012.png';
import mcp680 from '../../assets/certs/mcp_win7.png';
import aplus from '../../assets/certs/sec+.png';
import netplus from '../../assets/certs/net+.png';
import secplus from '../../assets/certs/a+.png';

import classes from './Main.css';
import Button from "../../components/ui/Button/Button";

class Main extends Component {

    handleFacebookClick = () => {
        window.open('http://www.facebook.com/mwayles', '_blank');
    };

    render() {
        return (
            <main className={classes.Main}>
                <section className={classes.Intro}>
                    <section className={classes.Headshot}>
                        <img src={headshot} alt="Image Broken" />
                    </section>
                    <section className={classes.NameTag}>
                        <header>Matthew Wayles</header>
                        <h2><em>Engineering with vision</em></h2>
                    </section>
                </section>
                <section className={classes.Links}>
                    <a href="https://www.microsoft.com/en-us/learning/exam-70-480.aspx"><img className={classes.Microsoft} src={mcp480} alt="JavaScript Certified" /></a>
                    <a href="https://www.microsoft.com/en-us/learning/exam-70-410.aspx"><img className={classes.Microsoft} src={mcp410} alt="Server2012 Certified" /></a>
                    <a href="https://www.microsoft.com/en-us/learning/exam-70-680.aspx"><img className={classes.Microsoft} src={mcp680} alt="Win7 Certified" /></a>
                    <a href="https://certification.comptia.org/certifications/security"><img className={classes.Comptia} src={secplus} alt="Security+ Certified" /></a>
                    <a href="https://certification.comptia.org/certifications/network"><img className={classes.Comptia} src={netplus} alt="Network+ Certified" /></a>
                    <a href="https://certification.comptia.org/certifications/a"><img className={classes.Comptia} src={aplus} alt="A+ Certified" /></a>
                    <br /><br /><br />
                    <SocialIcon style={{margin: '2%'}} url='http://facebook.com/mwayles' />
                    <SocialIcon style={{margin: '2%'}} url='http://www.github.com/mattwayles' />
                    <SocialIcon style={{margin: '2%'}} url='https://codepen.io/LiquidIce25/' />
                    <SocialIcon style={{margin: '2%'}} url='http://www.freecodecamp.com/mattwayles' />
                    <SocialIcon style={{margin: '2%'}} url='https://www.linkedin.com/in/matthew-wayles-03354369' />
                </section>
            </main>
        );
    }
}

const mapStateToProps = state => {
    return {

    }
};

export default connect(mapStateToProps)(Main);