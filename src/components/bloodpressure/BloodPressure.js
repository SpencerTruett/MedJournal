import React, { useContext } from "react"
import { BloodPressureContext } from "./BloodPressureProvider"
import "./BloodPressure.css"

export default ({ BP, history }) => {

  const { deleteBP } = useContext(BloodPressureContext)
  // const loggedInUserId = parseInt(localStorage.getItem("activeUser"))



  function RenderBPs() {
      return <section className="blood-pressures">
          <div className="bp__systolic">{BP.systolic}</div> / 
          <div className="bp__diastolic">{BP.diastolic}</div> on
          <div className="bp_date">{new Date(BP.timestamp).toLocaleDateString('en-US')}</div> at
          <div className="bp__time">{new Date(BP.timestamp).toLocaleTimeString('en-US')}</div>

          <button onClick={() => {
            history.push(`/bloodPressure/edit/${BP.id}`)
          }}>Edit</button>

          <button onClick={
            () => {
              deleteBP(BP)
                .then(() => {
                  history.push("/bloodPressure")
                })
            }
          }>Delete</button>
        </section>
    }  
  return RenderBPs()

}