import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../initialState";

const options = {
    name: 'data',
    initialState: initialState.data,
    reducers: {
        editData: (state, action) => {
            state = action.payload
        },
        editBudgetLeft: (state, action) => {
            state.budgetLeft = state.budgetLeft - action.payload;
        },
        editAddBudgetLeft: (state, action) => {
            state.budgetLeft = state.budgetLeft + action.payload;
        },
        editWeekBudget: (state, action) => {
            state.weekBudget = action.payload
        },
        updateBudgetLeft: (state, action) => {
            let difference = action.payload - state.weekBudget;
            state.budgetLeft = state.budgetLeft + difference;
        },
        addDepartment: (state, action) => {
            if(state.departments.length < 12){
                state.departments.push(action.payload)
            }
        },
        removeDepartment: (state, action) => {
            let newDepartments = state.departments.filter(department => department !== action.payload);
            state.departments = newDepartments;
        }
    }
}

const dataSlice = createSlice(options);
export const { editData, editBudgetLeft, editAddBudgetLeft, editWeekBudget, addDepartment, updateBudgetLeft, removeDepartment } = dataSlice.actions;
export default dataSlice.reducer;