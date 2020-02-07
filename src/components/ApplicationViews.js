import React from "react"
import { Route } from "react-router-dom"
import { BloodPressureProvider } from "./bloodpressure/BloodPressureProvider";
import BloodPressureList from "./bloodpressure/BloodPressureList";
import BloodPressureForm from "./bloodpressure/BloodPressureForm";
import BloodPressureChart from "./bloodpressure/BloodPressureChart"
import { BloodGlucoseProvider } from "./bloodglucose/BloodGlucoseProvider";
import BloodGlucoseList from "./bloodglucose/BloodGlucoseList";
import BloodGlucoseForm from "./bloodglucose/BloodGlucoseForm";
import BloodGlucoseChart from "./bloodglucose/BloodGlucoseChart";
import { WeightProvider } from "./weight/WeightProvider";
import WeightList from "./weight/WeightList";
import WeightForm from "./weight/WeightForm";
import WeightChart from "./weight/WeightChart";
import { ActivityProvider } from "./activity/ActivityProvider";


export default (props) => {
  return (
      <>
        <BloodPressureProvider>
          <BloodGlucoseProvider>
            <WeightProvider>
              <ActivityProvider>
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
                  <Route exact path="/bloodGlucose"
                    render={props => <BloodGlucoseChart{...props} />}
                  />
                  <Route exact path="/bloodGlucose/edit/:BGId(\d+)"
                    render={props => <BloodGlucoseForm{...props} />}
                  />
                  <Route exact path="/bloodGlucose/edit/:BGId(\d+)"
                    render={props => <BloodGlucoseList{...props} />}
                  />
                  <Route exact path="/bloodGlucose/edit/:BGId(\d+)"
                    render={props => <BloodGlucoseChart{...props} />}
                  />
                </div>

                <div className="TheWeights">
                  <Route exact path="/weightTracker"
                      render={props => <WeightForm{...props} />}
                    />
                  <Route exact path="/weightTracker"
                      render={props => <WeightList{...props} />}
                    />
                  <Route exact path="/weightTracker"
                    render={props => <WeightChart{...props} />}
                  />
                  <Route exact path="/weightTracker/edit/:WtId(\d+)"
                    render={props => <WeightForm{...props} />}
                  />
                  <Route exact path="/weightTracker/edit/:WtId(\d+)"
                    render={props => <WeightList{...props} />}
                  />
                  <Route exact path="/weightTracker/edit/:WtId(\d+)"
                    render={props => <WeightChart{...props} />}
                  />
                </div>
              
              </ActivityProvider>
            </WeightProvider>
          </BloodGlucoseProvider>
        </BloodPressureProvider>
      </>
  );
}