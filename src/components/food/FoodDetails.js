import React, { useContext } from "react"
import { FoodContext } from "./FoodProvider"
import "./Food.css"

export default ({ Food, history }) => {

  const { deleteFood } = useContext(FoodContext)
  // const loggedInUserId = parseInt(localStorage.getItem("activeUser"))


// The Food Deatils Card that shows both the meal, the date and time, and the notes; the notes is different from the other page; you reach this card from the view button
  function RenderFoods() {
      return <section className="foods">

          <div className="food__meal">{Food.meal}</div>
          <div className="food__datetime">{Food.datetime}</div>
          <div className="food__notes">{Food.notes}</div>


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