import './Expense.css'
import ExpenseList from '../ExpenseList/ExpenseList';
import Card from '../Card/card';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import { useState } from 'react';
import ExpenseChart from './ExpenseChart';

function Expense(props) {

    let [filterYear, setFilterYear] = useState('All Years');

    function selectionHandler(selectedYear) {
        setFilterYear(selectedYear);
    }

    let filteredExpenses;

    if (filterYear === 'All Years') {
        filteredExpenses = [...props.data];
    } else {
        filteredExpenses = props.data.filter(expense => {
            return (expense.date.getFullYear().toString() === filterYear.toString());
        })
    }


    return (

        <Card className="expenses">
            <ExpenseFilter selected={filterYear} onSelection={selectionHandler}></ExpenseFilter>
            <ExpenseChart Expensedata={filteredExpenses}></ExpenseChart>
            <ExpenseList onDeleting={props.onDeleting} data={filteredExpenses}></ExpenseList>
        </Card>
    )
}

export default Expense;