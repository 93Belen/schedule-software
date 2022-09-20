import ReactDOM from "react-dom/client";
import {
     BrowserRouter,
     Routes,
     Route 
    } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { Profiles } from "./components/Profiles/Profiles";
import { Schedule } from "./components/Schedule/Schedule";
import { Provider } from "react-redux";
import store from "./state-redux/Store/Store";
import { Form } from "./components/Log-in/log-in-form";
import { app } from "./AppStyles";
import { EditSchedule } from "./components/EditSchedule/EditSchedule";
import { AddProfile } from "./components/Profiles/AddProfile";
import { DisplayBudget} from "./components/displayBudget/displayBudget";
import { EditData } from "./components/Data/editData";
import { PrintButton } from "./components/Buttons/print";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
    <div id='app' style={app}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/schedule" element={
        <Provider store={store}>
        <NavBar />
        <DisplayBudget />
        <Schedule />
        <PrintButton />
        </Provider>
      } />
      <Route path="/edit" element={
        <Provider store={store}>
        <NavBar />
        <DisplayBudget />
        <Schedule />
        <EditSchedule />
        </Provider>
      } />
      <Route path="/profiles" element={
          <Provider store={store}>
          <NavBar />
          <Profiles />
          </Provider>
      } />
      <Route path='/addTM' element={
        <Provider store={store}>
        <NavBar />
        <Profiles />
        <AddProfile />
        </Provider>
      } />
      <Route path='/editData' element={
        <Provider store={store}>
        <NavBar />
        <Profiles />
        <EditData />
        </Provider>
      } />
    </Routes>
  </BrowserRouter>
  </div>
);
