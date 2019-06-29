import {connect} from "react-redux";
import React from 'react'

import {removeExpense} from "../actions/expenses";


const ExpenseListItem = ({id,dispatch, description, amount, createdAt}) => (
    <div>
        <h3>{description}</h3>
        <p>{amount} - {createdAt}</p>
        <button onClick={()=>{
            dispatch(removeExpense({id}))
        }
        }>Remove</button>
    </div>
);



export default connect()(ExpenseListItem);