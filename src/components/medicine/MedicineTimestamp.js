import React, { useContext } from "react"
import { MedicineContext } from "./MedicineProvider"
import "./Medicine.css"

export default ({ Rx }) => {

  const { deleteRx, patchRx } = useContext(MedicineContext)
  
// Renders the date and time that a timestamp was recorded (from the checkbox)
  function RenderRxs() {
      return <section className="medicines__timestamp">
          <div className="Rx__name timestamp__size">{Rx.name}: Last taken on {new Date(Rx.timestamp).toLocaleDateString('en-US')} at {new Date(Rx.timestamp).toLocaleTimeString('en-US')}</div>
                
        </section>
    }  
  return RenderRxs()

}