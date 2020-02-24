import React, { useContext } from "react"
import { FoodContext } from "./FoodProvider"
import "./Food.css"

export default ({ Food, history }) => {

  const { deleteFood } = useContext(FoodContext)
  

// The Food Deatils Card that shows both the meal, the date and time, and the notes; the notes is different from the other page; you reach this card from the view button
  function RenderFoods() {
      return <section className="foodDetails">

          <h3 className="food__meal">{Food.meal}</h3>
          <h3 className="food__datetime">{Food.datetime}</h3>
          <h3 className="food__notes">{Food.notes}</h3>


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