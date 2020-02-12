import React, { useContext, useState, useEffect } from "react"
import { BloodPressureContext } from "./BloodPressureProvider"
import { notDeepEqual } from "assert"

export default props => {
    const { BPs, addBP,  updateBP } = useContext(BloodPressureContext)
// The blank strings are a work-around to empty the form when adding and editing
    const [BP, setBP] = useState({systolic : "", diastolic: ""})

// The formClear function clears the form fields after submitting (a work-around)
    const formClear = () => {
        setBP({systolic : "", diastolic: ""})
    }
    const editMode = props.match.params.hasOwnProperty("BPId")

    const handleControlledInputChange = (e) => {

        const newBP = Object.assign({}, BP)
        newBP[e.target.id] = e.target.value
        setBP(newBP)
    }

    const setDefaults = () => {
        if (editMode) {
            const BPId = parseInt(props.match.params.BPId)
            const selectedBP = BPs.find(e => e.id === BPId) || {}
            setBP(selectedBP)
            // console.log("bp", selectedBP)
        }
        else {
            setBP({systolic : "", diastolic: ""})
        }
    }

    useEffect(() => {
        setDefaults()
    }, [BPs])

// If in "edit mode", the values are updated; if not, it creates a new object
    const createNewBP = () => {
            if (editMode) {
                updateBP({
                    id: BP.id,
                    systolic: BP.systolic,
                    diastolic: BP.diastolic,
                    timestamp: BP.timestamp,
                    userId: parseInt(localStorage.getItem("activeUser"))
                })
                    .then(() => props.history.push("/bloodPressure"))
            } else {
                addBP({
                  id: BP.id,
                  systolic: parseInt(BP.systolic, 10),
                  diastolic: parseInt(BP.diastolic, 10),
                  timestamp: Date.now(),
                  userId: parseInt(localStorage.getItem("activeUser"))
              }) 
                  .then(() => {
                    formClear()}) 
            }
        }
    
// Ternary statements render different text depending on if you're adding or editing
    return (
        <form className="bloodPressureForm">
            <h1 className="bloodPressureForm__name">{editMode ? "Edit Blood Pressure" : "Record Blood Pressure"}</h1>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Systolic: </label>
                    <input type="number" id="systolic" required className="form-control"
                        proptype="int"
                        placeholder=""
                        value={BP.systolic}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="url">Diastolic: </label>
                    <input type="int" id="diastolic" required className="form-control"
                        proptype="int"
                        placeholder=""
                        value={BP.diastolic}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            

            <button type="submit"
                onClick={bp => {
                    bp.preventDefault()
                    createNewBP()
                    }}
                className="btn btn-primary">
                {editMode ? "Save Update" : "Record"}
            </button>

        </form>
    )
}