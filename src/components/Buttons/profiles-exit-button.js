import React from "react";
import { ExitButtonStyles } from "./ButtonsStyles";
import { useNavigate } from "react-router";

// Exit add-profile-form and navigates back to profiles
export const ExitButtonProfiles = () => {
    let navigate = useNavigate();
    const exitAddTM = () =>{
        navigate('/profiles', {replace: true})
    }
    return <button onClick={exitAddTM} style={ExitButtonStyles}>X</button>
}