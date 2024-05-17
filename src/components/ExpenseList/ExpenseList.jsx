import './ExpenseList.css';
import ExpenseItem from '../ExpenseItem/ExpenseItem';

export default function ExpenseList(props) {

    if (props.data.length === 0) {
        return <h2 className='expenses-list__fallback'>No Expenses Found.</h2>
    }

    return (
        <ul className="expenses-list">
            {props.data.map(expense => <ExpenseItem onDelete={props.onDeleting} key={expense.id} id={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />)}
        </ul>
    )
}