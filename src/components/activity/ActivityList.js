import React, { useContext } from "react"
import "./Activity.css"
import { ActivityContext } from "./ActivityProvider"
import Activity from "./Activity"

export default (props) => {
    const { Acts } = useContext(ActivityContext)
    const activeUserId = parseInt(localStorage.getItem("activeUser"), 10)
    const filteredActs = Acts.filter(Act => Act.userId === activeUserId) || []

// Creates the list of all of the Activity Recordings-- filtered by user-- and returning a message string when no entries are present

const userFunction = () => {
    if (filteredActs.length === 0) {
      return <p>No Recordings Avaliable</p>;
    } else {
      return (
        <>
          {filteredActs.map(Act => {
                return <Activity key={Act.id} Act={Act} {...props} />
          })}
        </>
      )
    }
  }


    return (
        <>
        <div className="ActivityList">
            <div>
                <h1>Activity Records</h1>
            </div>    
            <div className="ActivityReadings">
                {
                  userFunction()

                }
            </div>
        </div>
        </>
    )
}