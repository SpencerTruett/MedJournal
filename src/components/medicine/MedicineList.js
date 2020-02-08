import React, { useContext } from "react"
import "./Medicine.css"
import { MedicineContext, MedicineProvider } from "./MedicineProvider"
import Medicine from "./Medicine"

export default (props) => {
    const { Rxs } = useContext(MedicineContext)
    // const activeUserId = parseInt(localStorage.getItem("activeUser"), 10)

    const upcomingMedicine = Rxs.filter(Rx=>Rx.taken !==true)
    const takenMedicine = Rxs.filter(Rx=>Rx.taken === true)

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