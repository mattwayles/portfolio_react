import React from 'react';
import classes from '../ProjectStyle.css';
import burgerBuilderImg from '../../../assets/portfolio/JavaScript/burgerbuilder.jpg';

const burgerBuilder = () => (
    <section className={classes.Project}>
        <section className={classes.FlexRow}>
            <section className={classes.ProjectDiv}>
                <p className={classes.ProjectName}>Burger Builder</p>
                <p className={classes.ProjectDescription}>Hamburger building application with user authentication and storage. Written in
                    <span className={classes.Bold}> React.js</span>.</p>
                <ul className={classes.ProjectDescription}>
                    <li>Solo Educational Project</li>
                    <li>Course project in Udemy Advanced React/Redux class</li>
                    <li><a href="https://github.com/mattwayles/burgerbuilder" rel="noopener noreferrer"
                           target="_blank">Open Source</a></li>
                </ul>
            </section>
            <section className={classes.ProjectDiv}>
                <img className={classes.Image} src={burgerBuilderImg} alt="Burger Builder"/>
            </section>
        </section>
    </section>
);

export default burgerBuilder;