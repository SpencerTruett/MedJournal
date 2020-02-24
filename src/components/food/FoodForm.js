import React, { useContext, useState, useEffect } from "react"
import { FoodContext } from "./FoodProvider"
import { ADDRCONFIG } from "dns"

export default props => {
    const { Foods, addFood,  updateFood } = useContext(FoodContext)
// The blank strings are a work-around to empty the form when adding and editing
    const [Food, setFood] = useState({meal : "", datetime: "", notes: ""})

// The formClear function clears the form fields after submitting (a work-around)
    const formClear = () => {
        setFood({meal : "", datetime: "", notes: ""})
    }
    const editMode = props.location.pathname.includes("edit")
    
    const handleControlledInputChange = (e) => {
        
        const newFood = Object.assign({}, Food)
        newFood[e.target.id] = e.target.value
        setFood(newFood)
                
    }

// Using "Breakfast" in the setFood of the else allows for the initial value of the dropdown to be correct
    const setDefaults = () => {
        if (editMode) {
            const FoodId = parseInt(props.match.params.FoodId)
            const selectedFood = Foods.find(e => e.id === FoodId) || {}
            setFood(selectedFood)
                    }
        else {
            setFood({meal : "Breakfast", datetime: "", notes: ""})
        }
    }

    useEffect(() => {
        setDefaults()
    }, [Foods])

// If in "edit mode", the values are updated; if not, it creates a new object
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
// Returning two differnt forms: one for edit mode, one for adding; The edit has an open attribute on the details to keep the detail open when swapping into editMode. Otherwise, the details collapsed when changing the url to edit thus hiding the information that was populating the form 
if (editMode){
    return (
        <details open> 
        <summary>Edit Journal Entry</summary>
        <form className="foodJournalForm">
            <h1 className="foodJournalForm__name">Edit Food Journal
            </h1>
            <fieldset>
                <div className="form-group">
                <label htmlFor="name">Meal: 
                    <select value={Food.meal} 
                    onChange={handleControlledInputChange} id="meal" required className="form-control">
                        <option value="Breakfast">Breakfast</option>
                        <option value="Lunch">Lunch</option>
                        <option value="Dinner">Dinner</option>
                        <option value="Snack">Snack</option>
                    </select>
                    </label>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-groxup">
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
               Save Update
                
            </button>

        </form>
        </details>
    ) 
}
else {
    return (
        <details> 
        <summary>Add Journal Entry</summary>
        <form className="foodJournalForm">
            <h1 className="foodJournalForm__name">Add New Journal Entry</h1>
            <fieldset>
                <div className="form-group">
                <label htmlFor="name">Meal: 
                    <select value={Food.meal} 
                    onChange={handleControlledInputChange} id="meal" required className="form-control">
                        <option value="Breakfast">Breakfast</option>
                        <option value="Lunch">Lunch</option>
                        <option value="Dinner">Dinner</option>
                        <option value="Snack">Snack</option>
                    </select>
                    </label>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-groxup">
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
                Record
                
            </button>

        </form>
        </details>
    )
}}