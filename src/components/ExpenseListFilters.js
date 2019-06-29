import React from 'react';
import {connect} from "react-redux";
import configureStore from './../store/configureStore'
import {getVisibleExpenses} from "../selectors/expenses";
import {setTextFilter} from "../actions/filters";

const store = configureStore();

const ExpenseListFilters = (props) => (
    <div>
        <input type="text" value={props.filters.text} onChange={event => {
            props.dispatch(setTextFilter(event.target.value));
        }}/>
    </div>
);


const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
};


export default connect(mapStateToProps)(ExpenseListFilters);



