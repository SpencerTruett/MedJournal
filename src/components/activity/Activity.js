import React, { useContext } from "react"
import { ActivityContext } from "./ActivityProvider"
import "./Activity.css"

export default ({ Act, history }) => {

  const { deleteAct } = useContext(ActivityContext)
  // const loggedInUserId = parseInt(localStorage.getItem("activeUser"))



  function RenderActs() {
      return <section className="activity">
          <div className="act__minutes">{Act.minutes}</div> mins. on
          <div className="act_date">{new Date(Act.timestamp).toLocaleDateString('en-US')}</div> at
          <div className="act__time">{new Date(Act.timestamp).toLocaleTimeString('en-US')}</div>

          <button onClick={() => {
            history.push(`/activityLog/edit/${Act.id}`)
          }}>Edit</button>

          <button onClick={
            () => {
              deleteAct(Act)
                .then(() => {
                  history.push("/activityLog")
                })
            }
          }>Delete</button>
        </section>
    }  
  return RenderActs()

}