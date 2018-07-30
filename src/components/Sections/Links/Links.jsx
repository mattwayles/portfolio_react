import React from 'react';

import classes from './Links.css';
import {SocialIcon} from "react-social-icons";
import mcp480 from '../../../assets/home/certs/mcp_html.png';
import mcp410 from '../../../assets/home/certs/mcp_win2012.png';
import mcp680 from '../../../assets/home/certs/mcp_win7.png';
import aplus from '../../../assets/home/certs/sec+.png';
import netplus from '../../../assets/home/certs/net+.png';
import secplus from '../../../assets/home/certs/a+.png';

const links = () => (
    <section className={classes.Links}>
        <a href="https://www.microsoft.com/en-us/learning/exam-70-480.aspx"><img className={classes.Microsoft} src={mcp480} alt="JavaScript Certified" /></a>
        <a href="https://www.microsoft.com/en-us/learning/exam-70-410.aspx"><img className={classes.Microsoft} src={mcp410} alt="Server2012 Certified" /></a>
        <a href="https://www.microsoft.com/en-us/learning/exam-70-680.aspx"><img className={classes.Microsoft} src={mcp680} alt="Win7 Certified" /></a>
        <a href="https://certification.comptia.org/certifications/security"><img className={classes.Comptia} src={secplus} alt="Security+ Certified" /></a>
        <a href="https://certification.comptia.org/certifications/network"><img className={classes.Comptia} src={netplus} alt="Network+ Certified" /></a>
        <a href="https://certification.comptia.org/certifications/a"><img className={classes.Comptia} src={aplus} alt="A+ Certified" /></a>
        <br /><br /><br />
        <SocialIcon className={classes.SocialIcon} url='http://facebook.com/mwayles' />
        <SocialIcon className={classes.SocialIcon} url='http://www.github.com/mattwayles' />
        <SocialIcon className={classes.SocialIcon} url='https://www.linkedin.com/in/matthew-wayles-03354369' />
        <SocialIcon className={classes.SocialIcon} url='https://plus.google.com/u/0/101869636481098207270' />
        <SocialIcon className={classes.SocialIcon} url='https://codepen.io/LiquidIce25/' />
        <SocialIcon className={classes.SocialIcon} url='http://www.freecodecamp.com/mattwayles' />
    </section>
);

export default links;