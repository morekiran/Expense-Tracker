import React, { useState } from 'react'
import "./ExpenseForm.css"

const ExpenseForm = (props) => {

  const [title,setTitle]=useState("Test")
  const [amount,setAmount]=useState(0)
  const [date,setDate]=useState("")

  // const [data, setData] = useState({
  //   title: "Test",
  //   amount: 10,
  //   date: ""
  // })

  const updateTitle = (e) => {
    // console.log(e.target.value)
    // setData({ ...data, title: e.target.value })
     setDate(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(title,amount,date)
      const data = {
        id: Math.random().toString(),
        item:title,
        price:amount,
        date: new Date(date)
      }
      // console.log(data);

      props.sendData(data) //fuction call

    // const details = {
    //   title: data.title,
    //   amount: data.amount,
    //   date: data.date,
    // }
    // console.log(details);

    // remove bydefault value..
    setTitle("") 
    setAmount(0)
    setDate("")

    props.setShowExpenseForm(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='new-expenses__controls'>
        <div className='new-expenses__control'>
          <label>Title</label>
          <input type="text"onChange={updateTitle} value={title} />
          {/* <input type="text"onChange={ (e) => setTitle (e.target.value)} value={title} /> */}
          {/* <input type="text" onChange={updateTitle} value={data.title} /> */}
        </div>
        <div className='new-expenses__control'>
          <label>Amount</label>
          <input type="number"onChange={(e) => setAmount(e.target.value)} value={amount} />
          {/* <input type="number" onChange={(e) => setData({ ...data, amount: e.target.value })} value={data.amount} /> */}
        </div>
        <div className='new-expenses__control'>
          <label>Date</label>
          <input type="date"onChange={(e) => setDate(e.target.value)} value={date} />
          {/* <input type="date" onChange={(e) => setData({ ...data, date: e.target.value })} /> */}
        </div>
      </div>
      <div className='new-expenses__actions'>
        <button onClick={()=>    props.setShowExpenseForm(false)}>Cancel</button>
        <button type='submit'>Add Expenses</button>
      </div>

    </form>

  )
}

export default ExpenseForm