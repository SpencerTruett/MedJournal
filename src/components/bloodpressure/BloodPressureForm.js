import React, { useContext, useState, useEffect } from "react"
import { BloodPressureContext } from "./BloodPressureProvider"

export default props => {
    const { BPs, addBP,  updateBP } = useContext(BloodPressureContext)
    const [BP, setBP] = useState({})

    const editMode = props.match.params.hasOwnProperty("BPId")

    const handleControlledInputChange = (e) => {

        const newBP = Object.assign({}, BP)
        newBP[e.target.name] = e.target.value
        setBP(newBP)
    }

    const setDefaults = () => {
        if (editMode) {
            const BPId = parseInt(props.match.params.BPId)
            const selectedBP = BPs.find(e => e.id === BPId) || {}
            setBP(selectedBP)
        }
    }

    useEffect(() => {
        setDefaults()
    }, [BPs])

    const createNewBP = () => {
            if (editMode) {
                updateBP({
                    id: BP.id,
                    systolic: BP.systolic,
                    diastolic: BP.diastolic,
                    timestamp: Date.now(),
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
                  .then(() => props.history.push("/bloodPressure"))
            }
        }
    

    return (
        <form className="bloodPressureForm">
            <h2 className="bloodPressureForm__name">{editMode ? "Edit BP" : "Add BP"}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Systolic: </label>
                    <input type="number" name="systolic" required autoFocus className="form-control"
                        proptype="int"
                        placeholder=""
                        defaultValue={BP.systolic}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="url">Diastolic: </label>
                    <input type="number" name="diastolic" required className="form-control"
                        proptype="int"
                        placeholder=""
                        defaultValue={BP.diastolic}
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
                {editMode ? "Save Update" : "Add BP"}
            </button>

        </form>
    )
}