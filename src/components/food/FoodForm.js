import React, { useContext, useState, useEffect } from "react"
import { FoodContext } from "./FoodProvider"

export default props => {
    const { Foods, addFood,  updateFood } = useContext(FoodContext)
    const [Food, setFood] = useState({meal : "", datetime: "", notes: ""})

    const formClear = () => {
        setFood({meal : "", datetime: "", notes: ""})
    }
    const editMode = props.location.pathname.includes("edit")
    // console.log(props)

    const handleControlledInputChange = (e) => {

        const newFood = Object.assign({}, Food)
        newFood[e.target.id] = e.target.value
        setFood(newFood)
    }

    const setDefaults = () => {
        if (editMode) {
            const FoodId = parseInt(props.match.params.FoodId)
            const selectedFood = Foods.find(e => e.id === FoodId) || {}
            setFood(selectedFood)
            // console.log("Food", selectedFood)
        }
        else {
            setFood({meal : "", datetime: "", notes: ""})
        }
    }

    useEffect(() => {
        setDefaults()
    }, [Foods])

    const createNewFood = () => {
            if (editMode) {
                updateFood({
                    id: Food.id,
                    meal: Food.meal,
                    datetime: Food.datetime,
                    notes: Food.notes,
                    userId: parseInt(localStorage.getItem("activeUser"))
                })
                    .then(() => props.history.push("/foodJournal"))
            } else {
                addFood({
                  id: Food.id,
                  meal: Food.meal,
                  datetime: Food.datetime,
                  notes: Food.notes,
                  userId: parseInt(localStorage.getItem("activeUser"))
              }) 
                  .then(() => {
                    formClear()}) 
            }
        }
    

    return (
        <details>
        <summary>Add Journal Entry</summary>
        <form className="foodJournalForm">
            <h1 className="foodJournalForm__name">{editMode ? "Edit Food Journal" : "Add New Journal Entry"}</h1>
            <fieldset>
                <div className="form-group">
                <label htmlFor="name">Meal: 
                    <select value={Food.meal} 
                    onChange={handleControlledInputChange} id="meal" required className="form-control">
                        <option value="default">Select...</option>
                        <option value="Breakfast">Breakfast</option>
                        <option value="Lunch">Lunch</option>
                        <option value="Dinner">Dinner</option>
                        <option value="Snack">Snack</option>
                    </select>
                    </label>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Date/Time: </label>
                    <input type="datetime-local" id="datetime" required className="form-control"
                        proptype="varchar"
                        placeholder=""
                        value={Food.datetime}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Notes: </label>
                    <input type="text" id="notes" required className="form-control"
                        proptype="varchar"
                        placeholder=""
                        value={Food.notes}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            
          

            <button type="submit"
                onClick={Food => {
                    Food.preventDefault()
                    createNewFood()
                    }}
                className="btn btn-primary">
                {editMode ? "Save Update" : "Record"}
            </button>

        </form>
        </details>
    )
}