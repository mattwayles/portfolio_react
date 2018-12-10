import React from 'react';
import classes from './HoveredLogo.css';

import expand from '../../../assets/arrows/expandArrow.png';


const hoveredLogo = (props) => (
    <section onMouseLeave={() => props.unhover(props.projName)} style={{backgroundImage: `url(${props.bgImg}`}} className={classes.ProjectDetails}>
        <section className={classes.Backdrop}>
            <p className={classes.ProjectTitle}>{props.title}</p>
            <section className={classes.FlexRow}>
                {props.tech.map((item) => {
                    return <p key={item} className={classes.ProjectTech}><em>{item}</em></p>
                })}
            </section>
            <img className={classes.Expand} onClick={() => props.clicked(props.projName)} src={expand} alt={"+"} />
        </section>
    </section>
);


export default hoveredLogo;