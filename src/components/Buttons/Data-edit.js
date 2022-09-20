import React from "react";
import { DataEditButtonStyles } from "./ButtonsStyles";
import { useNavigate } from "react-router";

// Navigate to edit data form
export const DataEditButton = () => {
    let navigate = useNavigate();
    const editData = () => {
        navigate('/editData', {replace: true})
    }
    return <button onClick={editData} style={DataEditButtonStyles}>Edit data</button>
}