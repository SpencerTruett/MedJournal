import React, { useContext } from "react"
import "./BloodPressure.css"
import { BloodPressureContext } from "./BloodPressureProvider"
import BloodPressure from "./BloodPressure"

export default (props) => {
    const { BP } = useContext(BloodPressureContext)
    // const activeUserId = parseInt(localStorage.getItem("activeUser"), 10)


    return (
        <>
        <div className="BloodPressureList">
            <div>
                <h1>Blood Pressure Readings</h1>
            </div>    
            <div className="BloodPressureReadings">
                {
                    BP.map(BP => {
                        return <BloodPressure key={BP.id} BP={BP} {...props} />
                    })
                }
            </div>
        </div>
        </>
    )
}