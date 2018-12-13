import React from 'react';
import classes from './Certifications.css';
import posed from "react-pose/lib/index";

import ocaBadge from '../../assets/certs/oca.png';
import htmlBadge from '../../assets/certs/mcp_html.png';
import win2012Badge from '../../assets/certs/mcp_win2012.png';
import win7Badge from '../../assets/certs/mcp_win7.png';
import secplusBadge from '../../assets/certs/sec+.png';
import netplusBadge from '../../assets/certs/net+.png';
import aplusBadge from '../../assets/certs/a+.png';

const TRANSITION_DURATION = 1000;
const SHOW_OCA_HEIGHT = 125;
const SHOW_MCP_HTML_HEIGHT = 140;
const SHOW_MCP_WIN2012_HEIGHT = 160;
const SHOW_MCP_WIN7_HEIGHT = 180;
const SHOW_SECPLUS_HEIGHT = 200;
const SHOW_NETPLUS_HEIGHT = 220;
const SHOW_APLUS_HEIGHT = 235;
    

/**
 * React-Pose poses for Certification sections [hidden, visible]
 */
const Certification = posed.section({
    visible: { opacity: 1, transition: {ease: 'easeIn', duration: TRANSITION_DURATION}},
    hidden: { opacity: 0 },
});

const Badge = posed.img({
    hoverable: true,
    hover: {scale: 1.2, rotate: 0, transition: {ease: 'easeIn', duration: TRANSITION_DURATION / 1.5}},
    visible: { opacity: 1, rotate: 360, scale: 1,transition: {ease: 'easeIn', duration: TRANSITION_DURATION}},
    hidden: { opacity: 0, rotate: 0, scale: 0 },
});

/**
 * Display Certificates component, a grid of pictures and descriptions
 */
class Certifications extends React.Component {
    state = {
        oca: false,
        html: false,
        win2012: false,
        win7: false,
        secplus: false,
        netplus: false,
        aplus: false
    };

    /**
     * Render sections only when they are scrolled to
     */
    componentDidUpdate() {
        const scrollPercent = this.props.scrollPercent;
        if (scrollPercent > SHOW_OCA_HEIGHT) {
            if (!this.state.oca) {
                this.setState({oca: true});
            }
            else if (scrollPercent > SHOW_MCP_HTML_HEIGHT && !this.state.html) {
                this.setState({html: true});
            }
            else if (scrollPercent > SHOW_MCP_WIN2012_HEIGHT && !this.state.win2012) {
                this.setState({win2012: true});
            }
            else if (scrollPercent > SHOW_MCP_WIN7_HEIGHT && !this.state.win7) {
                this.setState({win7: true});
            }
            else if (scrollPercent > SHOW_SECPLUS_HEIGHT && !this.state.secplus) {
                this.setState({secplus: true});
            }
            else if (scrollPercent > SHOW_NETPLUS_HEIGHT && !this.state.netplus) {
                this.setState({netplus: true});
            }
            else if (scrollPercent > SHOW_APLUS_HEIGHT && !this.state.aplus) {
                this.setState({aplus: true});
            }
        }
        else if (this.props.scrollPercent < SHOW_OCA_HEIGHT && this.state.oca) {
            this.setState({
                oca: false,
                html: false,
                win2012: false,
                win7: false,
                secplus: false,
                netplus: false,
                aplus: false });
        }
    }

