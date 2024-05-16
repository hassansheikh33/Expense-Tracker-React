import { useState } from 'react';
import './ExpenseForm.css';

export default function ExpenseForm(props) {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');


    function ChangeHandler(id, value) {
        if (id === 'title') {
            setEnteredTitle(value);
        } else if (id === 'amount') {
            setEnteredAmount(value);
        } else {
            setEnteredDate(value);
        }
    }

    function SubmitHandler(e) {
        e.preventDefault();
        let obj = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSavingExpense(obj);
        obj = {};
        setEnteredAmount('')
        setEnteredTitle('');
        setEnteredDate('');
    }

    return (
        <form onSubmit={SubmitHandler}>
            <div className='new-expense__controls'>
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} required onChange={(e) => { ChangeHandler('title', e.target.value) }} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} min="0.01" step="0.01" required onChange={(e) => { ChangeHandler('amount', e.target.value) }} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} min="2021-01-01" required max="2024-12-31" onChange={(e) => { ChangeHandler('date', e.target.value) }} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='Submit' className='new-expense__control'>Add expense</button>
            </div>
        </form>
    )
}