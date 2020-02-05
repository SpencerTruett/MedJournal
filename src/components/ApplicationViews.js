import React from "react"
import { Route } from "react-router-dom"

export default (props) => {
  return (
      <>
        <div className="pageButtons">
          <div>
              <button onClick={() => props.history.push("/bloodPressure")}>
                  Blood Pressure
              </button>
              
              <button onClick={() => props.history.push("/bloodSugar")}>
                  Blood Sugar
              </button>
              
              <button onClick={() => props.history.push("/weightTracker")}>
                  Weight Tracker
              </button>
              
              <button onClick={() => props.history.push("/exerciseLog")}>
                  Exercise Log
              </button>
              
              <button onClick={() => props.history.push("/foodJournal")}>
                  Food Journal
              </button>
              
              <button onClick={() => props.history.push("/medicineLog")}>
                  Madicine Log
              </button>
              
          </div>    
        </div>
      </>
  );
}