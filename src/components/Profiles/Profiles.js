import React from "react";
import { Profile } from "./Profile";
import { profilesStyle } from "./ProfilesStyle";
import { Data } from '../Data/Data'
import { AddTMButton } from "../Buttons/Profiles-addTM";
import { selectWorkers } from "../../state-redux/Store/Selectors";
import { useSelector } from "react-redux";


// Display Data and All profiles
export const Profiles = () => {
    let workers = useSelector(selectWorkers);

    // Get one profile for each worker
    const getWorkersProfiles = () => {
        let result = []
        for(let i = 0; i < workers.length; i++){
            result.push(<Profile worker={workers[i]} />)
        }
        return result;
    }
    return (
        <div style={profilesStyle}>
        <Data />
        {getWorkersProfiles()}
        <AddTMButton />
        </div>
    )
}