import React, { useState, useEffect } from "react"

export const WeightContext = React.createContext()

export const WeightProvider = (props) => {
    const [Wts, setWt] = useState([])

    const getWt = () => {
        return fetch("http://localhost:8088/weight?_expand=user")
            .then(res => res.json())
            .then(setWt)
    }

    const addWt = Wt => {
        return fetch("http://localhost:8088/weight", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(Wt)
        })
            .then(getWt)
    }

    const deleteWt = Wt => {
        return fetch(`http://localhost:8088/weight/${Wt.id}`, {
            method: "DELETE"
        })
            .then(getWt)
    }


    const updateWt = Wt => {
        return fetch(`http://localhost:8088/weight/${Wt.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(Wt)
        })
            .then(getWt)
    }

    useEffect(() => {
        getWt()
    }, [])

    useEffect(() => {
        console.log(Wts)
    }, [Wts])

    return (
        <WeightContext.Provider value={{
            Wts, addWt, deleteWt, updateWt
        }}>
            {props.children}
        </WeightContext.Provider>
    )
}