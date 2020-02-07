import React, { useContext } from "react";
import {Line} from 'react-chartjs-2';
import { WeightContext } from "./WeightProvider";

export default () => {

  const { Wts } = useContext(WeightContext)

  let weightReadings = []
  Wts.forEach(weight => {weightReadings.push(weight.weight)})
  // console.log(weightReadings)

  let datesTaken = []
  Wts.forEach(weight => {
    let formattedDate = new Date(weight.timestamp).toLocaleDateString('en-US')
    datesTaken.push(formattedDate)
})
  // console.log(datesTaken)


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
        <Line data={data} />
      </div>
    );
};