import React from "react"
import { Route } from "react-router-dom"
import { BloodPressureProvider } from "./bloodpressure/BloodPressureProvider";
import BloodPressureList from "./bloodpressure/BloodPressureList";
import BloodPressureForm from "./bloodpressure/BloodPressureForm";
import BloodPressureChart from "./bloodpressure/BloodPressureChart"
import { BloodGlucoseProvider } from "./bloodglucose/BloodGlucoseProvider";
import BloodGlucoseList from "./bloodglucose/BloodGlucoseList";
import BloodGlucoseForm from "./bloodglucose/BloodGlucoseForm";


export default (props) => {
  return (
      <>
        <BloodPressureProvider>
          <BloodGlucoseProvider>
          <Route exact path= "/" ><div className="pageButtons">
          <div>
              <button onClick={() => props.history.push("/bloodPressure")}>
                  Blood Pressure
              </button>
              
              <button onClick={() => props.history.push("/bloodGlucose")}>
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
           
            <div className="TheBloodPressures">
              <Route exact path="/bloodPressure"
                render={props => <BloodPressureForm{...props} />}
              />
              <Route exact path="/bloodPressure"
                render={props => <BloodPressureList{...props} />}
              />
              <Route exact path="/bloodPressure"
                render={props => <BloodPressureChart{...props} />}
              />
              <Route exact path="/bloodPressure/edit/:BPId(\d+)"
                render={props => <BloodPressureForm{...props} />}
              />
              <Route exact path="/bloodPressure/edit/:BPId(\d+)"
                render={props => <BloodPressureList{...props} />}
              />
              <Route exact path="/bloodPressure/edit/:BPId(\d+)"
                render={props => <BloodPressureChart{...props} />}
              />
            </div>

            <div className="TheBloodGlucoses">
              <Route exact path="/bloodGlucose"
                  render={props => <BloodGlucoseForm{...props} />}
                />
              <Route exact path="/bloodGlucose"
                  render={props => <BloodGlucoseList{...props} />}
                />
              <Route exact path="/bloodGlucose/edit/:BGId(\d+)"
                render={props => <BloodGlucoseForm{...props} />}
              />
              <Route exact path="/bloodGlucose/edit/:BGId(\d+)"
                render={props => <BloodGlucoseList{...props} />}
              />
            </div>

          </BloodGlucoseProvider>
        </BloodPressureProvider>
      </>
  );
}