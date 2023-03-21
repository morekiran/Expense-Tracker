import { useState } from 'react';
import './App.css';
import Expenses from './component/Expenses/Expenses';
import NewExpenses from './component/NewExpenses/NewExpenses';

const dummyData = [
  {
    id:"exp1",
    date: new Date(2021,5,25),
    item: "New TV",
    price: 599.25,
  },
  {
    id:"exp2",
    date: new Date(2021,4,20),
    item: "Car Insuranse",
    price: 259.25,
  },
  {
    id:"exp3",
    date: new Date(2019,5,25),
    item: "New Home",
    price:290.25,
  },
  {
    id:"exp4",
    date: new Date(2021,7,25),
    item: "New Desk (Wooden)",
    price: 345.20,
  },
  {
    id:"exp5",
    date: new Date(2022,8,25),
    item: "New Car",
    price: 199.20,
  },
  {
    id:"exp6",
    date: new Date(2022,4,25),
    item: "New Car",
    price: 400.20,
  },

  {
    id:"exp7",
    date: new Date(2021,2,26),
    item: "New Car",
    price: 350.30,
  },

];

function App() {

  // const months = [
  //   "Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Nov","Dec",
  // ];

 const [expenseData,setExpenseData]=useState(dummyData)

 const readExpenseData = (data) => {
      // console.log("App")
      // console.log(data)
      //  expenseData.push(data);
      setExpenseData([data,...expenseData]);

 }

  return (
    <div>
   <NewExpenses readExpenseData={readExpenseData}/>
   <Expenses expenseData={expenseData}/>
    </div>
  );
}

export default App;
