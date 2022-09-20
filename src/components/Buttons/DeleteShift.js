import { deleteShiftButton } from "./ButtonsStyles";
import { useDispatch, useSelector } from "react-redux";
import { selectClickedElement, selectWeekSchedule, selectWorkers } from "../../state-redux/Store/Selectors";
import { useNavigate } from "react-router";

// Delete shift button in edit schedule form
export const DeleteShift = () => {
    let navigate = useNavigate();
    let dispatch = useDispatch();
    // Get shift to be deleted [day-department-shift]
    let clickedELement = useSelector(selectClickedElement).split("-");
    
    // Get name of worker
    let weekSchedule = useSelector(selectWeekSchedule);
    let name = weekSchedule[clickedELement[0]][clickedELement[1]][clickedELement[2]];
    // Get all workers
    let workers = useSelector(selectWorkers);

    // Event: delete shift
    const deleteOnClick = () => {
        // Add hours to workers hours left
        dispatch({type: 'workers/editHoursLeft', payload: {
            name: name,
            newInfo: -8
        }});
        // Remove shift from week schedule slice
        dispatch({type: 'weekSchedule/removeExtraShift', payload: {
            day: clickedELement[0],
            department: clickedELement[1],
            shift: clickedELement[2]
        }})
        // Get worker's profile
        let workerObj = workers.filter(item => item.name === name);
        // Add workers pay per hour to budget left
        dispatch({type: 'data/editAddBudgetLeft', payload: workerObj[0].payPerHour})

        // Once done, Go back to schedule
        navigate('/schedule', {replace: true});
    }

return <button onClick={deleteOnClick} style={deleteShiftButton}>Delete Shift</button>
}