import { useDispatch } from "react-redux";
import store from '../../state-redux/Store/Store';


// Add workers to schedule
export const FillSchedule = (weekSchedule, workersSelect) => {
    const dispatch = useDispatch();

    // Loop throw each day in schedule
    for(const day in weekSchedule){
        // Workers already working today
        let hasWorkedToday = [];
        // Loop trow each department in day
        for(const department in weekSchedule[day]){
            // Loop throw shifts in department
            for(const shift in weekSchedule[day][department]){
                // If shift is covered by worker with set schedule. Add worker to people working today
                if(weekSchedule[day][department][shift] !== null){
                    hasWorkedToday.push(weekSchedule[day][department][shift])
                }
                // If shift is not covered
                else if(weekSchedule[day][department][shift] === null) {
                    // Get worker that is not working today, and can work department and shift
                    let worker = getWorker(hasWorkedToday, workersSelect, shift, department);
                    // Add to people already working
                    hasWorkedToday.push(worker.name);
                    
                    // Substract hours from worker's hours left
                    dispatch({type: 'workers/editHoursLeft', payload: {
                            name: worker.name,
                            newInfo: 8
                        }});
                        // Get finish time of shift
                        let startAndFinishTimeArr = shift.split('/');
                        let finishTime = startAndFinishTimeArr[1];
                        // Update workers finish time of shift
                        dispatch({type: 'workers/editLastShiftFinishAt', payload: {
                            name: worker.name,
                            newInfo: finishTime
                        }})
                        // Update budget left
                        dispatch({type: 'data/editBudgetLeft', payload: worker.payPerHour})
                        
                        // Add worker to week schedule
                         dispatch({type: 'weekSchedule/addWorker', payload:{
                        name: worker.name,
                        day: day,
                        department: department,
                        shift: shift
                    }})
                }
            }
        }
    }
}

// Get worker that can cover shift
const getWorker = (hasWorked, workers, shift, department) => {
    let shiftHours = shift.split('/');
    let openingTime = shiftHours[0];
    // Get random worker
    let randomIndex = Math.floor(Math.random() * workers.length);
    // Add one each time that try a worker => Can't try more times that workers are
    let preventInfiniteLoop = 0;
    // Get a worker that fulfill conditions
    while(randomIndex === 0 || workers[randomIndex].setSchedule !== null || !workers[randomIndex].departments.includes(department) || hasWorked.includes(workers[randomIndex].name) || workers[randomIndex].hoursLeft < 8 || openingTime < (workers[randomIndex].lastShiftFinishAt - 12)){
         randomIndex = Math.floor(Math.random() * workers.length);
         // If there is not worker that fulfill conditions, return default worker => Let you know you don't have worker that can cover that shift
         if(preventInfiniteLoop > workers.length){
             return workers[0]
     }
     preventInfiniteLoop++;
}
// Return worker to cover shift
 return workers[randomIndex]
}