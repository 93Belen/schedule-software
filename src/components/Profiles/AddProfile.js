import React from "react";
import { AddProfileButton } from "../Buttons/AddProfileButton";
import { ExitButtonProfiles } from "../Buttons/profiles-exit-button";
import { addProfileStyle, addTMh3, addTMInput } from "./ProfileStyle";

// Display Add-profile-form
export const AddProfile = () => {
    return (
        <div style={addProfileStyle}>
            <div></div>
            <ExitButtonProfiles />
            <h3 style={addTMh3}>Name</h3>
            <input id='nameInput' type='text' required style={addTMInput} placeholder='Name *'></input>
            <h3 style={addTMh3}>Departments</h3>
            <input id='departmentsInput' type='text' required style={addTMInput}  placeholder='Ex: Department 1, Department 2 *'></input>
            <h3 style={addTMh3}>Set Schedule</h3>
            <input id='setScheduleInput' type='text' style={addTMInput}  placeholder='Day:start/finish, Day:start/finish'></input>
            <h3 style={addTMh3}>Pay Per Hour</h3>
            <input id='payPerHourInput' type='number' placeholder='*' required style={addTMInput} ></input>
            <h3 style={addTMh3}>Hours Per Week</h3>
            <input id='hoursPerWeekInput' type='number' placeholder='*' required style={addTMInput} ></input>
            <AddProfileButton />
        </div>
    )
}

// {
//     name: 'Belen Garcia',
//     payPerHour: 15,
//     departments: ['Department 01', 'Department 02', 'Department 03'],
//     hoursPerWeek: 28,
//     hoursLeft: 0,
//     lastShiftFinishAt: 0,
//     setSchedule: {
//         wednesday: '8/16',
//         saturday: '8/16',
//         sunday: '8/16'
//     }
// }