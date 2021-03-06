import React from 'react';
import classes from './HoveredLogo.css';

/**
 * When a Portfolio Project is hovered, display a backdrop containing information about the project
 * @param props The information about this particular hovered project
 * @returns {*}
 */
const hoveredLogo = (props) => (
    <section className={classes.ProjectDetails}>
            <p className={classes.ProjectTitle}>{props.title}</p>
            <section className={classes.FlexRow}>
                {props.tech.map((item) => {
                    return <p key={item} className={classes.ProjectTech}><em>{item}</em></p>
                })}
            </section>
            <section className={classes.Expand} onClick={() => props.clicked(props.projName)} />
    </section>
);


export default hoveredLogo;