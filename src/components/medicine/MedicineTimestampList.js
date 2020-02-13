import React, { useContext } from "react"
import { MedicineContext, MedicineProvider } from "./MedicineProvider"
import MedicineTimestamp from "./MedicineTimestamp"
import "./Medicine.css"

export default (props) => {
    const { Rxs } = useContext(MedicineContext)
    const activeUserId = parseInt(localStorage.getItem("activeUser"), 10)
    const filteredRxs = Rxs.filter(Rx => Rx.userId === activeUserId) || []

// Creates a list of timestamped MedicineProvider-- filtered by user-- and returning a message string when no entries are present; but if there is a timestamp present; not if no timestamp has been recorded yet 

const userFunction = () => {
    if (filteredRxs.length === 0) {
      return <p>No Timestamps Avaliable</p>;
    } else {
      return (
        <>
          {
            Rxs.map(Rx => {
            if (Rx.timestamp !== null) {                      
            return <MedicineTimestamp key={Rx.id} Rx={Rx} {...props} />}
        })
          }
        </>
      )
    }
  }
    return (
        <>
        <div className="LastTakenMedicineList">
            <div>
                <h1>Medicine Last Taken</h1>
            </div>    
            <div className="LastTakenMeds">
                {
                   userFunction()

                }
            </div>
        </div>
        </>
    )
}