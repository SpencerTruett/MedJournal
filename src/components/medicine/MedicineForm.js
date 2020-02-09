import React, { useContext, useState, useEffect } from "react"
import { MedicineContext } from "./MedicineProvider"

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
            setRx({name : "", dosage: "", per: "", dayweekmonth: "", time: ""})
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
        <form className="MedicineForm">
            <h1 className="MedicineForm__name">{editMode ? "Edit Medicine" : "Add Medicine"}</h1>
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
                    <label htmlFor="name">Amount: </label>
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
                    <label htmlFor="name">Day/Week/Month: </label>
                    <input type="text" id="dayweekmonth" required className="form-control"
                        proptype="varchar"
                        placeholder=""
                        value={Rx.dayweekmonth}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Date: </label>
                    <input type="datetime-local" name="dateTime" className="form-control"
                        proptype="varchar"
                        value={Rx.time}
                        onChange={handleControlledInputChange}>
                    </input>
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
    )
}