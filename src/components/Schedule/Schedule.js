import { FillSchedule} from './FillSchedule';
import { head, headLeft, headRight, schedule } from './ScheduleStyles';
import { useDispatch, useSelector } from 'react-redux';
import { selectMondaySchedule, selectTuesdaySchedule, selectWednesdaySchedule, selectThursdaySchedule, selectFridaySchedule, selectSaturdaySchedule, selectSundaySchedule, selectWeekSchedule, selectWorkers } from '../../state-redux/Store/Selectors';
import { useNavigate } from 'react-router-dom';
import { AddShift } from '../Buttons/AddShift';


// Display Schedule
export const Schedule = () => {
    // Get each day's schedule
    const monday = useSelector(selectMondaySchedule);
    const tuesday = useSelector(selectTuesdaySchedule);
    const wednesday = useSelector(selectWednesdaySchedule);
    const thursday = useSelector(selectThursdaySchedule);
    const friday = useSelector(selectFridaySchedule);
    const saturday = useSelector(selectSaturdaySchedule);
    const sunday = useSelector(selectSundaySchedule);
    const weekSchedule = useSelector(selectWeekSchedule);
    // Get all workers
    const workers = useSelector(selectWorkers);

    let navigate = useNavigate();
    let dispatch = useDispatch();

    // Fill up shifts in schedule
    FillSchedule(weekSchedule, workers);
    // console.log(store.getState())
    

    // Indicated day of the week being displayed by this function. At the end => id++
    let id = 1;

    // Display edit-schedule-form & set clicked element (shift to be edited)
    const goToEdit = (e) => {
        dispatch({type: 'clickedElement/changeClickedElement', payload: e.target.parentNode.id})
        navigate('/edit', {replace: true})
    }
    // Display department and shifts in each day
    const getDaySchedule = (day) => {
        let result = [];
        // Loop throw departments
        for(const department in day){
            // Display Department name and add-shift-button
            result.push(
            <div style={{display: 'grid', gridTemplateColumns: '90% 10%', gridTemplateRows: 'fit-content', rowGap: '0.7rem', gridAutoFlow: 'row', boxSizing: 'border-box', justifyContent: 'space-around'}}>
                <h3>{department}</h3>
                <AddShift />
            </div>
            )
            // Loop throw shifts in department
            for(const shift in day[department]){
                // Get name of day of the week based in id variable
                let weekDay;
                switch(id){
                    case 1:
                    weekDay = 'monday';
                    break;
                    case 2:
                    weekDay = 'tuesday';
                    break;
                    case 3:
                    weekDay = 'wednesday';
                    break;
                    case 4:
                    weekDay = 'thursday';
                    break;
                    case 5:
                    weekDay = 'friday';
                    break;
                    case 6:
                    weekDay = 'saturday';
                    break;
                    case 7:
                    weekDay = 'sunday';
                    break;
                }
                // Loop throw workers => If doesnt have set schedule -> add editing function /// If it has set schedule -> can't edit it
                for(const worker of workers){
                    if(worker.name === day[department][shift] && worker.setSchedule === null){
                        result.push(<div id={weekDay + '-' + [department] + '-' + shift} onClick={goToEdit} style={{display: 'flex', fontSize: '1.5rem', justifyContent: 'center', width: '100%'}}><p>{shift} -</p><p className={day[department][shift]} style={{color: 'black'}} id={`${weekDay}/${day[department][shift]}`}>{day[department][shift]}</p></div>)
            
                    }
                    else if(worker.name === day[department][shift] && worker.setSchedule !== null){
                        result.push(<div id={weekDay + '-' + [department] + '-' + shift} style={{display: 'flex', fontSize: '1.5rem', justifyContent: 'center', width: '100%'}}><p>{shift} -</p><p className={day[department][shift]} style={{color: 'darkred'}} id={`${weekDay}/${day[department][shift]}`}>{day[department][shift]}</p></div>)
                    }
                }
             }
        }
        // Add one for next day
        id++
        return result;
    }
    //console.log(store.getState())
        return (
            <div id='schedule' style={schedule}>
                <div>
                <h1 style={headLeft}>MONDAY</h1>
                    {getDaySchedule(monday)}
                </div>
                <div style={{borderStyle: 'none dashed none dashed', borderColor: 'hsla(0, 0%, 0%, 0.2)', borderWidth: '1px'}}>
                <h1 style={head}>TUESDAY</h1>
                    {getDaySchedule(tuesday)}
                </div>
                <div>
                <h1 style={head}>WEDNESDAY</h1>
                    {getDaySchedule(wednesday)}
                </div>
                <div style={{borderStyle: 'none dashed none dashed', borderColor: 'hsla(0, 0%, 0%, 0.2)', borderWidth: '1px'}}>
                <h1 style={head}>THURSDAY</h1>
                    {getDaySchedule(thursday)}
                </div>
                <div>
                <h1 style={head}>FRIDAY</h1>
                    {getDaySchedule(friday)}
                </div>
                <div style={{borderStyle: 'none dashed none dashed', borderColor: 'hsla(0, 0%, 0%, 0.2)', borderWidth: '1px'}}>
                <h1 style={head}>SATURDAY</h1>
                    {getDaySchedule(saturday)}
                </div>
                <div>
                <h1 style={headRight}>SUNDAY</h1>
                    {getDaySchedule(sunday)}
                </div>
            </div>
        )
}