import React, { useContext } from "react"
import { BloodGlucoseContext } from "./BloodGlucoseProvider"
import "./BloodGlucose.css"

export default ({ BG, history }) => {

  const { deleteBG } = useContext(BloodGlucoseContext)
  // const loggedInUserId = parseInt(localStorage.getItem("activeUser"))



  function RenderBGs() {
      return <section className="blood-glucoses">
          <h3 className="bg__glucose">{BG.glucose}</h3>
          <div className="bg_date">{new Date(BG.timestamp).toLocaleDateString('en-US')}</div>
          <div className="bg__time">{new Date(BG.timestamp).toLocaleTimeString('en-US')}</div>

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