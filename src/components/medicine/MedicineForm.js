import React, { useContext, useState, useEffect, useRef } from "react"
import { MedicineContext } from "./MedicineProvider"

export default props => {
    const { Rxs, addRx,  updateRx } = useContext(MedicineContext)
    // The blank strings are a work-around to empty the form when adding and editing; timestamp must be null
    const [Rx, setRx] = useState({name : "", dosage: "", per: "", dayweekmonth: "", time: "", timestamp: null})
    
    // The formClear function clears the form fields after submitting (a work-around); timestamp must be null
    const formClear = () => {
        setRx({name : "", dosage: "", per: "", dayweekmonth: "", time: ""})
    }
    const editMode = props.match.params.hasOwnProperty("RxId")

    const handleControlledInputChange = (e) => {
        const newRx = Object.assign({}, Rx)
        newRx[e.target.id] = e.target.value
        setRx(newRx)
    }

// Using "Day" in the setFood of the else allows for the initial value of the dropdown to be correct; timestamp must be null
    const setDefaults = () => {
        if (editMode) {
            const RxId = parseInt(props.match.params.RxId)
            const selectedRx = Rxs.find(e => e.id === RxId) || {}
            setRx(selectedRx)
            }
        else {
            setRx({name : "", dosage: "", per: "", dayweekmonth: "Day", time: "", timestamp: null})
        }
    }

    useEffect(() => {
        setDefaults()
    }, [Rxs])

// If in "edit mode", the values are updated; if not, it creates a new object
    const createNewRx = () => {
            if (editMode) {
                updateRx({
                    id: Rx.id,
                    name: Rx.name,
                    dosage: Rx.dosage,
                    per: parseInt(Rx.per, 10),
                    dayweekmonth: Rx.dayweekmonth,
                    time: Rx.time,
                    userId: parseInt(localStorage.getItem("activeUser"))
                })
                    .then(() => props.history.push("/medicineLog"))
            } else {
                addRx({
                    id: Rx.id,
                    name: Rx.name,
                    dosage: Rx.dosage,
                    per: parseInt(Rx.per, 10),
                    dayweekmonth: Rx.dayweekmonth,
                    time: Rx.time,
                    timestamp: Rx.timestamp,
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
        <summary>Edit Medicine</summary>
        <form className="MedicineForm">
            <h1 className="MedicineForm__name">Edit Medicine</h1>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" required className="form-control"
                        proptype="varchar"
                        placeholder=""
                        value={Rx.name}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Dosage: </label>
                    <input type="text" id="dosage" required className="form-control"
                        proptype="varchar"
                        placeholder=""
                        value={Rx.dosage}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="number">Amount: </label>
                    <input type="number" id="per" required className="form-control"
                        proptype="int"
                        placeholder=""
                        value={Rx.per}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Day/Week/Month: 
                    <select value={Rx.dayweekmonth} onChange={handleControlledInputChange} id="dayweekmonth" required className="form-control">
                        <option value="Day">Day</option>
                        <option value="Week">Week</option>
                        <option value="Month">Month</option>
                    </select>
                    </label>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Time: </label>
                    <input type="time" id="time" required className="form-control"
                        proptype="varchar"
                        placeholder=""
                        value={Rx.time}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            

            <button type="submit"
                onClick={Rx => {
                    Rx.preventDefault()
                    createNewRx()
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
        <summary>Add New Medicine</summary>
        <form className="MedicineForm">
            <h1 className="MedicineForm__name">Add New Medicine</h1>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" required className="form-control"
                        proptype="varchar"
                        placeholder=""
                        value={Rx.name}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Dosage: </label>
                    <input type="text" id="dosage" required className="form-control"
                        proptype="varchar"
                        placeholder=""
                        value={Rx.dosage}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="number">Amount: </label>
                    <input type="number" id="per" required className="form-control"
                        proptype="int"
                        placeholder=""
                        value={Rx.per}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Day/Week/Month: 
                    <select value={Rx.dayweekmonth} onChange={handleControlledInputChange} id="dayweekmonth" required className="form-control">
                        <option value="Day">Day</option>
                        <option value="Week">Week</option>
                        <option value="Month">Month</option>
                    </select>
                    </label>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Time: </label>
                    <input type="time" id="time" required className="form-control"
                        proptype="varchar"
                        placeholder=""
                        value={Rx.time}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            

            <button type="submit"
                onClick={Rx => {
                    Rx.preventDefault()
                    createNewRx()
                    }}
                className="btn btn-primary">
                Add
            </button>

        </form>
        </details>
    ) 
}}