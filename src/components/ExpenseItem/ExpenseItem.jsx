import './ExpenseItem.css';
import ExpenseDate from '../ExpenseDate/expenseDate'
import Card from '../Card/card';

function ExpenseItem(props) {

    return (
        <li>
            <Card className='expense-item'>
                <ExpenseDate date={props.date} />
                <div className='expense-item__description'>
                    <h2>{props.title}</h2>
                    <div className='expense-item__price'>${props.amount}</div>
                </div>
            </Card>
        </li>
    )
}

export default ExpenseItem;