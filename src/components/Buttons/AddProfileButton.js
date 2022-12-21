import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTMButtonFormStyle } from "./ButtonsStyles";
import { useNavigate } from "react-router";
import { selectDataDepartments } from "../../state-redux/Store/Selectors";

// Submit-Team-Member Button in Add-Team-Member-Form
export const AddProfileButton = () => {
    let dispatch = useDispatch();
    let navigate = useNavigate();
    let dataDepartments = useSelector(selectDataDepartments);
    
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

        
        // Form validation
        if(!name || !departments || !payPerHour || !hoursPerWeek){
            return window.alert('Plase fill up all the required fields');
        }
        // Check all inputs have correct format and data type
        let hasNumbers = /\d/;

        // If name contains numbers
        if(hasNumbers.test(name)){
            return window.alert('Plase, add a name that does not contain numbers');
        }
        
        // Check that all departments in worker's profile are existing departments
        // Count how many departments are invalid
        let invalidDepartments = [];
        // Loop throw worker's departments
        for(const department of departments){
            if(!dataDepartments.includes(department)){
                invalidDepartments.push(department);
            }
        }
        if(invalidDepartments.length > 0){
            return window.alert(`${invalidDepartments[0]} is not a department`)
        }

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
    return <button type="submit" onClick={(e) => {
        addProfile(e)
    }} style={addTMButtonFormStyle}>Add To The Team!</button>
}
