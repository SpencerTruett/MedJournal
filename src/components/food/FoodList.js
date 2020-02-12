import React, { useContext } from "react"
import { FoodContext } from "./FoodProvider"
import FoodComponent from "./Food"
import "./Food.css"

export default (props) => {
    const { Foods } = useContext(FoodContext)
    // const activeUserId = parseInt(localStorage.getItem("activeUser"), 10)

// Creates the list of all of the Food Journal Entries
    return (
        <>
        <div className="FoodList">
            <div>
                <h1>Food Journal Entries</h1>
            </div>    
            <div className="FoodJournal">
                {
                    Foods.map(Food => {
                        return <FoodComponent key={Food.id} Food={Food} {...props} />
                    })
                }
            </div>
        </div>
        </>
    )
}