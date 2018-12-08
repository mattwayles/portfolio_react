import React from 'react';
import posed from "react-pose";

import classes from './Button.css';

const Button = posed.button({
    hoverable: true,
    pressable: true,
    init: { opacity: 1, x: 0, scale: 1, color: "#779ecb", borderColor: "#779ecb", backgroundColor: "#FFF"},
    hover: {scale: 1.1, color: "#fff", backgroundColor: "#779ecb"},
    press: {scale: 1, color: "#fff", backgroundColor: "#bbb", borderColor: "#bbb"},
    hiddenLeft: { opacity: 0, x: "-15vw"},
    hiddenRight: { opacity: 0, x: "15vw"},
});

const button = (props) => (
    <Button
        pose={props.visible ? "init" : "left" === props.enter ? "hiddenLeft" : "hiddenRight"}
        onClick={props.click ? () => props.click(props.page) : null}
        className={classes.Button}>
        {props.label}
        <span style={{fontWeight: "bold"}}><em>{props.span}</em></span>
        {props.suffix}
    </Button>
);

export default button;