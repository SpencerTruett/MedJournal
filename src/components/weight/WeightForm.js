import React, { useContext, useState, useEffect } from "react"
import { WeightContext } from "./WeightProvider"

export default props => {
    const { Wts, addWt,  updateWt } = useContext(WeightContext)
// The blank strings are a work-around to empty the form when adding and editing
    const [Wt, setWt] = useState({weight : ""})

// The formClear function clears the form fields after submitting (a work-around)
    const formClear = () => {
        setWt({weight : ""})
    }
    const editMode = props.match.params.hasOwnProperty("WtId")

    const handleControlledInputChange = (e) => {

        const newWt = Object.assign({}, Wt)
        newWt[e.target.id] = e.target.value
        setWt(newWt)
    }

    const setDefaults = () => {
        if (editMode) {
            const WtId = parseInt(props.match.params.WtId)
            const selectedWt = Wts.find(e => e.id === WtId) || {}
            setWt(selectedWt)
            // console.log("Wt", selectedWt)
        }
        else {
            setWt({weight : ""})
        }
    }

    useEffect(() => {
        setDefaults()
    }, [Wts])

// If in "edit mode", the values are updated; if not, it creates a new object
    const createNewWt = () => {
            if (editMode) {
                updateWt({
                    id: Wt.id,
                    weight: Wt.weight,
                    timestamp: Wt.timestamp,
                    userId: parseInt(localStorage.getItem("activeUser"))
                })
                    .then(() => props.history.push("/weightTracker"))
            } else {
                addWt({
                  id: Wt.id,
                  weight: parseInt(Wt.weight, 10),
                  timestamp: Date.now(),
                  userId: parseInt(localStorage.getItem("activeUser"))
              }) 
                  .then(() => {
                    formClear()}) 
            }
        }
    
// Ternary statements render different text depending on if you're adding or editing
    return (
        <form className="weightForm">
            <h1 className="weightForm__name">{editMode ? "Edit Weight" : "Record Weight"}</h1>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Weight: </label>
                    <input type="int" id="weight" required className="form-control"
                        proptype="int"
                        placeholder=""
                        value={Wt.weight}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            

            <button type="submit"
                onClick={wt => {
                    wt.preventDefault()
                    createNewWt()
                    }}
                className="btn btn-primary">
                {editMode ? "Save Update" : "Record"}
            </button>

        </form>
    )
}