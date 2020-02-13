import React, { useContext } from "react"
import "./Weight.css"
import { WeightContext } from "./WeightProvider"
import Weight from "./Weight"

export default (props) => {
    const { Wts } = useContext(WeightContext)
    const activeUserId = parseInt(localStorage.getItem("activeUser"), 10)
    const filteredWts = Wts.filter(Wt => Wt.userId === activeUserId) || []

// Creates the list of all of the Weight Recordings-- filtered by user-- and returning a message string when no entries are present

const userFunction = () => {
    if (filteredWts.length === 0) {
      return <p>No Recordings Avaliable</p>;
    } else {
      return (
        <>
          {filteredWts.map(Wt => {
                return <Weight key={Wt.id} Wt={Wt} {...props} />
          })}
        </>
      )
    }
  }


    return (
        <>
        <div className="WeightList">
            <div>
                <h1>Weight Readings</h1>
            </div>    
            <div className="WeightReadings">
                {
                    userFunction()  

                }
            </div>
        </div>
        </>
    )
}