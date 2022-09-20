import { useSelector } from "react-redux";
import { selectBudgetLeft } from "../../state-redux/Store/Selectors";
import { displayBudgetStyles } from "./displayBudgetStyles";

// Display budget left in Schedule page
export const DisplayBudget = () => {
    let budgetLeft = useSelector(selectBudgetLeft);
    return <h2 id='displaybudget' style={displayBudgetStyles}>Budget Left: {budgetLeft}</h2>
}