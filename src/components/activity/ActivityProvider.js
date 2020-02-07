import React, { useState, useEffect } from "react"

export const ActivityContext = React.createContext()

export const ActivityProvider = (props) => {
    const [Acts, setAct] = useState([])

    const getAct = () => {
        return fetch("http://localhost:8088/activity?_expand=user")
            .then(res => res.json())
            .then(setAct)
    }

    const addAct = Act => {
        return fetch("http://localhost:8088/activity", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(Act)
        })
            .then(getAct)
    }

    const deleteAct = Act => {
        return fetch(`http://localhost:8088/activity/${Act.id}`, {
            method: "DELETE"
        })
            .then(getAct)
    }


    const updateAct = Act => {
        return fetch(`http://localhost:8088/activity/${Act.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(Act)
        })
            .then(getAct)
    }

    useEffect(() => {
        getAct()
    }, [])

    useEffect(() => {
        // console.log(Acts)
    }, [Acts])

    return (
        <ActivityContext.Provider value={{
            Acts, addAct, deleteAct, updateAct
        }}>
            {props.children}
        </ActivityContext.Provider>
    )
}