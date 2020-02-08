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
import ActivityList from "./activity/ActivityList";
import ActivityForm from "./activity/ActivityForm";
import ActivityChart from "./activity/ActivityChart";
import { FoodProvider } from "./food/FoodProvider";
import FoodList from "./food/FoodList";
import FoodForm from "./food/FoodForm";
import { MedicineProvider } from "./medicine/MedicineProvider";


export default (props) => {
  return (
      <>
        <BloodPressureProvider>
          <BloodGlucoseProvider>
            <WeightProvider>
              <ActivityProvider>
                <FoodProvider>
                  <MedicineProvider>
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
                        
                        <button onClick={() => props.history.push("/activityLog")}>
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
                    
                      <div className="TheActivities">
                        <Route exact path="/activityLog"
                            render={props => <ActivityForm{...props} />}
                          />
                        <Route exact path="/activityLog"
                            render={props => <ActivityList{...props} />}
                          />
                        <Route exact path="/activityLog"
                          render={props => <ActivityChart{...props} />}
                        />
                        <Route exact path="/activityLog/edit/:ActId(\d+)"
                          render={props => <ActivityForm{...props} />}
                        />
                        <Route exact path="/activityLog/edit/:ActId(\d+)"
                          render={props => <ActivityList{...props} />}
                        />
                        <Route exact path="/activityLog/edit/:ActId(\d+)"
                          render={props => <ActivityChart{...props} />}
                        />
                      </div>
                    
                      <div className="TheFoods">
                        <Route exact path="/foodJournal"
                            render={props => <FoodForm{...props} />}
                          />
                        <Route exact path="/foodJournal"
                            render={props => <FoodList{...props} />}
                          />
                        <Route exact path="/foodJournal/edit/:FoodId(\d+)"
                          render={props => <FoodForm{...props} />}
                        />
                        <Route exact path="/foodJournal/edit/:FoodId(\d+)"
                          render={props => <FoodList{...props} />}
                        />
                        <Route exact path="/foodJournal/view/:FoodId(\d+)"
                          render={props => <FoodForm{...props} />}
                        />
                        <Route exact path="/foodJournal/view/:FoodId(\d+)"
                          render={props => <FoodList{...props} />}
                        />
                      </div>



                      <div className="ProfileView">
                        <Route exact path="/profile"
                          render={props => <BloodPressureChart{...props} />}
                        />
                        <Route exact path="/profile"
                          render={props => <BloodGlucoseChart{...props} />}
                        />
                        <Route exact path="/profile"
                          render={props => <WeightChart{...props} />}
                        />
                        <Route exact path="/profile"
                          render={props => <ActivityChart{...props} />}
                        />
                      </div>
                  </MedicineProvider>
                </FoodProvider>
              </ActivityProvider>
            </WeightProvider>
          </BloodGlucoseProvider>
        </BloodPressureProvider>
      </>
  );
}