import React from 'react';
import posed from "react-pose";

import classes from './Button.css';


const TRANSITION_DURATION = 1000;
const BOUNCE_DURATION = 500;

/**
 * React-Pose poses for buttons [hidden, init, hover, press, bounce]
 */
const Button = posed.button({
    hoverable: true,
    pressable: true,
    hover: {scale: 1.1, color: "#fff", backgroundColor: "#779ecb"},
    press: {scale: 1, color: "#fff", backgroundColor: "#bbb", borderColor: "#bbb"},
    init: { opacity: 1, x: 0, scale: 1, color: "#779ecb", borderColor: "#779ecb", backgroundColor: "#FFF", transition: {ease: 'easeIn', duration: TRANSITION_DURATION}},
    bounce: {color: "#BBB", borderColor: "#BBB", scale: 1.05, transition: {ease: 'easeInOut', duration: BOUNCE_DURATION}},
    hiddenLeft: { opacity: 0, x: "-65vw"},
    hiddenRight: { opacity: 0, x: "65vw"},
});

/**
 * Display a Button that conforms to the style of the webpage
 * visible - Whether this button is currently visible or not
 * enter - The direction for this button to enter
 * click - Function to execute when the button is clicked
 * label - Button text
 * span - Bold text in the button text
 * suffix - Text immediately following bolded button label text
 */
const button = (props) => (
    <Button
        pose={props.visible ? props.bounce ? "bounce" : "init" : "left" === props.enter ? "hiddenLeft" : "hiddenRight"}
        onClick={props.click ? () => props.click(props.page) : null}
        className={props.classes + " " + classes.Button}>
        {props.label}
        <span style={{fontWeight: "bold"}}><em>{props.span}</em></span>
        {props.suffix}
    </Button>
);

export default button;