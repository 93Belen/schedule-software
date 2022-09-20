import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../initialState";


const options = {
    name: 'workers',
    initialState: initialState.workers,
    reducers: {
        editName: (state, action) => {
            return [
                ...state.map(worker => {
                    if(worker.name === action.payload.name){
                        worker.name = action.payload.newInfo
                    }
                })
            ];
        },
        editPayPerHour: (state, action) => {
            return [
                ...state.map(worker => {
                    if(worker.name === action.payload.name){
                        worker.payPerHour = action.payload.newInfo
                    }
                })
            ];
        },
        addDepartment: (state, action) => {
            return [
                ...state.map(worker => {
                    if(worker.name === action.payload.name){
                    worker.departments.push(action.payload.department)
                    }
                })
            ];
        },
        removeDepartment: (state, action) => {
            return [
                ...state.map(worker => {
                    if(worker.name === action.payload.name){
                        worker.departments = worker.departments.filter(department => department !== action.payload.department)
                    }
                })
            ];
        },
        editHoursPerWeek: (state, action) => {
            return [
                ...state.map(worker => {
                    if(worker.name === action.payload.name){
                        worker.hoursPerWeek = action.payload.newInfo
                    }
                })
            ];
        },
        editHoursLeft: (state, action) => {
                state.forEach(worker => {
                    if(worker.name === action.payload.name){
                        worker.hoursLeft -= action.payload.newInfo
                    }
                })     
        },
        editLastShiftFinishAt: (state, action) => {
            state.forEach(worker => {
                    if(worker.name === action.payload.name){
                        worker.lastShiftFinishAt = Number(action.payload.newInfo)
                    }
                })
        },
        add: (state, action) => {
            state.push(action.payload)
        },
        remove: (state, action) => {
            return state.filter(worker => worker.name !== action.payload)
        }
    }
}
const workersSlice = createSlice(options);
export const {editName, editPayPerHour, addDepartment, removeDepartment, editHoursPerWeek, editHoursLeft, editLastShiftFinishAt, add, remove} = workersSlice.actions;
export default workersSlice.reducer;