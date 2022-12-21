import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../initialState";

const options = {
    name: 'departments',
    initialState: initialState.departments,
    reducers: {
        editName: (state, action) => {
            return [
                ...state.map(department => {
                    if(department.name === action.payload.name){
                        department.name = action.payload.newInfo
                    }
                })
            ]
        },
        editOpensPeopleNeeded: (state, action) => {
            return [
                ...state.map(department => {
                    if(department.name === action.payload.name){
                        department.opens.peopleNeeded = action.payload.newInfo
                    }
                })
            ]
        },
        editOpensHour: (state, action) => {
            return [
                ...state.map(department => {
                    if(department.name === action.payload.name){
                        department.opens.hour = action.payload.newInfo
                    }
                })
            ]
        },
        editClosessPeopleNeeded: (state, action) => {
            return [
                ...state.map(department => {
                    if(department.name === action.payload.name){
                        department.closes.peopleNeeded = action.payload.newInfo
                    }
                })
            ]
        },
        editClosessHour: (state, action) => {
            return [
                ...state.map(department => {
                    if(department.name === action.payload.name){
                        department.closes.hour = action.payload.newInfo
                    }
                })
            ]
        },
        add: (state, action) => {
            return [
                ...state.push(action.payload)
            ];
        },
        remove: (state, action) => {
            return [
                ...state.filter(department => department.name !== action.payload)
            ];
        }
    }
}

const departmentsSlice = createSlice(options);
export const {editName, editOpensPeopleNeeded, editOpensHour, editClosessPeopleNeeded, editClosessHour, add, remove} = departmentsSlice.actions;
export default departmentsSlice.reducer;