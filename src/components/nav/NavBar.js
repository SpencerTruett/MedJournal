import React from "react"
import { Link } from "react-router-dom"
import NavLink from "./NavLink"
// import "./NavBar.css"


export default (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item">
                <NavLink to="/news" {...props}>Profile</NavLink> 
            </li>

            <li className="navbar__item">
                <NavLink to="/" {...props}>Home</NavLink>    
            </li>

            {
                localStorage.getItem("activeUser")
                    ? <li className="navbar__item">
                        <Link className="navbar__link"
                            to=""
                            onClick={e => {
                                e.preventDefault()
                                localStorage.removeItem("activeUser")
                                props.history.push("/")
                            }}
                        >Logout</Link>
                    </li>
                    : ""
            }
        </ul>
    )
}