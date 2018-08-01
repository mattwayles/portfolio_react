import React from 'react';
import Auxil from "../../../hoc/Auxil";
import LiquidLab from "./LiquidLab";
import Yahtzee from "./Yahtzee";
import GoldESP from "./GoldESP";
import GCT from "./GCT";

const javaProjects = () => {

    return (
    <Auxil>
        <GoldESP />
        <GCT />
        <LiquidLab />
        <Yahtzee />
    </Auxil>)
};

export default javaProjects;