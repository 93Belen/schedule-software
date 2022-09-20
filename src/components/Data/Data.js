import React from "react"
import { DataEditButton } from "../Buttons/Data-edit"
import { dataDiv, departmentsDiv } from "./dataStyles";
import { useSelector, useDispatch } from "react-redux";
import { selectData } from "../../state-redux/Store/Selectors";
import store from "../../state-redux/Store/Store.js";

// Display: Data => Budget, budget left, departments
export const Data = () => {
    let dispatch = useDispatch();
    // Get data
    let data = useSelector(selectData);
    // Display one p element with each department
    const displayDepartmens = (arrayOfDepartments) => {
        // Removes department from data and weekSchedule when clicked
        const removeDepartment = (e) => {
            let department = e.target.innerText;
            let confirm = window.confirm('Do you want to remove this department?');
            // Alert => confirm that you want to delete this department
            if(confirm){
                dispatch({type: 'data/removeDepartment', payload: department});
                dispatch({type: 'weekSchedule/removeDepartment', payload: department});
            }
            //console.log(store.getState());
        }
        let arr = [];
        arrayOfDepartments.forEach(department => {
            arr.push(<p onClick={(e) => {removeDepartment(e)}}>{department}</p>)
        });
        return arr;
    }
    return (
        <div style={dataDiv}>
            <h2>LABOR BUDGET</h2>
            <p style={{fontSize: '2rem', fontWeight: 'bold'}}>{data.weekBudget}</p>
            <h2>BUDGET LEFT</h2>
            <p style={{fontSize: '2rem', fontWeight: 'bold'}}>{data.budgetLeft}</p>
            <h2>DEPARTMENTS</h2>
            <div style={departmentsDiv}>
                {displayDepartmens(data.departments)}
            </div>
            <DataEditButton />
        </div>
    )
}
