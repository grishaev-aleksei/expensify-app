import React from "react";
import ConnectedExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";


export const ExpenseDashboardPage = () => (
    <div>
        <ExpenseListFilters/>
        <ConnectedExpenseList/>
    </div>
);