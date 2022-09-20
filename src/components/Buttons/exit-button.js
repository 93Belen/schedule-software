import React from "react";
import { ExitButtonStyles } from "./ButtonsStyles";
import { useNavigate } from "react-router";

// Exit from edit schedule and navigates back to schedule
export const ExitButton = () => {
    let navigate = useNavigate();
    const exitEditSchedule = () =>{
        navigate('/schedule', {replace: true})
    }
    return <button onClick={exitEditSchedule} style={ExitButtonStyles}>X</button>
}