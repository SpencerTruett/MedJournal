import React, { useContext } from "react"
import { WeightContext } from "./WeightProvider"
import "./Weight.css"

export default ({ Wt, history }) => {

  const { deleteWt } = useContext(WeightContext)
  // const loggedInUserId = parseInt(localStorage.getItem("activeUser"))



  function RenderWts() {
      return <section className="weights">
          <h3 className="wt__weight">{Wt.weight}</h3>
          <div className="wt_date">{new Date(Wt.timestamp).toLocaleDateString('en-US')}</div>
          <div className="wt__time">{new Date(Wt.timestamp).toLocaleTimeString('en-US')}</div>

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