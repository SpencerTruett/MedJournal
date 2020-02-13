import React, { useContext } from "react";
import {Line} from 'react-chartjs-2';
import { BloodPressureContext } from "./BloodPressureProvider";

export default () => {

  const { BPs } = useContext(BloodPressureContext)
  const activeUserId = parseInt(localStorage.getItem("activeUser"), 10)
  const filteredBPs = BPs.filter(BP => BP.userId === activeUserId) || []
  
// Pusing to an array all of the systolic readings recorded by the form 
  let systolicReadings = []
  filteredBPs.forEach(bloodPressure => {systolicReadings.push(bloodPressure.systolic)})
  // console.log(systolicReadings)

// Pusing to an array all of the diastolic readings recorded by the form 
  let diastolicReadings = []
  filteredBPs.forEach(bloodPressure => {diastolicReadings.push(bloodPressure.diastolic)})
  // console.log(diastolicReadings)

// Pushing to an array all of the dates that the glucose readings were recorded
  let datesTaken = []
  filteredBPs.forEach(bloodPressure => {
    let formattedDate = new Date(bloodPressure.timestamp).toLocaleDateString('en-US')
    datesTaken.push(formattedDate)
})
  // console.log(datesTaken)

// Plugging in my two new arrays into the labels and data areas of the chart; the two datasets create the two lines: one does systolic, one does diastolic
    const data = {
        labels: datesTaken,
        datasets: [
          {
            label: 'Systolic',
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
            data: systolicReadings
          },
          {
            label: 'Diastolic',
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
            data: diastolicReadings
          }
        ]
      };
    return (
      <div className="BP__Chart">
        <h1>Blood Pressure Chart</h1>
        <Line data={data} />
      </div>
    );
};