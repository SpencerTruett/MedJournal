import React, { useContext, useState, useEffect, useRef } from "react"
import { MedicineContext } from "./MedicineProvider"
// import {DateInputComponent, DateFormats } from "react-controlled-date-input"

export default props => {
    const { Rxs, addRx,  updateRx } = useContext(MedicineContext)
    const [Rx, setRx] = useState({name : "", dosage: "", per: "", dayweekmonth: "", time: ""})
    
    const formClear = () => {
        setRx({name : "", dosage: "", per: "", dayweekmonth: "", time: ""})
    }
    const editMode = props.match.params.hasOwnProperty("RxId")

    const handleControlledInputChange = (e) => {
        const newRx = Object.assign({}, Rx)
        newRx[e.target.id] = e.target.value
        setRx(newRx)
    }

    const setDefaults = () => {
        if (editMode) {
            const RxId = parseInt(props.match.params.RxId)
            const selectedRx = Rxs.find(e => e.id === RxId) || {}
            setRx(selectedRx)
            // console.log("Rx", selectedRx)
        }
        else {
            formClear()
        }
    }

    useEffect(() => {
        setDefaults()
    }, [Rxs])

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
                    userId: parseInt(localStorage.getItem("activeUser"))
              }) 
                  .then(() => {
                    formClear()}) 
            }
        }
    

    return (
        <details>
        <summary>Add New Medicine</summary>
        <form className="MedicineForm">
            <h1 className="MedicineForm__name">{editMode ? "Edit Medicine" : "Add New Medicine"}</h1>
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
                        <option value="default">Select...</option>
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
                {editMode ? "Save Update" : "Add"}
            </button>

        </form>
        </details>
    )
}