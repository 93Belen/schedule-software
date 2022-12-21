import React from "react";
import { useNavigate } from "react-router";
import { RemoveTMButton } from "../Buttons/removeTMButton";
import { AddProfile } from "./AddProfile";
import { departmentDiv, divElement, nameDiv, profileStyle, requestDiv, tableHead } from "./ProfileStyle";

// Display profile with each worker/prop => all of them are in Profiles
export const Profile = (props) => {
    let navigate = useNavigate();
    // Edit profile when clicked
    const onClick = (e) => {
        let clickedDiv = e.target;
        let confirm = window.confirm('Do you want to edit this profile?');
        if(confirm){
            // Get profile div even when clicking child element
            //console.log(clickedDiv);
            while(clickedDiv.className !== 'profileDiv'){
                clickedDiv = clickedDiv.parentNode;
            }
            //console.log(clickedDiv);
                    // Change profile div to form (current info in default value of each input)
        // Get profile's data divs
        let hoursAndPayDiv = clickedDiv.children[0];
        let knownDepartmentsDiv = clickedDiv.children[1];
        let setScheduleDiv = clickedDiv.children[2];

        // Turn divs into inputs
        clickedDiv.onClick = 'return';
        clickedDiv.innerHTML =  
            `<div className='profileDiv' style={profileStyle}>
                <div style={nameDiv}>
                    <h2>${worker.name}</h2>
                    <input type='number'></input>
                    <input type='number'></input>
                </div>
                <div style={departmentDiv}>
                    <h3 style={{gridColumn: '1/4'}}>Departments</h3>
                    <input type='text'></input>
                </div>
                <div style={requestDiv}>
                    <h4>Set Schedule</h4>
                    <input type='text'></input>
                </div>
            </div>`
        }


    }



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
        <div className='profileDiv' onClick={(e) => {onClick(e)}} style={profileStyle}>
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