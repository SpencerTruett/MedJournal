import React, { useContext } from "react"
import { BloodGlucoseContext } from "./BloodGlucoseProvider"
import "./BloodGlucose.css"

export default ({ BG, history }) => {

  const { deleteBG } = useContext(BloodGlucoseContext)
  // const loggedInUserId = parseInt(localStorage.getItem("activeUser"))


// The Blood Glucose Card that shows both the glucose reading, date, and time
  function RenderBGs() {
      return <section className="blood-glucoses">
          <div className="bg__glucose">{BG.glucose} on {new Date(BG.timestamp).toLocaleDateString('en-US')} at {new Date(BG.timestamp).toLocaleTimeString('en-US')}</div>

{/* Pushes to a unique url for the id on the Blood Glucose to edit it; populates in the form */}

          <button onClick={() => {
            history.push(`/bloodGlucose/edit/${BG.id}`)
          }}>Edit</button>

          <button onClick={
            () => {
              deleteBG(BG)
                .then(() => {
                  history.push("/bloodGlucose")
                })
            }
          }>Delete</button>
        </section>
    }  
  return RenderBGs()

}