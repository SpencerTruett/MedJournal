import React, { useContext } from "react"
import { BloodPressureContext } from "./BloodPressureProvider"
import "./BloodPressure.css"

export default ({ BP, history }) => {

  const { deleteBP } = useContext(BloodPressureContext)
  const loggedInUserId = parseInt(localStorage.getItem("activeUser"))



  function RenderBPs() {
      return <section className="blood-pressures">
          <h3 className="bp__systolic">{BP.systolic}</h3>
          <h3 className="bp__diastolic">{BP.diastolic}</h3>
          <div className="bp_date">{new Date(BP.timestamp).toLocaleDateString('en-US')}</div>
          <div className="bp__time">{new Date(BP.timestamp).toLocaleTimeString('en-US')}</div>
        </section>
    }  
  return RenderBPs()

}