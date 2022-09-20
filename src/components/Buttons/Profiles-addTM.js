import React from "react";
import { profileStyle } from "../Profiles/ProfileStyle";
import { AddTMButtonStyles } from "./ButtonsStyles";
import { useNavigate } from 'react-router-dom';

// Button display Add-Team-Member-Form
export const AddTMButton = () => {
    let navigate = useNavigate();
    const addWorker = () => {
        navigate('/addTM', {replace: true})
    }
    return(
        <div style={profileStyle}>
            <button onClick={addWorker} style={AddTMButtonStyles}>Add Team Member</button>
        </div>
    )
}