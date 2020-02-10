import React, { useContext } from "react"
import { MedicineContext } from "./MedicineProvider"
import "./Medicine.css"

export default ({ Rx }) => {

  const { deleteRx, patchRx } = useContext(MedicineContext)
  // const loggedInUserId = parseInt(localStorage.getItem("activeUser"))


  function RenderRxs() {
      return <section className="medicines">
          <h3 className="Rx__name">{Rx.name}</h3>
          <div className="Rx_date">{new Date(Rx.timestamp).toLocaleDateString('en-US')}</div>
          <div className="Rx__time">{new Date(Rx.timestamp).toLocaleTimeString('en-US')}</div>
                
        </section>
    }  
  return RenderRxs()

}