import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../initialState";

const options = {
    name: 'clickedElement',
    initialState: initialState.clickedELement,
    reducers: {
        changeClickedElement: (state, action) => {
            state = action.payload
            return state
        }
    }
}

const clickedELementSlice = createSlice(options);
export const { changeClickedElement } = clickedELementSlice.actions;
export default clickedELementSlice.reducer;