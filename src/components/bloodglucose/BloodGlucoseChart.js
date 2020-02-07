import React, { useContext } from "react";
import {Line} from 'react-chartjs-2';
import { BloodGlucoseContext } from "./BloodGlucoseProvider";

export default () => {

  const { BGs } = useContext(BloodGlucoseContext)
  
  let glucoseReadings = []
  BGs.forEach(bloodGlucose => {glucoseReadings.push(bloodGlucose.glucose)})
  // console.log(glucoseReadings)

  let datesTaken = []
  BGs.forEach(bloodGlucose => {
    let formattedDate = new Date(bloodGlucose.timestamp).toLocaleDateString('en-US')
    datesTaken.push(formattedDate)
})
  // console.log(datesTaken)


    const data = {
        labels: datesTaken,
        datasets: [
          {
            label: 'Glucose',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(255,51,51,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(255,51,51,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 3,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(255,51,51,1)',
            pointHoverBorderColor: 'rgba(255,51,51,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: glucoseReadings
          }
        ]
      };
    return (
      <div className="BG__Chart">
        <h1>Blood Glucose Chart</h1>
        <Line data={data} />
      </div>
    );
};