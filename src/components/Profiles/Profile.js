import React from "react";
import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";
import { selectWorkers } from "../../state-redux/Store/Selectors";
import { ExitButton } from "../Buttons/exit-button";
import { RemoveTMButton } from "../Buttons/removeTMButton";
import { departmentDiv, divElement, nameDiv, profileStyle, requestDiv, tableHead } from "./ProfileStyle";

// Display profile with each worker/prop => all of them are in Profiles
export const Profile = (props) => {
    // Worker to be displayed
    let worker = props.worker;
    // Get one p element for each department
    const getDepartments = () => {
        let result = [];
        for(const department of worker.departments){
            result.push(<p>{department}</p>)
        }
        return result;
    }

    // If worker has set schedule, display
    const getSetSchedule = () => {
        let result = [];
        if(worker.setSchedule !== null){
            for(const day in worker.setSchedule){
                result.push(<tr style={{background: 'lightgray'}}><td>{day}</td><td>{worker.setSchedule[day]}</td></tr>)
            }
        }
        return result
    }
    return (
        <div style={profileStyle}>
            <div style={nameDiv}>
                <h2>{worker.name}</h2>
                <RemoveTMButton worker={worker.name} />
                <p>{worker.payPerHour} $/hour & {worker.hoursPerWeek} h/week</p>
            </div>
            <div style={departmentDiv}>
            <h3 style={{gridColumn: '1/4'}}>Departments</h3>
                {getDepartments()}
            </div>
            <div style={requestDiv}>
            <h4>Set Schedule</h4>
            <table>
                   <thead style={tableHead}>
                       <th>Day</th>
                       <th>Shift</th>
                   </thead>
                   <tbody>
                   {getSetSchedule()}
                   </tbody>
            </table>
            </div>
        </div>
    )
}