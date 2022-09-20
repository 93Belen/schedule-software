import React from "react";
import { SubmitDataButton } from "../Buttons/Submit-Data";
import { editDataDiv, departmentsDiv, input } from "./dataStyles";

// Edit-data-form
export const EditData = () => {
    return (
        <div style={editDataDiv}>
            <h2>LABOR BUDGET</h2>
            <input id='budget-input' style={{width: '15%', height: '13%', marginTop: '1rem', fontSize: '1.8rem'}} />
            <h2>DEPARTMENTS</h2>
            <div style={departmentsDiv}>
            <input placeholder="Department's name" id='department-input' style={{gridColumn: '1/3', width: '100%', height: '35%', marginTop: '1rem', fontSize: '1.8rem'}} />
            <input placeholder="Shifts - Ex: 6/2, 2/22" id='shift-input' style={{gridColumn: '1/3', width: '100%', height: '35%', marginTop: '1rem', fontSize: '1.8rem'}} />
            </div>
            <SubmitDataButton />
        </div>
    )
}