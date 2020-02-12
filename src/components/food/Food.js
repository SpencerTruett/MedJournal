import React, { useContext } from "react"
import { FoodContext } from "./FoodProvider"
import "./Food.css"

export default ({ Food, history }) => {

  const { deleteFood } = useContext(FoodContext)
  // const loggedInUserId = parseInt(localStorage.getItem("activeUser"))

// The Food Journal Card that shows both the meal and the date and time selected

  function RenderFoods() {
      return <section className="foods">

{/* Pushes to a unique url for the id on the Food to view that entry */}

          <button onClick={() => {
            history.push(`/foodJournal/view/${Food.id}`)
          }}>View</button>

          <div className="food__meal">{Food.meal}</div>
          <div className="food__datetime">{Food.datetime}</div>
          {/* <div className="food__notes">{Food.notes}</div> */}

{/* Pushes to a unique url for the id on the Food to edit it; populates in the form */}

          <button onClick={() => {
            history.push(`/foodJournal/edit/${Food.id}`)
          }}>Edit</button>

          <button onClick={
            () => {
              deleteFood(Food)
                .then(() => {
                  history.push("/foodJournal")
                })
            }
          }>Delete</button>
        </section>
    }  
  return RenderFoods()

}