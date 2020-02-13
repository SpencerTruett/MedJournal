import React, { useContext } from "react"
import { MedicineContext } from "./MedicineProvider"
import "./Medicine.css"

export default ({ Rx }) => {

  const { deleteRx, patchRx } = useContext(MedicineContext)
  // const loggedInUserId = parseInt(localStorage.getItem("activeUser"))

// Renders the date and time that a timestamp was recorded (from the checkbox)
  function RenderRxs() {
      return <section className="medicines__timestamp">
          <div className="Rx__name">{Rx.name}</div>: Last taken on 
          <div className="Rx_date">{new Date(Rx.timestamp).toLocaleDateString('en-US')}</div> at 
          <div className="Rx__time">{new Date(Rx.timestamp).toLocaleTimeString('en-US')}</div>
                
        </section>
    }  
  return RenderRxs()

}