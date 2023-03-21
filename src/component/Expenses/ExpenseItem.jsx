import React from 'react'
import ExpenseDate from './ExpenseDate';
import "./ExpenseItem.css"

const ExpenseItem = (props) => {
    
  return (
    <div className='expense-item'>

     <div>
        <ExpenseDate expenseData={props.expenseData}/>
     </div>

       <div className='expense-item__description'><h2>{props.expenseData.item}</h2></div>
       <div className='expense-item__price'>$ {props.expenseData.price}</div>


    </div>
  )
}

export default ExpenseItem