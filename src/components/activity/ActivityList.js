import React, { useContext } from "react"
import "./Activity.css"
import { ActivityContext } from "./ActivityProvider"
import Activity from "./Activity"

export default (props) => {
    const { Acts } = useContext(ActivityContext)
    // const activeUserId = parseInt(localStorage.getItem("activeUser"), 10)

// Creates the list of all of the Activity Recordings
    return (
        <>
        <div className="ActivityList">
            <div>
                <h1>Activity Records</h1>
            </div>    
            <div className="ActivityReadings">
                {
                    Acts.map(Act => {
                        return <Activity key={Act.id} Act={Act} {...props} />
                    })
                }
            </div>
        </div>
        </>
    )
}