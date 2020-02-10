import React, { useContext } from "react"
import { FoodContext } from "./FoodProvider"
import "./Food.css"

export default ({ Food, history }) => {

  const { deleteFood } = useContext(FoodContext)
  // const loggedInUserId = parseInt(localStorage.getItem("activeUser"))



  function RenderFoods() {
      return <section className="foods">

          <button onClick={() => {
            history.push(`/foodJournal/view/${Food.id}`)
          }}>View</button>

          <h3 className="food__meal">{Food.meal}</h3>
          <h3 className="food__datetime">{Food.datetime}</h3>
          <h3 className="food__notes">{Food.notes}</h3>


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