import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectClickedElement, selectWeekSchedule, selectWorkers, selectWorkersWithHoursLeft } from "../../state-redux/Store/Selectors";
import { ExitButton } from "../Buttons/exit-button";
import store from '../../state-redux/Store/Store';
import { day, editScheduleDiv, editScheduleDivWeekendOption, namesDiv, title } from "./EditScheduleStyles";
import { DeleteShift } from "../Buttons/DeleteShift";
import { useNavigate } from "react-router";


// Edit-schedule-form
export const EditSchedule = () => {
    let navigate = useNavigate();

    // Get workers with hours left
    let workers = useSelector(selectWorkersWithHoursLeft);
    // Get all workers
    let allWorkers = useSelector(selectWorkers);
    // Get clicked element
    let id = useSelector(selectClickedElement);
    let dispatch = useDispatch();
    // Worker to be replaced when clicked
    let replacedWorker = document.getElementById(id).lastElementChild.innerHTML;
    // Get [day-department-shift] from clicked element
    let dayDepAndShiftArr = id.split('-');

    // Change selected worker
    const changeWorker = (e) => {
        // Add shift hours to changed worker's hours left
        dispatch({type: 'workers/editHoursLeft', payload: {
            name: replacedWorker,
            newInfo: -8
        }});
        // Get added worker
        let worker = e.target.innerHTML;
        // Add worker to week schedule slice
        dispatch({type: 'weekSchedule/editWorker', payload: {
            id: id,
            newWorker: worker
        }})
        // Substract hours from worker profiles
        dispatch({type: 'workers/editHoursLeft', payload: {
            name: worker,
            newInfo: 8
        }});

        // Get added worker object
        let workerObj = allWorkers.filter(item => item.name === worker);
        // Get replaced worker object
        let replacedWObj = allWorkers.filter(item => item.name === replacedWorker)
        // Change budget left acording to new added worker's pay per hour
        dispatch({type: 'data/editBudgetLeft', payload: workerObj[0].payPerHour})
        dispatch({type: 'data/editAddBudgetLeft', payload: replacedWObj[0].payPerHour})

        // Once done, go back to schedule
        navigate('/schedule', {replace: true});
    }
    
    // Get day
    let weekDay = dayDepAndShiftArr[0];
    // Get week schedule
    const week = useSelector(selectWeekSchedule);

    // Get workers with hours left to fill edit-schedule-form
    const getWorkersWithHoursLeft = () => {
        // Workers that have hours left and are not working that day
        let result = [];
        // Workers already working that day
        let alreadyWorking = [];
        // hours that the selected worker will cover
        let shiftToFillArr;

        // Loop throw departments of the selected day
        for(const department in week[weekDay]){
            // Loop throw shifts in each department
            for(const shift in week[weekDay][department]){
                // Add worker in each shift to array or workers that are already working that day
                alreadyWorking.push(week[weekDay][department][shift]);
                // Get hours of shift in array adn add it to hours-to-cover variable
                shiftToFillArr = shift.split('/');
            }
        }
        // Loop throw workers with hours left
        for(const worker in workers){
            // If is not working that day, its more than 12 hours since last shift finished and knows the department => add to options
            if(!alreadyWorking.includes(workers[worker].name) && workers[worker].lastShiftFinishAt - 12 <= shiftToFillArr[0] && workers[worker].departments.includes(dayDepAndShiftArr[1])){
                result.push(<p onClick={changeWorker}>{workers[worker].name}</p>)
            }
        }
        // Return workers that can cover shift
        return result;
    }
    // Display edit-schedule-form in different parts of the window depending what part of the schedule you are editing => So it's not covering the view
    if(dayDepAndShiftArr[0] === 'thursday' || dayDepAndShiftArr[0] === 'friday' || dayDepAndShiftArr[0] === 'saturday' || dayDepAndShiftArr[0] === 'sunday'){
        return (
            <div id='editScheduleDiv' style={editScheduleDivWeekendOption}>
                <ExitButton />
                <h2 style={title}>{dayDepAndShiftArr[1]}</h2>
                <p style={day}>{`${dayDepAndShiftArr[0]} - ${dayDepAndShiftArr[2]}`}</p>
                    <div style={namesDiv}>
                        {getWorkersWithHoursLeft()}
                        <DeleteShift />
                    </div>
            </div>
        )
    }
        return (
            <div id='editScheduleDiv' style={editScheduleDiv}>
                <ExitButton />
                <h2 style={title}>{dayDepAndShiftArr[1]}</h2>
                <p style={day}>{`${dayDepAndShiftArr[0]} - ${dayDepAndShiftArr[2]}`}</p>
                    <div style={namesDiv}>
                        {getWorkersWithHoursLeft()}
                        <DeleteShift />
                    </div>
            </div>
        )
}