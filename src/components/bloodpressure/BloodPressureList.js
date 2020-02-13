import React, { useContext } from "react"
import "./BloodPressure.css"
import { BloodPressureContext } from "./BloodPressureProvider"
import BloodPressure from "./BloodPressure"

export default (props) => {
    const { BPs } = useContext(BloodPressureContext)
    const activeUserId = parseInt(localStorage.getItem("activeUser"), 10)
    const filteredBPs = BPs.filter(BP => BP.userId === activeUserId) || []


// Creates the list of all of the Blood Pressure Readings-- filtered by user-- and returning a message string when no entries are present

    const userFunction = () => {
      if (filteredBPs.length === 0) {
        return <p>No Recordings Avaliable</p>;
      } else {
        return (
          <>
            {filteredBPs.map(BP => {
              return <BloodPressure key={BP.id} BP={BP} {...props} />
            })}
          </>
        )
      }
    }


    return (
        <>
        <div className="BloodPressureList">
            <div>
                <h1>Blood Pressure Readings</h1>
            </div>    
            <div className="BloodPressureReadings">
                { 
                  userFunction()  
                
                }
            </div>
        </div>
        </>
    )
    }
