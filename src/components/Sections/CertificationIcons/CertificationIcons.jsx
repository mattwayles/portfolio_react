import React from 'react';

import classes from './CertificationIcons.css';
import oca from '../../../assets/home/certs/oca.png'
import mcp480 from '../../../assets/home/certs/mcp_html.png';
import mcp410 from '../../../assets/home/certs/mcp_win2012.png';
import mcp680 from '../../../assets/home/certs/mcp_win7.png';
import aplus from '../../../assets/home/certs/sec+.png';
import netplus from '../../../assets/home/certs/net+.png';
import secplus from '../../../assets/home/certs/a+.png';

const certificationIcons = () => (
    <section className={classes.Links}>
        <a href="https://education.oracle.com/oracle-certified-professional-java-se-7-programmer/trackp_155"><img className={classes.Oracle} src={oca} alt="Oracle Certified Java Programmer" /></a>
        <a href="https://www.microsoft.com/en-us/learning/exam-70-480.aspx"><img className={classes.Microsoft} src={mcp480} alt="JavaScript Certified" /></a>
        <a href="https://www.microsoft.com/en-us/learning/exam-70-410.aspx"><img className={classes.Microsoft} src={mcp410} alt="Server2012 Certified" /></a>
        <a href="https://www.microsoft.com/en-us/learning/exam-70-680.aspx"><img className={classes.Microsoft} src={mcp680} alt="Win7 Certified" /></a>
        <a href="https://certification.comptia.org/certifications/security"><img className={classes.Comptia} src={secplus} alt="Security+ Certified" /></a>
        <a href="https://certification.comptia.org/certifications/network"><img className={classes.Comptia} src={netplus} alt="Network+ Certified" /></a>
        <a href="https://certification.comptia.org/certifications/a"><img className={classes.Comptia} src={aplus} alt="A+ Certified" /></a>
    </section>
);

export default certificationIcons;