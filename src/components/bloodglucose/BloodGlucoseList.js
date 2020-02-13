import React, { useContext } from "react"
import "./BloodGlucose.css"
import { BloodGlucoseContext } from "./BloodGlucoseProvider"
import BloodGlucose from "./BloodGlucose"

export default (props) => {
    const { BGs } = useContext(BloodGlucoseContext)
    const activeUserId = parseInt(localStorage.getItem("activeUser"), 10)
    const filteredBGs = BGs.filter(BG => BG.userId === activeUserId) || []

// Creates the list of all of the Blood Glucose Readings-- filtered by user-- and returning a message string when no entries are present

const userFunction = () => {
    if (filteredBGs.length === 0) {
      return <p>No Recordings Avaliable</p>;
    } else {
      return (
        <>
          {filteredBGs.map(BG => {
                return <BloodGlucose key={BG.id} BG={BG} {...props} />
          })}
        </>
      )
    }
  }


    return (
        <>
        <div className="BloodGlucoseList">
            <div>
                <h1>Blood Glucose Readings</h1>
            </div>    
            <div className="BloodGlucoseReadings">
                {
                   userFunction()
                }
            </div>
        </div>
        </>
    )
}