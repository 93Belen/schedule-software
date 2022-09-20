import React from "react";
import { DataEditButtonStyles } from "./ButtonsStyles";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";


// Update-data-button in edit-data-form
export const SubmitDataButton = () => {
    let dispatch = useDispatch();
    let navigate = useNavigate();
    // Update when clicked
    const editData = () => {
        // Get inputs
        let budget = Number(document.getElementById('budget-input').value);
        let department = document.getElementById('department-input').value;
        let shifts = document.getElementById('shift-input').value;

        // If budget was updated
        if(budget){
            dispatch({type: 'data/updateBudgetLeft', payload: budget});
            dispatch({type: 'data/editWeekBudget', payload: budget});
        }
        // If department was added
        if(department){
            // Get shifts input and make it an object
            let arrOfShifts = shifts.split(', ');
            let shiftObj = {};
            for(const shift of arrOfShifts){
                shiftObj[shift] = null;
            }
            // Add department to data slice
            dispatch({type: 'data/addDepartment', payload: department})
            // Add department and shifts to week schedule slice
            dispatch({type: 'weekSchedule/addDepartment', payload: department})
            dispatch({type: 'weekSchedule/addShifts', payload: {
                department: department,
                shift: shiftObj
            }})
        } 
        // Once done, go back to profiles
        navigate('/profiles', {replace: true})
    }
    return <button onClick={editData} style={DataEditButtonStyles}>Enter Data</button>
}