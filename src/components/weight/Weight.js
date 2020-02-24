import React, { useContext } from "react"
import { WeightContext } from "./WeightProvider"
import "./Weight.css"

export default ({ Wt, history }) => {

  const { deleteWt } = useContext(WeightContext)
  // const loggedInUserId = parseInt(localStorage.getItem("activeUser"))

// The Weight Card that shows both the weigth, date, and time

  function RenderWts() {
      return <section className="weights">
          <div className="wt__weight">{Wt.weight} lbs on {new Date(Wt.timestamp).toLocaleDateString('en-US')} at {new Date(Wt.timestamp).toLocaleTimeString('en-US')}</div>


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