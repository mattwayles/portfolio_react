import React from 'react';
import Auxil from "../../../hoc/Auxil";
import LiquidLab from "./LiquidLab";
import Yahtzee from "./Yahtzee";
import GoldESP from "./GoldESP";
import GCT from "./GCT";
import Scoreboard from "./Scoreboard";
import ScoreboardConfig from "./ScoreboardConfig";
import HikersWatch from "./HikersWatch";
import AcidRain from "./AcidRain";

const javaProjects = () => {

    return (
    <Auxil>
        <GoldESP />
        <GCT />
        <LiquidLab />
        <Scoreboard />
        <ScoreboardConfig />
        <AcidRain />
        <HikersWatch />
        <Yahtzee />
    </Auxil>)
};

export default javaProjects;