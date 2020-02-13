import React, { useContext } from "react"
import { FoodContext } from "./FoodProvider"
import FoodComponent from "./Food"
import "./Food.css"

export default (props) => {
    const { Foods } = useContext(FoodContext)
    const activeUserId = parseInt(localStorage.getItem("activeUser"), 10)
    const filteredFoods = Foods.filter(Food => Food.userId === activeUserId) || []

// Creates the list of all of the Food Journal Entries-- filtered by user-- and returning a message string when no entries are present

const userFunction = () => {
    if (filteredFoods.length === 0) {
      return <p>No Entries Avaliable</p>;
    } else {
      return (
        <>
          {filteredFoods.map(Food => {
                return <FoodComponent key={Food.id} Food={Food} {...props} />
          })}
        </>
      )
    }
  }


    return (
        <>
        <div className="FoodList">
            <div>
                <h1>Food Journal Entries</h1>
            </div>    
            <div className="FoodJournal">
                {
                    userFunction() 
                    
                }
            </div>
        </div>
        </>
    )
}