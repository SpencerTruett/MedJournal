import React, { useContext } from "react"
import { MedicineContext, MedicineProvider } from "./MedicineProvider"
import MedicineTimestamp from "./MedicineTimestamp"
import "./Medicine.css"

export default (props) => {
    const { Rxs } = useContext(MedicineContext)
    // const activeUserId = parseInt(localStorage.getItem("activeUser"), 10)

// Creates a list of timestamped MedicineProvider, but if there is a timestamp present; not if no timestamp has been recorded yet 
    return (
        <>
        <div className="LastTakenMedicineList">
            <div>
                <h1>Medicine Last Taken</h1>
            </div>    
            <div className="LastTakenMeds">
                {
                    Rxs.map(Rx => {
                        if (Rx.timestamp !== null) {                      
                        return <MedicineTimestamp key={Rx.id} Rx={Rx} {...props} />}
                    })
                }
            </div>
        </div>
        </>
    )
}