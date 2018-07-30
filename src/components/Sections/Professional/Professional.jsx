import React from 'react';
import fullStack from '../../../assets/home/fullStack.png';
import crossPlatform from '../../../assets/home/cross_platform.png';
import cloud from '../../../assets/home/cloud.jpg';
import years from '../../../assets/Placeholder.png';
import classes from './Professional.css';

const professional = () => (
    <section className={classes.Grid}>
        <section className={classes.FlexRow}>
            <section className={classes.Statement}><span className={classes.bold}>Full-Stack</span> software engineer<br />(Military and Commercial)</section>
            <img className={classes.Image} src={fullStack} alt="Full Stack Engineer" />
        </section>
        <section className={classes.FlexRow}>
            <img className={classes.Image} src={crossPlatform} alt="Cross Platform" />
            <section className={classes.Statement}>Cross-platform&nbsp;
                <span className={classes.bold}>desktop, web,</span> and <span className={classes.bold}>mobile</span>
                &nbsp;applications</section>
        </section>
        <section className={classes.FlexRow}>
            <section className={classes.Statement}>Cloud deployment experience, including custom <span className={classes.bold}>Docker</span> images</section>
            <img className={classes.CloudImage} src={cloud} alt="Cloud Experience" />
        </section>
        <section className={classes.FlexRow}>
            <img className={classes.YearsImage} src={years} alt="Years" />
            <section className={classes.Statement}><span className={classes.bold}>6</span> years of professional experience<br />
                <span className={classes.bold}>4</span> years of educational experience</section>
        </section>
    </section>
);

export default professional;