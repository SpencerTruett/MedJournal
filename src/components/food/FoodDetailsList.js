import React, { useContext } from "react"
import { FoodContext } from "./FoodProvider"
import FoodDetails from "./FoodDetails"
import "./Food.css"

export default (props) => {
    const { Foods } = useContext(FoodContext)
    // const activeUserId = parseInt(localStorage.getItem("activeUser"), 10)

// Filters by the specific ID of the view button that was pressed 
    const sortedFoods = Foods.filter(food => food.id === parseInt(props.match.params.FoodId))
    // console.log(sortedFoods)

// Creates the list of the single Food Details Card that was filtered
    return (
        <>
        <div className="FoodList">
            <div>
                <h1>The Entry You Are Viewing</h1>
            </div>    
            <div className="FoodJournal">
                {
                    sortedFoods.map(Food => {
                        return <FoodDetails key={Food.id} Food={Food} {...props} />
                    })
                }
            </div>
        </div>
        </>
    )
}