import React from "react"
import { Route } from "react-router-dom"
import { BloodPressureProvider } from "./bloodpressure/BloodPressureProvider";
import BloodPressureList from "./bloodpressure/BloodPressureList";
import BloodPressureForm from "./bloodpressure/BloodPressureForm";


export default (props) => {
  return (
      <>
        <BloodPressureProvider>
          <Route exact path= "/" ><div className="pageButtons">
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
        </Route>
          
            <Route exact path="/bloodPressure"
              render={props => <BloodPressureForm{...props} />}
            />
            <Route exact path="/bloodPressure"
              render={props => <BloodPressureList{...props} />}
            />
            <Route exact path="/bloodPressure/edit/:BPId(\d+)"
              render={props => <BloodPressureForm{...props} />}
            />
            <Route exact path="/bloodPressure/edit/:BPId(\d+)"
              render={props => <BloodPressureList{...props} />}
            />
        </BloodPressureProvider>
      </>
  );
}