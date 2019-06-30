import React from 'react';
import moment from 'moment';

import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import {SingleDatePicker} from "react-dates";

const now = moment();
console.log(now.format('MMM Do YYYY'));

export class ExpenseForm extends React.Component {
    state = {
        description: '',
        note: '',
        amount: '',
        createdAt: moment(),
        calendarFocused: false,
        error: ''
    };

    handleChangeDescription = (event) => {
        this.setState({description: event.target.value})
    };
    handleChangeNote = (event) => {
        this.setState({note: event.target.value})
    };

    handleChangeAmount = (event) => {
        const amount = event.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState({amount})
        }
    };

    handleChangeDate = (createdAt) => {
        if (createdAt) {
            this.setState({createdAt})
        }
    };

    handleChangeCalendarFocus = ({focused}) => {
        this.setState({calendarFocused: focused})
    };

    handleSubmit = (event) => {
        event.preventDefault();
        if (!this.state.description || !this.state.amount) {
            this.setState({error: 'Please provide description and amount'})
        } else {
            this.setState({error: ''});
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount),
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    };

    render() {
        return (
            <div>
                {this.state.error && <h3>{this.state.error}</h3>}
                <form action="" onSubmit={this.handleSubmit}>
                    <input
                        onChange={this.handleChangeDescription}
                        value={this.state.description}
                        type="text"
                        placeholder={'description'}
                        autoFocus
                    />
                    <input
                        onChange={this.handleChangeAmount}
                        value={this.state.amount}
                        type="text"
                        placeholder={'amount'}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt} // momentPropTypes.momentObj or null
                        onDateChange={this.handleChangeDate} // PropTypes.func.isRequired
                        focused={this.state.calendarFocused} // PropTypes.bool
                        onFocusChange={this.handleChangeCalendarFocus} // PropTypes.func.isRequired
                        id="your_unique_id" // PropTypes.string.isRequired,
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea
                        value={this.state.note}
                        onChange={this.handleChangeNote}
                        placeholder={'Add a note for your expense (optional)'}
                    >

                    </textarea>
                    <button type={'submit'}>
                        Add Expense
                    </button>
                </form>

            </div>
        )
    }
}