import './NewExpense.css';
import ExpenseForm from '../ExpenseForm/Expenseform';
import { useState } from 'react';

export default function NewExpense(props) {

    let [bool, setBool] = useState(false);

    function clickHandler() {
        setBool(true);
    }

    function savingExpenseHandler(expObj) {
        let data = {
            ...expObj,
            id: Math.random().toString()
        }
        props.onAdding(data);
    }

    if (bool === false) {
        return (
            <div className='new-expense'>
                <button className="new-expense__button" onClick={clickHandler}>Add a New Expense</button>
            </div>
        )
    } else if (bool === true) {
        return (
            <div className='btn new-expense'>
                <ExpenseForm onSavingExpense={savingExpenseHandler} />
            </div>)
    }
}