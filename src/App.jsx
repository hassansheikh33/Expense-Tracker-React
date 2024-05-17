import Expense from "./components/Expense/Expense";
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from "react";

function App() {

  const [expenses, setExpenses] = useState([{
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2023, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2022, 2, 12)
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  }]);

  function addingHandler(expObj) {
    setExpenses([...expenses, expObj]);
  }

  function DeletingHandler(expId) {
    setExpenses(prevExpenses => prevExpenses.filter(exp => exp.id !== expId));
  }

  return (
    <div>
      <NewExpense onAdding={addingHandler} />
      <Expense onDeleting={DeletingHandler} data={expenses} />
    </div>
  )
}

export default App
