import React from "react";
import { useDispatch } from "react-redux";
import { addTMButtonFormStyle } from "./ButtonsStyles";
import { useNavigate } from "react-router";

// Submit-Team-Member Button in Add-Team-Member-Form
export const AddProfileButton = () => {
    let dispatch = useDispatch();
    let navigate = useNavigate();
    // When click: add Team Member to Profiles
    const addProfile = (e) => {
        e.preventDefault();
        // Get inputs
        let name = document.getElementById('nameInput').value;
        let departments = document.getElementById('departmentsInput').value.split(', ');
        let setSchedule = document.getElementById('setScheduleInput').value.split(', ');
        let payPerHour = document.getElementById('payPerHourInput').value;
        let hoursPerWeek = document.getElementById('hoursPerWeekInput').value;
        let setScheduleObj = {};

        // Loop throw days in Set Schedule
        for(const dayTime of setSchedule){
            let dayTimeArr = dayTime.split(':');
            let day = dayTimeArr[0];
            let time = dayTimeArr[1];
            // Add setSchedule as object with day:time
            setScheduleObj[day.toLowerCase()] = time;
        }
        // Store info in object
        let profile = {
            name: name,
            payPerHour: payPerHour,
            departments: departments,
            hoursPerWeek: hoursPerWeek,
            hoursLeft: hoursPerWeek,
            lastShiftFinishAt: 0,
            setSchedule: setScheduleObj
        }
        // Add Worker to workers slice
        dispatch({type: 'workers/add', payload: profile})
            // Add Worker with set Schedule to week schedule slice * choose random department out of options
            for(const day in profile.setSchedule){
                let randomIndex = Math.floor(Math.random() * profile.departments.length)
                if(profile.setSchedule[day] !== undefined){
                dispatch({type: 'weekSchedule/addWorker', payload: {
                    day: day,
                    department: profile.departments[randomIndex],
                    shift: profile.setSchedule[day],
                    name: profile.name
                }})
                }
        }
        // Once profile is added, go back to Profiles
        navigate('/profiles', {replace: true});
    }
    return <button onClick={(e) => {
        addProfile(e)
    }} style={addTMButtonFormStyle}>Add To The Team!</button>
}
