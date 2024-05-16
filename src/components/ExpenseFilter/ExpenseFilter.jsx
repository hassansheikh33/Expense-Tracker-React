import './ExpenseFilter.css'


export default function ExpenseFilter(props) {

    function selectChangeHandler(e) {

        props.onSelection(e.target.value);
    }

    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Fitler by Year</label>
                <select name="Filter" value={props.selected} onChange={selectChangeHandler}>
                    <option value="All Years">All Years</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                </select>
            </div>
        </div>
    )
}