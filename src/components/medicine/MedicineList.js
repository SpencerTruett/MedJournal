import React, { useContext } from "react"
import "./Medicine.css"
import { MedicineContext, MedicineProvider } from "./MedicineProvider"
import Medicine from "./Medicine"

export default (props) => {
    const { Rxs } = useContext(MedicineContext)
    const activeUserId = parseInt(localStorage.getItem("activeUser"), 10)
     const filteredRxs = Rxs.filter(Rx => Rx.userId === activeUserId) || []

// This filters the full list of medicine based on if the checkbox is checked or not 
    const upcomingMedicine = Rxs.filter(Rx=>Rx.taken !==true)
    const takenMedicine = Rxs.filter(Rx=>Rx.taken === true)

// The two lists of medicine: one if the checkbox is true; one if the checkbox is false

const userFunction = () => {
    
    if (filteredRxs.length === 0) {
      return <p>No Medicine Avaliable   </p>;
    } else {
      return (
        <>
        <div className="FullMedicineList">

            <h2>Upcoming Medicine</h2>
            <div className="MedicineList">
                {
                    upcomingMedicine.map(Rx => {
                        return <Medicine key={Rx.id} Rx={Rx} {...props} />
            })}
            </div>

            <h2>Taken Medicine</h2>
            <div className="MedicineList">
                {
                    takenMedicine.map(Rx => {
                        return <Medicine key={Rx.id} Rx={Rx} {...props} />
            })}
            </div>

            </div>
        </>
      )
    }
  }


    return (
        <>
        <div>{
            userFunction()
            }
        </div>
        </>
    )
}