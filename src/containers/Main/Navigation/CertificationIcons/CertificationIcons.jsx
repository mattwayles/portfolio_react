import React from 'react';

import posed from "react-pose";
import classes from './CertificationIcons.css';
import oca from '../../../../assets/home/certs/oca.png'
import mcp480 from '../../../../assets/home/certs/mcp_html.png';
import mcp410 from '../../../../assets/home/certs/mcp_win2012.png';
import mcp680 from '../../../../assets/home/certs/mcp_win7.png';
import aplus from '../../../../assets/home/certs/sec+.png';
import netplus from '../../../../assets/home/certs/net+.png';
import secplus from '../../../../assets/home/certs/a+.png';


const TRANSITION_DURATION = 250;
const ROTATE_DURATION = 600;
const CERTIFICATION_COUNT = 7;

/**
 * React-Pose poses for Certification Icons [hidden, visible, hover] (browser-dependent)
 */
const Certificate = posed.img({
    init: { x: 0 },
    hidden: { x: "15vw" },
    visible: { x: 0, rotate: 0, transition: { ease: 'easeIn', duration:  TRANSITION_DURATION} },
    rotate: { rotate: 360, transition: { ease: 'easeIn', duration:  ROTATE_DURATION} },
});

/**
 * Render certification icons o nthe right side of the Navigation console
 */
class CertificationIcons extends React.Component {
    state = {
        currentRender: 1,
        cert1: {display: false, rotate: false},
        cert2: {display: false, rotate: false},
        cert3: {display: false, rotate: false},
        cert4: {display: false, rotate: false},
        cert5: {display: false, rotate: false},
        cert6: {display: false, rotate: false},
        cert7: {display: false, rotate: false}
    };

    /**
     * Analyze scroll position and render certifications if conditions are met
     */
    componentDidUpdate() {
        if (!this.state.cert1.display) {
            this.renderCertification(this.state.currentRender);
        }
    }

    /**
     * Render certifications slowly in a descending pattern
     * @param num
     */
    renderCertification = (num) => {
        if (num <= CERTIFICATION_COUNT) {
            const cert = "cert" + num;
            this.setState({[cert]: {...[cert], display: true}, currentRender: num + 1});
            setTimeout(() => this.renderCertification(num + 1), TRANSITION_DURATION);
        }
        else {
            setTimeout(() => this.rotateCertification(), 5000);
        }
    };

    /**
     * Rotate certifications on an interval to increase page livelihood
     */
    rotateCertification = () => {
        const min = Math.ceil(1);
        const max = Math.floor(CERTIFICATION_COUNT);
        const r = Math.floor(Math.random() * (max - min)) + min;
        const cert = "cert" + r;
        this.setState({[cert]: {display: true, rotate: true}});
        setTimeout(() => this.setState({[cert]: {display: true, rotate: false}}), ROTATE_DURATION);
        setTimeout(() => this.rotateCertification(), 5000);
    };

    render() {
        const {cert1, cert2, cert3, cert4, cert5, cert6, cert7} = this.state;

        return(
            <section className={classes.CertificationIcons}>
                <a href="https://education.oracle.com/oracle-certified-professional-java-se-7-programmer/trackp_155" rel="noopener noreferrer" target="_blank">
                  <Certificate pose={cert1.display ? cert1.rotate? "rotate" : "visible" : "hidden"} className={classes.CertificationIcon} src={oca} alt="" /></a>
                <a href="https://www.microsoft.com/en-us/learning/exam-70-480.aspx" rel="noopener noreferrer" target="_blank">
                    <Certificate pose={cert2.display ? cert2.rotate? "rotate" : "visible" : "hidden"} className={classes.CertificationIcon} src={mcp480} alt="" /></a>
                <a href="https://www.microsoft.com/en-us/learning/exam-70-410.aspx" rel="noopener noreferrer" target="_blank">
                    <Certificate pose={cert3.display ? cert3.rotate? "rotate" : "visible" : "hidden"} className={classes.CertificationIcon} src={mcp410} alt="" /></a>
                <a href="https://www.microsoft.com/en-us/learning/exam-70-680.aspx" rel="noopener noreferrer" target="_blank">
                    <Certificate pose={cert4.display ? cert4.rotate? "rotate" : "visible" : "hidden"} className={classes.CertificationIcon} src={mcp680} alt="" /></a>
                <a href="https://certification.comptia.org/certifications/security" rel="noopener noreferrer" target="_blank">
                    <Certificate pose={cert5.display ? cert5.rotate? "rotate" : "visible" : "hidden"} className={classes.CertificationIcon} src={secplus} alt="" /></a>
                <a href="https://certification.comptia.org/certifications/network" rel="noopener noreferrer" target="_blank">
                    <Certificate pose={cert6.display ? cert6.rotate? "rotate" : "visible" : "hidden"} className={classes.CertificationIcon} src={netplus} alt="" /></a>
                <a href="https://certification.comptia.org/certifications/a" rel="noopener noreferrer" target="_blank">
                    <Certificate pose={cert7.display ? cert7.rotate? "rotate" : "visible" : "hidden"} className={classes.CertificationIcon} src={aplus} alt="" /></a>
            </section>
        )}}

export default (CertificationIcons);