import React, { useContext } from "react";
import {Line} from 'react-chartjs-2';
import { WeightContext } from "./WeightProvider";

export default () => {

  const { Wts } = useContext(WeightContext)
  const activeUserId = parseInt(localStorage.getItem("activeUser"), 10)
  const filteredWts = Wts.filter(Wt => Wt.userId === activeUserId) || []

// Pusing to an array all of the weights recorded by the form 
  let weightReadings = []
  filteredWts.forEach(weight => {weightReadings.push(weight.weight)})
  
// Pushing to an array all of the dates that the glucose readings were recorded
  let datesTaken = []
  filteredWts.forEach(weight => {
    let formattedDate = new Date(weight.timestamp).toLocaleDateString('en-US')
    datesTaken.push(formattedDate)
})
  
// Plugging in my two new arrays into the labels and data areas of the chart
    const data = {
        labels: datesTaken,
        datasets: [
          {
            label: 'Weight',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba( 3,10,254,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba( 3,10,254,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 3,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba( 3,10,254,1)',
            pointHoverBorderColor: 'rgba( 3,10,254,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: weightReadings
          }
        ]
      };
    return (
      <div className="Wt__Chart">
        <h1>Weight Chart</h1>
        <Line data={data} />
      </div>
    );
};