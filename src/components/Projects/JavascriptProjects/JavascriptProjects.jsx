import React from 'react';
import Auxil from "../../../hoc/Auxil";
import OrigPortfolio from "./OrigPortfolio";
import FunCalc from "./FunCalc";
import WikiView from "./WikiView";
import LocalWeather from "./LocalWeather";
import TwitchStream from "./TwitchStream";
import MotivationMachine from "./MotivationMachine";
import BurgerBuilder from "./BurgerBuilder";
import AuthTemplate from "./AuthTemplate";
import LiquidLab from "./LiquidLab";
import ShuckShare from "./ShuckShare";
import GoldESP from "./GoldESP";
import GCT from "./GCT";

const javascriptProjects = () => {

    return (
    <Auxil>
        <GoldESP />
        <GCT />
        <ShuckShare />
        <LiquidLab />
        <AuthTemplate />
        <BurgerBuilder />
        <MotivationMachine />
        <LocalWeather />
        <WikiView />
        <TwitchStream />
        <FunCalc />
        <OrigPortfolio />
    </Auxil>)
};

export default javascriptProjects;