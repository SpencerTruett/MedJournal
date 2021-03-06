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
import MedicineList from "./medicine/MedicineList";
import MedicineForm from "./medicine/MedicineForm";
import MedicineTimestampList from "./medicine/MedicineTimestampList";
import FoodDetailsList from "./food/FoodDetailsList";
import "./ApplicationViews.css"


export default (props) => {
  return (
      <>
        <BloodPressureProvider>
          <BloodGlucoseProvider>
            <WeightProvider>
              <ActivityProvider>
                <FoodProvider>
                  <MedicineProvider>
{/* The Buttons on the Home Page that link to the 6 main views */}
                    <Route exact path= "/" ><div className="pageButtons">
                    <div className="HomeButtons"> 
                        <button className="HomeButton" onClick={() => props.history.push("/bloodPressure")}>
                            <div className="buttonText">Blood Pressure</div>
                            <img className="icon" src={require ('./icons/bloodPressure.gif')} />
                        </button>
                        
                        <button className="HomeButton" onClick={() => props.history.push("/bloodGlucose")}>
                            <div>Blood Sugar</div>
                            <img className="icon" src={require ('./icons/bloodSugar.gif')} />
                        </button>
                        
                        <button className="HomeButton" onClick={() => props.history.push("/weightTracker")}>
                            <div>Weight Tracker</div>
                            <img className="icon" src={require ('./icons/Weight.gif')} />
                        </button>
                        
                        <button className="HomeButton" onClick={() => props.history.push("/activityLog")}>
                            <div>Exercise Log</div>
                            <img className="icon" src={require ('./icons/exercise.gif')} />
                        </button>
                        
                        <button className="HomeButton" onClick={() => props.history.push("/foodJournal")}>
                            <div>Food Journal</div>
                            <img className="icon" src={require ('./icons/food.gif')} />
                        </button>
                        
                        <button className="HomeButton" onClick={() => props.history.push("/medicineLog")}>
                            <div>Medicine Log</div>
                            <img className="icon" src={require ('./icons/Medicine.gif')} />
                        </button>
                        
                    </div>    
                  </div>
                  </Route>

{/* The lists, forms, and charts for the Blood Pressures  */}
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

{/* The lists, forms, and charts for the Blood Glucoses  */}
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

{/* The lists, forms, and charts for the Weights  */}
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
                    
{/* The lists, forms, and charts for the Activities  */}
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

{/* The lists, forms, and views for the Food Journal  */}
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
                        <Route exact path="/foodJournal/view/:FoodId(\d+)"
                          render={props => <FoodDetailsList{...props} />}
                        />
                      </div>

{/* The lists, forms, and timestamp recordings for the Medicine  */}
                      <div className="TheMedicines">
                        <Route exact path="/medicineLog"
                          render={props => <MedicineForm{...props} />}
                        />
                        <Route exact path="/medicineLog"
                          render={props => <MedicineList{...props} />}
                        />
                        <Route exact path="/medicineLog"
                          render={props => <MedicineTimestampList{...props} />}
                        />
                        <Route exact path="/medicineLog/edit/:RxId(\d+)"
                          render={props => <MedicineForm{...props} />}
                        />
                        <Route exact path="/medicineLog/edit/:RxId(\d+)"
                          render={props => <MedicineList{...props} />}
                        />
                        <Route exact path="/medicineLog/edit/:RxId(\d+)"
                          render={props => <MedicineTimestampList{...props} />}
                        />
                      </div>

{/* The Profile View that shows the summaries of the other 6: The Blood Pressure Chart, the Blood Glucose Chart, the Weight Chart, the Activity Chart, the Food Journal View, and the Medicine Timestamps  */}
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

                        <Route exact path="/profile"
                          render={props => <MedicineTimestampList{...props} />}
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