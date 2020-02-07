import React, { useContext } from "react"
import { FoodContext } from "./FoodProvider"
import FoodComponent from "./Food"
import "./Food"

export default (props) => {
    const { Foods } = useContext(FoodContext)
    // const activeUserId = parseInt(localStorage.getItem("activeUser"), 10)


    return (
        <>
        <div className="FoodList">
            <div>
                <h1>Food Journal</h1>
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