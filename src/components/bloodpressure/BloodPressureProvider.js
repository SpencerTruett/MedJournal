import React, { useState, useEffect } from "react"

// Provides the context to the blood glucose pages 
export const BloodPressureContext = React.createContext()

export const BloodPressureProvider = (props) => {
    const [BPs, setBP] = useState([])

    const getBP = () => {
        return fetch("http://localhost:8088/bloodPressure?_expand=user")
            .then(res => res.json())
            .then(setBP)
    }

    const addBP = BP => {
        return fetch("http://localhost:8088/bloodPressure", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(BP)
        })
            .then(getBP)
    }

    const deleteBP = BP => {
        return fetch(`http://localhost:8088/bloodPressure/${BP.id}`, {
            method: "DELETE"
        })
            .then(getBP)
    }


    const updateBP = BP => {
        return fetch(`http://localhost:8088/bloodPressure/${BP.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(BP)
        })
            .then(getBP)
    }

    useEffect(() => {
        getBP()
    }, [])

    useEffect(() => {
        // console.log(BPs)
    }, [BPs])

    return (
        <BloodPressureContext.Provider value={{
            BPs, addBP, deleteBP, updateBP
        }}>
            {props.children}
        </BloodPressureContext.Provider>
    )
}