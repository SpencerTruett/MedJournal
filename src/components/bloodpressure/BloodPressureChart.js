import React, { useContext } from "react";
import {Line} from 'react-chartjs-2';

export default () => {
    const data = {
        labels: ['-29 Days', '-28 Days', '-27 Days', '-26 Days', '-25 Days', '-24 Days', '-23 Days', '-22 Days', '-21 Days', '-20 Days', '-19 Days', '-18 Days', '-17 Days', '-16 Days', '-15 Days', '-14 Days', '-13 Days', '-12 Days', '-11 Days', '-10 Days', '-9 Days', '-8 Days', '-7 Days', '-6 Days', '-5 Days', '-4 Days', '-3 Days', '-2 Days', '-1 Day', 'Today'],
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
            data: [65, 59, 80, 81, 56, 55, 40]
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
            data: [24, 55, 43, 27, 30, 41, 52]
          }
        ]
      };
    return (
      <div className="BP__Chart">
        <Line data={data} />
      </div>
    );
};