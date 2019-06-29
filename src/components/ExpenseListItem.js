import {connect} from "react-redux";
import React from 'react'


export const ExpenseListItem = ({description, amount, createdAt}) => (
    <div>
        <h3>{description}</h3>
        <p>{amount} - {createdAt}</p>
    </div>
);

//
// const mapStateToProps = (state) => {
//     return {
//         expenses: state.expenses
//     }
// };
//
//
// export default connect(mapStateToProps)(ExpenseListItem);