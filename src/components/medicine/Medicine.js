import React, { useContext } from "react"
import { MedicineContext } from "./MedicineProvider"
import "./Medicine.css"

export default ({ Rx, history }) => {

  const { deleteRx, patchRx } = useContext(MedicineContext)
  // const loggedInUserId = parseInt(localStorage.getItem("activeUser"))

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



  function RenderRxs() {
      return <section className="medicines">
          <div className="Rx__name">{Rx.name}</div>
          <div className="Rx__dosage">{Rx.dosage}</div>
          <div className="Rx__per">{Rx.per}</div> per 
          <div className="Rx__dayweekmonth">{Rx.dayweekmonth}</div> at
          <div className="Rx__time">{Rx.time}</div>

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

          <label>Taken?</label> {checkbox()}
          
        </section>
    }  
  return RenderRxs()

}