import React, { useContext } from "react"
import { MedicineContext } from "./MedicineProvider"
import MedicineTimestamp from "./MedicineTimestamp"
import "./Medicine.css"

export default (props) => {
    const { Rxs } = useContext(MedicineContext)
    // const activeUserId = parseInt(localStorage.getItem("activeUser"), 10)


    return (
        <>
        <div className="LastTakenMedicineList">
            <div>
                <h1>Last Taken</h1>
            </div>    
            <div className="LastTakenMeds">
                {
                    Rxs.map(Rx => {
                        return <MedicineTimestamp key={Rx.id} Rx={Rx} {...props} />
                    })
                }
            </div>
        </div>
        </>
    )
}