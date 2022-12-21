import { addButtonStyles} from "./ButtonsStyles";
import { useDispatch, useSelector } from "react-redux";
import { selectWorkers, selectWorkersWithHoursLeft } from "../../state-redux/Store/Selectors";
import { colors } from "../commonStyles";

// Add Extra Shift to Rota Button
export const AddShift = () => {
    let dispatch = useDispatch();
    // Get workers
    let allWorkers = useSelector(selectWorkers);
    // Get workers with hour left for the extra shift
    let workers = useSelector(selectWorkersWithHoursLeft);
    // Display form and get user input
    const getInputs = (e) => {

        // What AddShiftButton is being clicked? (day and department)
        let buttonClicked = e.target;

        // Create form elements
        let input = document.createElement('input');
        let inputWorker = document.createElement('select');
        let button = document.createElement('button');

        // Styles
        button.innerHTML = 'Add';
        button.style.gridColumn = '1/3';
        button.style.justifySelf = 'center';
        button.style.background = 'hsl(158, 95%, 17%)';
        button.style.color = 'hsl(30, 50%, 98%)';
        button.style.fontFamily = 'Nunito';
        button.style.borderRadius = '5px';
        button.style.borderStyle = 'none';
        button.style.fontSize = '1.4rem';
        button.style.width = '50%';
        button.style.height = '100%';
        button.style.justifyText = 'center';
        input.style.height = '2rem';
        input.placeholder = 'start/finish';
        inputWorker.style.height = '2rem';
        input.required = 'true';
        inputWorker.required = 'true';
        inputWorker.style.fontSize = '1.8rem';
        inputWorker.style.width = '180px'
        input.style.gridColumn = '1/3';
        inputWorker.style.gridColumn = '1/3';
        input.style.justifySelf = 'center';
        inputWorker.style.justifySelf = 'center';

        // Create options for select input
        for(const worker of workers){
            let option = document.createElement('option');
            option.innerHTML = worker.name;
            inputWorker.appendChild(option);
        }



        // If button is clicked for first time: display form and change button styles to "clicked"
        if(buttonClicked.nextSibling === null){
            buttonClicked.style.background = colors.white;
            buttonClicked.style.color = colors.orange;
            buttonClicked.innerHTML = '-';
            buttonClicked.after(button);
            buttonClicked.after(inputWorker);
            buttonClicked.after(input);
        }
        // If button is clicked for second time: remove form and change button styles to "unclicked"
        else {
            buttonClicked.style.background = colors.orange;
            buttonClicked.style.color = colors.white;
            buttonClicked.innerHTML = '+';
            buttonClicked.nextSibling.nextSibling.nextSibling.remove();
            buttonClicked.nextSibling.nextSibling.remove();
            buttonClicked.nextSibling.remove();
        }

        // When add-extra-shift-button is clicked:
        button.addEventListener('click', function(){
            // Get input
            let time = input.value;
            let worker = inputWorker.value;

            // Form validation
            // Field required
            if(!time){
                return window.alert('Plase, add the shift');
            }
            // Format required
            let hours = time.split('/');
            if(hours.length !== 2 || !/^[0-9]+$/.test(hours[0]) || !/^[0-9]+$/.test(hours[0])){
                return window.alert('Plase, add shift with required format: start/finish');
            }
            // Finish time is later than start time. In 24 hours format
            if(Number(hours[0]) > Number(hours[1])){
                return window.alert('Plase, add shift in 24 hours format');
            }


            // Change styles to original
            buttonClicked.style.background = colors.orange;
            buttonClicked.style.color = colors.white;
            buttonClicked.innerHTML = '+';

            // Remove form
            buttonClicked.nextSibling.nextSibling.nextSibling.remove();
            buttonClicked.nextSibling.nextSibling.remove();
            buttonClicked.nextSibling.remove();

            // Get hours worked
            let startAndFinish = time.split('/');
            let hoursWorked = Number(startAndFinish[1]) - Number(startAndFinish[0]);

            // Substract shift from worker
            dispatch({type: 'workers/editHoursLeft', payload: {
                name: worker,
                newInfo: hoursWorked
            }});

            // Get day and department where extra shift was added
            let day = buttonClicked.parentNode.parentNode.children[0].innerHTML.toLowerCase();
            let department = buttonClicked.parentNode.children[0].innerHTML;

            // Add extra shift to week schedule slice
            dispatch({type: 'weekSchedule/addWorker', payload:{
                name: worker,
                day: day,
                department: department,
                shift: time
            }})

            // Get worker profile
            let workerObj = allWorkers.filter(item => item.name === worker);
            // Substract workers pay per hour from weekly budget
            dispatch({type: 'data/editBudgetLeft', payload: workerObj[0].payPerHour * hoursWorked})
        })
        
    }
    
    return <button onClick={getInputs} style={addButtonStyles}>+</button>
}