    render() {
        const {oca, html, win2012, win7, secplus, netplus, aplus} = this.state;
        return (
            <section className={classes.Main}>
                <section className={classes.View} id={"view"}>
                <Certification pose={oca ? "visible" : "hidden"} className={classes.Certification}>
                    <a href="https://education.oracle.com/oracle-certified-professional-java-se-7-programmer/trackp_155" rel="noopener noreferrer" target="_blank">
                        <Badge pose={oca ? "visible" : "hidden"} className={classes.Badge} src={ocaBadge} alt={"OCA"} /></a>
                    <section className={classes.CertificationInfo}>
                        <a href="https://education.oracle.com/oracle-certified-professional-java-se-7-programmer/trackp_155" rel="noopener noreferrer" target="_blank">
                            <p className={classes.Title}>Oracle Certified Associate - Java 8</p>
                        </a>
                        <p className={classes.Details}>This certification verifies the ability to develop clean and efficient Java applications,
                            a proficiency in Java data types, operators, and decision control structures, and a demonstrable understanding of
                            encapsulation, class inheritance, polymorphism, and other core concepts in Java 8.</p>
                    </section>
                </Certification>

                <Certification pose={html ? "visible" : "hidden"} className={classes.Certification}>
                    <a href="https://www.microsoft.com/en-us/learning/exam-70-480.aspx" rel="noopener noreferrer" target="_blank">
                        <Badge pose={html ? "visible" : "hidden"} className={classes.Badge} src={htmlBadge} alt={"MS70-480"} /></a>
                    <section className={classes.CertificationInfo}>
                        <a href="https://www.microsoft.com/en-us/learning/exam-70-480.aspx" rel="noopener noreferrer" target="_blank">
                            <p className={classes.Title}>Microsoft Certified Professional - HTML, CSS, & Javascript</p>
                        </a>
                        <p className={classes.Details}>Measures skills in implementing and manipulating document structures and
                        objects using HTML5, styling with CSS3,and linking functionality using Javascript. Candidates must also
                        demonstrate a firm understanding of program flow, along with the ability to access and secure data using
                        modern web technologies.</p>
                    </section>
                </Certification>

                <Certification pose={win2012 ? "visible" : "hidden"} className={classes.Certification}>
                    <a href="https://www.microsoft.com/en-us/learning/exam-70-410.aspx" rel="noopener noreferrer" target="_blank">
                        <Badge pose={win2012 ? "visible" : "hidden"} className={classes.Badge} src={win2012Badge} alt={"MS70-410"} /></a>
                    <section className={classes.CertificationInfo}>
                        <a href="https://www.microsoft.com/en-us/learning/exam-70-410.aspx" rel="noopener noreferrer" target="_blank">
                            <p className={classes.Title}>Microsoft Certified Professional - Windows Server 2012</p>
                        </a>
                        <p className={classes.Details}>Demonstrates a proficiency in installing, configuring, and managing Windows
                        Server 2012. This certification requires knowledge of server/client communication, Windows Server roles and features,
                        Hyper-V configuration, core network services, Active Directory administration, Group Policy management, and more.</p>
                    </section>
                </Certification>

                <Certification pose={win7 ? "visible" : "hidden"} className={classes.Certification}>
                    <a href="https://www.microsoft.com/en-us/learning/exam-70-680.aspx" rel="noopener noreferrer" target="_blank">
                        <Badge pose={win7 ? "visible" : "hidden"} className={classes.Badge} src={win7Badge} alt={"MS70-680"} /></a>
                    <section className={classes.CertificationInfo}>
                        <a href="https://www.microsoft.com/en-us/learning/exam-70-680.aspx" rel="noopener noreferrer" target="_blank">
                            <p className={classes.Title}>Microsoft Certified Professional - Windows 7</p>
                        </a>
                        <p className={classes.Details}>The MS-70-680 exam separates professional Windows 7 administrators from casual users.
                        In addition to installing, configuring, managing, migrating and deploying Windows 7 in enterprise environments,
                        certificate holders have demonstrated their ability to configure hardware and applications, network connectivity,
                        access control, mobile computing, and backup/recovery options.</p>
                    </section>
                </Certification>

                <Certification pose={secplus ? "visible" : "hidden"} className={classes.Certification}>
                    <a href="https://certification.comptia.org/certifications/security" rel="noopener noreferrer" target="_blank">
                        <Badge pose={secplus ? "visible" : "hidden"} className={classes.Badge} src={secplusBadge} alt={"Security+"} /></a>
                    <section className={classes.CertificationInfo}>
                        <a href="https://certification.comptia.org/certifications/security" rel="noopener noreferrer" target="_blank">
                            <p className={classes.Title}>CompTIA Security+</p>
                        </a>
                        <p className={classes.Details}>Global certification that validates the
                            baseline skills you need to perform core security functions and pursue an IT security career.
                            It establishes the core knowledge required of any cybersecurity role and provides a springboard
                            to intermediate-level cybersecurity jobs. Security+ incorporates best practices in hands-on trouble-shooting
                            to ensure security professionals have practical security problem-solving skills</p>
                    </section>
                </Certification>

                <Certification pose={netplus ? "visible" : "hidden"} className={classes.Certification}>
                    <a href="https://certification.comptia.org/certifications/network" rel="noopener noreferrer" target="_blank">
                        <Badge pose={netplus ? "visible" : "hidden"} className={classes.Badge} src={netplusBadge} alt={"Network+"} /></a>
                    <section className={classes.CertificationInfo}>
                        <a href="https://certification.comptia.org/certifications/network" rel="noopener noreferrer" target="_blank">
                            <p className={classes.Title}>CompTIA Network+</p>
                        </a>
                        <p className={classes.Details}>Network+ ensures an IT professional has the knowledge and skills to
                            design and implement functional networks , configure, manage, and maintain essential network devices,
                            use devices such as switches and routers to segment network traffic and create resilient networks,
                            identify benefits and drawbacks of existing network configurations, implement network security, standards, and protocols,
                            troubleshoot network problems, and support the creation of virtualized networks.</p>
                    </section>
                </Certification>

                <Certification pose={aplus ? "visible" : "hidden"} className={classes.Certification}>
                    <a href="https://certification.comptia.org/certifications/a" rel="noopener noreferrer" target="_blank">
                        <Badge pose={aplus ? "visible" : "hidden"} className={classes.Badge} src={aplusBadge} alt={"A+"} /></a>
                    <section className={classes.CertificationInfo}>
                        <a href="https://certification.comptia.org/certifications/a" rel="noopener noreferrer" target="_blank">
                            <p className={classes.Title}>CompTIA A+</p>
                        </a>
                        <p className={classes.Details}>The preferred qualifying credential for technical support and IT operational roles.
                            Candidates are better prepared to troubleshoot and problem solving. Technicians understand a wide variety of issues
                            ranging from networking and operating systems to mobile devices and security. A+ supports the ability to connect
                            users to the data they need to do their jobs regardless of the devices being used.</p>
                    </section>
                </Certification>
                </section>
            </section>
        );
    }
}

export default Certifications;