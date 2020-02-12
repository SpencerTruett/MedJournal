import React, { useContext } from "react"
import "./BloodGlucose.css"
import { BloodGlucoseContext } from "./BloodGlucoseProvider"
import BloodGlucose from "./BloodGlucose"

export default (props) => {
    const { BGs } = useContext(BloodGlucoseContext)
    // const activeUserId = parseInt(localStorage.getItem("activeUser"), 10)

// Creates the list of all of the Blood Glucose Readings
    return (
        <>
        <div className="BloodGlucoseList">
            <div>
                <h1>Blood Glucose Readings</h1>
            </div>    
            <div className="BloodGlucoseReadings">
                {
                    BGs.map(BG => {
                        return <BloodGlucose key={BG.id} BG={BG} {...props} />
                    })
                }
            </div>
        </div>
        </>
    )
}