import React from 'react';
import classes from './Footer.css';

const footer = () => (
    <section className={classes.Main}>
        <section className={classes.Footer}>
            <section className={classes.SocialIcons}>
                <a href={'http://facebook.com/mwayles'} rel="noopener noreferrer" target="_blank"><section className={classes.FacebookIcon}/></a>
                <a href={'http://www.github.com/mattwayles'} rel="noopener noreferrer" target="_blank"><section className={classes.GithubIcon}/></a>
                <a href={'https://www.linkedin.com/in/matthew-wayles-03354369'} rel="noopener noreferrer" target="_blank"><section className={classes.LinkedinIcon}/></a>
                <a href={'https://plus.google.com/u/0/101869636481098207270'} rel="noopener noreferrer" target="_blank"><section className={classes.GooglePlusIcon}/></a>
                <a href={'https://codepen.io/LiquidIce25/'} rel="noopener noreferrer" target="_blank"><section className={classes.CodepenIcon}/></a>
                <a href={'http://www.freecodecamp.com/mattwayles'} rel="noopener noreferrer" target="_blank"><section className={classes.FreeCodeCampIcon}/></a>
            </section>
            <p>© 11111100011</p>
            <p>All content is original and developed independently by Matthew Wayles.</p>
            <p>Feel free to use it, though. I consider that  a compliment.</p>
        </section>
    </section>


);


export default footer;