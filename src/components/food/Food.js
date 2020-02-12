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

          <div className="food__meal">{Food.meal}</div>
          <div className="food__datetime">{Food.datetime}</div>
          {/* <div className="food__notes">{Food.notes}</div> */}


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