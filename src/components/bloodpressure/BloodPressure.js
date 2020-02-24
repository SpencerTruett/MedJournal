import React, { useContext } from "react"
import { BloodPressureContext } from "./BloodPressureProvider"
import "./BloodPressure.css"

export default ({ BP, history }) => {

  const { deleteBP } = useContext(BloodPressureContext)
  // const loggedInUserId = parseInt(localStorage.getItem("activeUser"))


// The Blood Pressure Card that shows both the systolic reading, diastolic reading, date, and time
  function RenderBPs() {
      return <section className="blood-pressures">
          <div className="bp__systolic">{BP.systolic}/{BP.diastolic} on {new Date(BP.timestamp).toLocaleDateString('en-US')} at {new Date(BP.timestamp).toLocaleTimeString('en-US')}</div>

{/* Pushes to a unique url for the id on the Blood Pressure to edit it; populates in the form */}

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