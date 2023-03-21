import React, { useState } from 'react'
import ChartExpense from './ChartExpense/ChartExpense.jsx'
import ExpenseItem from './ExpenseItem'
import "./Expenses.css"
import ExpensesFilter from './ExpensesFilter'

const Expenses = ({expenseData}) => {

  const [filterYear,setFilterYear]=useState("2021")

  const updateFilterYear = (year) => {
    // console.log(year)
    setFilterYear(year)
  }

 let filterRecord = expenseData.filter((exp)=>{
      // console.log(exp.date.getFullYear())
      return exp.date.getFullYear().toString() === filterYear.toString()
 }) 

  return (
    <div className='expenses'>
       {/* <ExpenseItem expenseData={expenseData[0]}/>
       <ExpenseItem expenseData={expenseData[1]}/>
       <ExpenseItem expenseData={expenseData[2]}/> */}
       
       <ExpensesFilter updateFilterYear={updateFilterYear} filterYear={filterYear}/>
      
      <ChartExpense filterRecord={filterRecord}/>

       {filterRecord.length > 0 ?  (
       
       filterRecord.map((row,index)=>{
          return(
            <ExpenseItem expenseData={row} key={index}/>
          )
        })
       ):(
        <h1 style={{color:"white",textAlign:"center"}}>No Data Found</h1>
       )
      }

    </div>
  )
}

export default Expenses