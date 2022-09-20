import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../initialState";
import store from "../Store/Store";

const options = {
    name: 'weekSchedule',
    initialState: initialState.weekSchedule,
    reducers: {
        addDepartment: (state, action) => {
            for(const day in state){
                state[day][action.payload] = {}
            }
        },
        addShifts: (state, action) => {
            for(const day in state){
                for(const department in state[day]){
                    if(department === action.payload.department){
                        state[day][department] = action.payload.shift;
                    }
                }
            }
        },
        addWorker: (state, action) => {
            state[action.payload.day][action.payload.department][action.payload.shift] = action.payload.name
        },
        editWorker: (state, action) => {
            let traceArr = action.payload.id.split('-');
            let day = traceArr[0];
            let department = traceArr[1];
            let shift =  traceArr[2]
    
            state[day][department][shift] = action.payload.newWorker;
        },
        removeExtraShift: (state, action) => {
            delete state[action.payload.day][action.payload.department][action.payload.shift]
        },
        removeDepartment: (state, action) => {
            for(const day in state){
                delete state[day][action.payload]
            }
        }
    }
}
const weekScheduleSlice = createSlice(options);
export const {addDepartment, addWorkers, editWorker, removeExtraShift, addShifts, removeDepartment} = weekScheduleSlice.actions;
export default weekScheduleSlice.reducer;