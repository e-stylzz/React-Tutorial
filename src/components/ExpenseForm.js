import React from 'react';
import moment, { now } from 'moment';
import { SingleDatePicker } from 'react-dates';

// const date = new Date();;
// console.log(date);
// const now = moment();
// console.log(now.format('MMM Do, YYYY'));

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        };
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    }
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    }
    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            // amount = amount * 100;
            this.setState(() => ({ amount }));
        } 
    }
    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }
    }
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    }
    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: 'Some required fields need attention' })) 
        } else {
            this.setState(() => ({ error: '' })) 
            console.log('Submited');
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount) * 100,
                createdAt: moment(this.state.createdAt).valueOf(),
                note: this.state.note
            });
        }
    };
    render() {
        return (
            <form onSubmit={this.onSubmit} className="form">
                {this.state.error && <p className="form__error">{this.state.error}</p>}
                <input 
                    type="text" 
                    placeholder="Description"
                    autoFocus
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
                    className="text-input"
                />
                <input
                    type="number"
                    placeholder="Amount"
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                    className="text-input"
                />
                <SingleDatePicker
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    id="1"
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
                <textarea
                    placeholder="Add a note for your expense. (optional)"
                    value={this.state.note}
                    onChange={this.onNoteChange}
                    className="textarea"
                ></textarea>
                <div>
                    <button className="button">Save Expense</button>
                </div>
            </form>
        )
    }
}