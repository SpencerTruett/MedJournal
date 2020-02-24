import React, { useContext } from "react"
import { ActivityContext } from "./ActivityProvider"
import "./Activity.css"

export default ({ Act, history }) => {

  const { deleteAct } = useContext(ActivityContext)
  // const loggedInUserId = parseInt(localStorage.getItem("activeUser"))


// The Activity Card that shows both the minutes of activity, date, and time
  function RenderActs() {
      return <section className="activity">
          <div className="act__minutes">{Act.minutes} mins. on {new Date(Act.timestamp).toLocaleDateString('en-US')} at {new Date(Act.timestamp).toLocaleTimeString('en-US')}</div>

{/* Pushes to a unique url for the id on the Activity to edit it; populates in the form */}

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