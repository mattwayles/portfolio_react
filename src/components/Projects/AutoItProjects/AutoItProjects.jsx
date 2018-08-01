import React from 'react';
import Auxil from "../../../hoc/Auxil";
import EventLogBackup from "./EventLogBackup";
import UpdatePlusConsole from "./UpdatePlusConsole";
import UpdatePlusManager from "./UpdatePlusManager";

const autoItProjects = () => {

    return (
    <Auxil>
        <UpdatePlusManager />
        <UpdatePlusConsole />
        <EventLogBackup />
    </Auxil>)
};

export default autoItProjects;