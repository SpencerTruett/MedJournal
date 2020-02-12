import React, { useContext, useState, useEffect } from "react"
import { BloodGlucoseContext } from "./BloodGlucoseProvider"

export default props => {
    const { BGs, addBG,  updateBG } = useContext(BloodGlucoseContext)
// The blank strings are a work-around to empty the form when adding and editing
    const [BG, setBG] = useState({glucose : ""})

// The formClear function clears the form fields after submitting (a work-around)
    const formClear = () => {
        setBG({glucose : ""})
    }
    const editMode = props.match.params.hasOwnProperty("BGId")

    const handleControlledInputChange = (e) => {

        const newBG = Object.assign({}, BG)
        newBG[e.target.id] = e.target.value
        setBG(newBG)
    }

    const setDefaults = () => {
        if (editMode) {
            const BGId = parseInt(props.match.params.BGId)
            const selectedBG = BGs.find(e => e.id === BGId) || {}
            setBG(selectedBG)
            // console.log("BG", selectedBG)
        }
        else {
            setBG({glucose : ""})
        }
    }

    useEffect(() => {
        setDefaults()
    }, [BGs])

// If in "edit mode", the values are updated; if not, it creates a new object
    const createNewBG = () => {
            if (editMode) {
                updateBG({
                    id: BG.id,
                    glucose: BG.glucose,
                    timestamp: BG.timestamp,
                    userId: parseInt(localStorage.getItem("activeUser"))
                })
                    .then(() => props.history.push("/bloodGlucose"))
            } else {
                addBG({
                  id: BG.id,
                  glucose: parseInt(BG.glucose, 10),
                  timestamp: Date.now(),
                  userId: parseInt(localStorage.getItem("activeUser"))
              }) 
                  .then(() => {
                    formClear()}) 
            }
        }
    
// Ternary statements render different text depending on if you're adding or editing
    return (
        <form className="bloodGlucoseForm">
            <h1 className="bloodGlucoseForm__name">{editMode ? "Edit Blood Glucose" : "Record Blood Glucose"}</h1>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Blood Glucose: </label>
                    <input type="int" id="glucose" required className="form-control"
                        proptype="int"
                        placeholder=""
                        value={BG.glucose}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>

            <button type="submit"
                onClick={bg => {
                    bg.preventDefault()
                    createNewBG()
                    }}
                className="btn btn-primary">
                {editMode ? "Save Update" : "Record"}
            </button>

        </form>
    )
}