import { configureStore } from "@reduxjs/toolkit";
import workersSlice from "../Slices/workersSlice";
import weekScheduleSlice from "../Slices/weekScheduleSlice";
import clickedElementSlice from "../Slices/clickedElementSlice";
import dataSlice from "../Slices/dataSlice";

const store = configureStore({
    reducer: {
        workers: workersSlice,
        clickedElement: clickedElementSlice,
        weekSchedule: weekScheduleSlice,
        data: dataSlice
    }
})
export default store;