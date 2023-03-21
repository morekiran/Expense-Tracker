import React from 'react'
import "./ExpenseDate.css"

const ExpenseDate = ({expenseData}) => {
    // const month = months[expenseData.date.getMonth()]
    const month = expenseData.date.toLocaleString("en-us",{month:"long"})
    const year = expenseData.date.getFullYear()
    const date = expenseData.date.getDate()

  return (
    <div className='expense-date'>
        <div className='expense-date__month'>{month}</div>
        <div className='expense-date__year'>{year}</div>
        <div className='expense-date__day'>{date}</div>

    </div>
  )
}

export default ExpenseDate