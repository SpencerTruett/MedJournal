import React, { useState, useEffect } from "react"

export const BloodGlucoseContext = React.createContext()

export const BloodGlucoseProvider = (props) => {
    const [BGs, setBG] = useState([])

    const getBG = () => {
        return fetch("http://localhost:8088/bloodGlucose?_expand=user")
            .then(res => res.json())
            .then(setBG)
    }

    const addBG = BG => {
        return fetch("http://localhost:8088/bloodGlucose", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(BG)
        })
            .then(getBG)
    }

    const deleteBG = BG => {
        return fetch(`http://localhost:8088/bloodGlucose/${BG.id}`, {
            method: "DELETE"
        })
            .then(getBG)
    }


    const updateBG = BG => {
        return fetch(`http://localhost:8088/bloodGlucose/${BG.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(BG)
        })
            .then(getBG)
    }

    useEffect(() => {
        getBG()
    }, [])

    useEffect(() => {
        console.log(BGs)
    }, [BGs])

    return (
        <BloodGlucoseContext.Provider value={{
            BGs, addBG, deleteBG, updateBG
        }}>
            {props.children}
        </BloodGlucoseContext.Provider>
    )
}