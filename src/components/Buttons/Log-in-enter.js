import React from "react";
import { logInButtonStyles } from "./ButtonsStyles";
import { Link } from "react-router-dom";

// Log in button. Gotta make log in form work
export const LogInButton = () => {
    return <Link to='/schedule' style={logInButtonStyles}>Enter</Link>
}