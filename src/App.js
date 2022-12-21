import React from "react";
import { app } from "./AppStyles";
import { Form } from "./components/Log-in/log-in-form";
import { Schedule } from './components/Schedule/Schedule';
import { Profiles } from "./components/Profiles/Profiles";
import { PrintButton } from "./components/Buttons/Schedule-print";
import { NavBar } from "./components/NavBar/NavBar";
import { EditSchedule } from "./components/EditSchedule/EditSchedule";
import { Provider } from "react-redux";
import store from "./state-redux/Store/Store";


// export const App = () => { 
//     return (
//         <div style={app}>
//             <Provider store={store}>
//             <NavBar />
//             </Provider>
//         </div>
//     )
// }
