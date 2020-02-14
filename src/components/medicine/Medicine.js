import React, { useContext } from "react"
import { MedicineContext } from "./MedicineProvider"
import "./Medicine.css"

export default ({ Rx, history }) => {

  const { deleteRx, patchRx } = useContext(MedicineContext)
  // const loggedInUserId = parseInt(localStorage.getItem("activeUser"))


  // This code is responsible for changing the boolean value from true to false which allows it to render in the two lists; This also adds a timestamp of Date.now when the checkbox is checked to true
  const checkbox = ()=>{
    let checkboxValue = true
    if(Rx.taken === true){
        return <>
        <input type="checkbox" name="checkbox" onChange={()=>{
            checkboxValue = false
            const patchedRX= {
                taken:checkboxValue,
                id: Rx.id,
            }
            patchRx(patchedRX).then(()=> history.push("/medicineLog"))
        }} checked></input>
        
        </>
    }else{
        checkboxValue = true
        
        return <>
        <input type="checkbox" name="checkbox" onChange={()=>{
            const patchedRx= {
                taken:checkboxValue,
                id: Rx.id,
                timestamp: Date.now()
            }
            patchRx(patchedRx).then(()=> history.push("/medicineLog"))
        }}></input>
        </>
    }
}


// The Medicine Card that shows the name, dosage, amount per day/week/month, and the time it is to be taken

  function RenderRxs() {
      return <section className="medicines">
        <div className="rx__info">
          <div className="Rx__name rx__item">{Rx.name}: {Rx.dosage}</div>
        </div>
        <div className="rx__directions">
          <div className="Rx__per rx__item">{Rx.per} per {Rx.dayweekmonth} at {Rx.time}</div>
        </div>

          
        <div className="rx__buttons">
{/* Pushes to a unique url for the id on the Food to edit it; populates in the form */}

          <button onClick={() => {
            history.push(`/medicineLog/edit/${Rx.id}`)
          }}>Edit</button>

          <button onClick={
            () => {
              deleteRx(Rx)
              .then(() => {
                history.push("/medicineLog")
              })
            }
          }>Delete</button>


{/* The actual checkbox  */}
          <label>Taken?</label> {checkbox()}
        </div>

        </section>
    }  
  return RenderRxs()

}