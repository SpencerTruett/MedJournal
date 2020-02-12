import React, { useContext } from "react"
import { WeightContext } from "./WeightProvider"
import "./Weight.css"

export default ({ Wt, history }) => {

  const { deleteWt } = useContext(WeightContext)
  // const loggedInUserId = parseInt(localStorage.getItem("activeUser"))

// The Weight Card that shows both the weigth, date, and time

  function RenderWts() {
      return <section className="weights">
          <div className="wt__weight">{Wt.weight}</div>lbs on
          <div className="wt_date">{new Date(Wt.timestamp).toLocaleDateString('en-US')}</div> at
          <div className="wt__time">{new Date(Wt.timestamp).toLocaleTimeString('en-US')}</div>


{/* Pushes to a unique url for the id on the Weight to edit it; populates in the form */}

          <button onClick={() => {
            history.push(`/weightTracker/edit/${Wt.id}`)
          }}>Edit</button>

          <button onClick={
            () => {
              deleteWt(Wt)
                .then(() => {
                  history.push("/weightTracker")
                })
            }
          }>Delete</button>
        </section>
    }  
  return RenderWts()

}