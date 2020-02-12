import React, { useState, useEffect } from "react"

// Provides the context to the food pages 
export const FoodContext = React.createContext()

export const FoodProvider = (props) => {
    const [Foods, setFood] = useState([])

    const getFood = () => {
        return fetch("http://localhost:8088/food?_expand=user")
            .then(res => res.json())
            .then(setFood)
    }

    const addFood = Food => {
        return fetch("http://localhost:8088/food", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(Food)
        })
            .then(getFood)
    }

    const deleteFood = Food => {
        return fetch(`http://localhost:8088/food/${Food.id}`, {
            method: "DELETE"
        })
            .then(getFood)
    }


    const updateFood = Food => {
        return fetch(`http://localhost:8088/food/${Food.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(Food)
        })
            .then(getFood)
    }

    useEffect(() => {
        getFood()
    }, [])

    useEffect(() => {
        // console.log(Foods)
    }, [Foods])

    return (
        <FoodContext.Provider value={{
            Foods, addFood, deleteFood, updateFood
        }}>
            {props.children}
        </FoodContext.Provider>
    )
}