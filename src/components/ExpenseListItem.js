import {connect} from "react-redux";
import React from 'react'


const ExpenseListItem = (props) => (
    <div>
        {
            props.expenses.map((expense) => {
                return (
                    <p>{JSON.stringify(expense)}</p>
                )
            })
        }
    </div>
);


const mapStateToProps = (state) => {
    return {
        expenses: state.expenses
    }
};


export default connect(mapStateToProps)(ExpenseListItem);