import React from "react";
import { NavLink } from "react-router-dom";
import { editName } from "../../state-redux/Slices/workersSlice";
import store from "../../state-redux/Store/Store";
import {ScheduleNavLinkStyles, DataNavLinkStyles, NavBarStyles, ScheduleActiveStyles, DataActiveStyles} from './NavBarStyles';

export const NavBar = () => {
    return (
        <nav id='navbar' style={NavBarStyles}>
            <NavLink 
            style={({ isActive }) =>
              isActive ? ScheduleActiveStyles : ScheduleNavLinkStyles
            } 
            to='/Schedule'>Schedule</NavLink>
            <NavLink 
            style={({ isActive }) =>
            isActive ? DataActiveStyles : DataNavLinkStyles
          }
            to='/Profiles'>Data & Profiles</NavLink>
        </nav>
    )
}