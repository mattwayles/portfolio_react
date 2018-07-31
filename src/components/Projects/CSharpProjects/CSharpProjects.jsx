import React from 'react';
import Auxil from "../../../hoc/Auxil";
import VersionCheck from "./VersionCheck";
import ExpireGuard from "./ExpireGuard";
import ShutdownInitiator from "./ShutdownInitiator";

const cSharpProjects = () => {

    return (
    <Auxil>
        <ExpireGuard />
        <VersionCheck />
        <ShutdownInitiator />
    </Auxil>)
};

export default cSharpProjects;