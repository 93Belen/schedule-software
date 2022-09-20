import React from "react";
import { ExitButtonStyles } from "./ButtonsStyles";
import { useDispatch } from 'react-redux';

// Remove team member profile
export const RemoveTMButton = (props) => {
    let dispatch = useDispatch();
    // Get profile clicked
    let worker = props.worker;
    // Display alert: Are you sure? yes/no
    const removeWorker = () => {
        let confirm = window.confirm(`Are you sure you want to remove ${worker} from you Team Members Profiles?`);
        if(confirm){
            // Remove worker from workers slice
            dispatch({type: 'workers/remove', payload: worker})
        }
    }
    return <button onClick={removeWorker} style={ExitButtonStyles}>X</button>
}