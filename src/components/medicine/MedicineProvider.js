import React, { useState, useEffect } from "react"

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

    useEffect(() => {
        getRx()
    }, [])

    useEffect(() => {
        console.log(Rxs)
    }, [Rxs])

    return (
        <MedicineContext.Provider value={{
            Rxs, addRx, deleteRx, updateRx
        }}>
            {props.children}
        </MedicineContext.Provider>
    )
}