import React, { useContext, useState, useEffect } from "react"
import { ActivityContext } from "./ActivityProvider"

export default props => {
    const { Acts, addAct,  updateAct } = useContext(ActivityContext)
    const [Act, setAct] = useState({minutes : ""})

    const formClear = () => {
        setAct({minutes : ""})
    }
    const editMode = props.match.params.hasOwnProperty("ActId")

    const handleControlledInputChange = (e) => {

        const newAct = Object.assign({}, Act)
        newAct[e.target.id] = e.target.value
        setAct(newAct)
    }

    const setDefaults = () => {
        if (editMode) {
            const ActId = parseInt(props.match.params.ActId)
            const selectedAct = Acts.find(e => e.id === ActId) || {}
            setAct(selectedAct)
            // console.log("Act", selectedAct)
        }
        else {
            setAct({minutes : ""})
        }
    }

    useEffect(() => {
        setDefaults()
    }, [Acts])

    const createNewAct = () => {
            if (editMode) {
                updateAct({
                    id: Act.id,
                    minutes: Act.minutes,
                    timestamp: Act.timestamp,
                    userId: parseInt(localStorage.getItem("activeUser"))
                })
                    .then(() => props.history.push("/activityLog"))
            } else {
                addAct({
                  id: Act.id,
                  minutes: parseInt(Act.minutes, 10),
                  timestamp: Date.now(),
                  userId: parseInt(localStorage.getItem("activeUser"))
              }) 
                  .then(() => {
                    formClear()}) 
            }
        }
    

    return (
        <form className="activityLogForm">
            <h1 className="activityLogForm__name">{editMode ? "Edit Activity" : "Record Activity"}</h1>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Minutes: </label>
                    <input type="int" id="minutes" required className="form-control"
                        proptype="int"
                        placeholder=""
                        value={Act.minutes}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            

            <button type="submit"
                onClick={Act => {
                    Act.preventDefault()
                    createNewAct()
                    }}
                className="btn btn-primary">
                {editMode ? "Save Update" : "Record"}
            </button>

        </form>
    )
}