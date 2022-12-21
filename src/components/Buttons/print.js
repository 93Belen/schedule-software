import React from "react";
import { printButtonStyles } from "./ButtonsStyles";

export const PrintButton = () => {
    return <button style={printButtonStyles} onClick={window.print}>Print</button>
}