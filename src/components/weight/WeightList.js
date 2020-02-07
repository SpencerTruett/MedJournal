import React, { useContext } from "react"
import "./Weight.css"
import { WeightContext } from "./WeightProvider"
import Weight from "./Weight"

export default (props) => {
    const { Wts } = useContext(WeightContext)
    // const activeUserId = parseInt(localStorage.getItem("activeUser"), 10)


    return (
        <>
        <div className="WeightList">
            <div>
                <h1>Weight Readings</h1>
            </div>    
            <div className="WeightReadings">
                {
                    Wts.map(Wt => {
                        return <Weight key={Wt.id} Wt={Wt} {...props} />
                    })
                }
            </div>
        </div>
        </>
    )
}