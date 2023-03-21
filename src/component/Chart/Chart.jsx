import React from 'react'
import "./Chart.css"
import ChartBar from './ChartBar'

const Chart = (props) => {

    let priceArray = props.chartDataPoints.map(row => row.price)
    let maxPrice = Math.max(...priceArray)
    // console.log(maxPrice)

  return (
    <div className='chart'>
        {
            props.chartDataPoints.map((record,index)=>{
                return(
                    <ChartBar label={record.label} value={record.price} maxValue={maxPrice}key={index}/>
                )
            })
        }
        {/* <ChartBar label="mar" value={599} maxValue={null}/> */} 

    </div>
  )
}

export default Chart