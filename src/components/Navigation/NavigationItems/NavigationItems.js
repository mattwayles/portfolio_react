import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

import classes from './NavigationItems.css';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/contact">Contact</NavigationItem>
        <NavigationItem link="/resume">Resume</NavigationItem>
        <NavigationItem link="/personal">Personal</NavigationItem>
        <NavigationItem link="/">Home</NavigationItem>
    </ul>
);

export default navigationItems;