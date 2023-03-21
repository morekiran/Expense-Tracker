import React from 'react'
import Chart from '../../Chart/Chart'

const ChartExpense = (props) => {
    // console.log(props.filterRecord)

    let chartDataPoints = [
        {label: "Jan", price: 0},
        {label: "Feb", price: 0},
        {label: "Mar", price: 0},
        {label: "Apr", price: 0},
        {label: "May", price: 0},
        {label: "Jun", price: 0},
        {label: "Jul", price: 0},
        {label: "Aug", price: 0},
        {label: "Sep", price: 0},
        {label: "Oct", price: 0},
        {label: "Nov", price: 0},
        {label: "Dec", price: 0},
    ]

    for (let record of props.filterRecord){
        // console.log(record.date.getMonth())
        const month = record.date.getMonth()
        chartDataPoints[month].price += record.price;
    }
  return (
    <div>
        <Chart chartDataPoints={chartDataPoints}/>
    </div>
  )
}

export default ChartExpense