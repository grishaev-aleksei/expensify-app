import React from 'react';

export class ExpenseForm extends React.Component {
    state = {
        description: '',
        note: '',
        amount: ''
    };

    handleChangeDescription = (event) => {
        this.setState({description: event.target.value})
    };
    handleChangeNote = (event) => {
        this.setState({note: event.target.value})
    };

    handleChangeAmount = (event) => {
        const amount = event.target.value;
        if (amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState({amount})
        }
    };

    render() {
        return (
            <div>
                <form action="">
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