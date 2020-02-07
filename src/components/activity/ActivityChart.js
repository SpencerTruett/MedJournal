import React, { useContext } from "react";
import {Line} from 'react-chartjs-2';
import { ActivityContext } from "./ActivityProvider";

export default () => {

  const { Acts } = useContext(ActivityContext)
  
  let activityReadings = []
  Acts.forEach(activity => {activityReadings.push(activity.minutes)})
  // console.log(activityReadings)

  let datesTaken = []
  Acts.forEach(activity => {
    let formattedDate = new Date(activity.timestamp).toLocaleDateString('en-US')
    datesTaken.push(formattedDate)
})
  // console.log(datesTaken)


    const data = {
        labels: datesTaken,
        datasets: [
          {
            label: 'Minutes',
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
            data: activityReadings
          }
        ]
      };
    return (
      <div className="Act__Chart">
        <Line data={data} />
      </div>
    );
};