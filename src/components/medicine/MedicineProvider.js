import React, { useState, useEffect } from "react"

// Provides the context to the medicine pages 
export const MedicineContext = React.createContext()

export const MedicineProvider = (props) => {
    const [Rxs, setRx] = useState([])

    const getRx = () => {
        return fetch("http://localhost:8088/medicine?_expand=user")
            .then(res => res.json())
            .then(setRx)
    }

    const addRx = Rx => {
        return fetch("http://localhost:8088/medicine", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(Rx)
        })
            .then(getRx)
    }

    const deleteRx = Rx => {
        return fetch(`http://localhost:8088/medicine/${Rx.id}`, {
            method: "DELETE"
        })
            .then(getRx)
    }


    const updateRx = Rx => {
        return fetch(`http://localhost:8088/medicine/${Rx.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(Rx)
        })
            .then(getRx)
    }

// The patch method being used to patch in my checkbox boolean and a timestamp
    const patchRx = Rx => {
        return fetch(`http://localhost:8088/medicine/${Rx.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(Rx)
        })
            .then(getRx)
      }

    useEffect(() => {
        getRx()
    }, [])

    useEffect(() => {
        
    }, [Rxs])

    return (
        <MedicineContext.Provider value={{
            Rxs, addRx, deleteRx, updateRx, patchRx
        }}>
            {props.children}
        </MedicineContext.Provider>
    )
}