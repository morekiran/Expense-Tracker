import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import "./NewExpenses.css"

const NewExpenses = ({readExpenseData}) => {

  const [showExpenseForm , setShowExpenseForm] = useState(false)

  const newExpensesData = (data) =>{
    readExpenseData(data)
  }

  const formHandler=()=>{
    setShowExpenseForm(true)
  }
  return (
    <div className='new-expenses'>

    { ! showExpenseForm && (
       <button onClick={formHandler}>Add New Expense</button>
    )}
        {showExpenseForm && <ExpenseForm sendData={newExpensesData} setShowExpenseForm={setShowExpenseForm}/>}
    </div>
  );
};

export default NewExpenses