import React, { useState, useEffect } from "react"

export const BloodPressureContext = React.createContext()

export const BloodPressureProvider = (props) => {
    const [BP, setBP] = useState([])

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
        console.log(BP)
    }, [BP])

    return (
        <BloodPressureContext.Provider value={{
            BP, addBP, deleteBP, updateBP
        }}>
            {props.children}
        </BloodPressureContext.Provider>
    )
}