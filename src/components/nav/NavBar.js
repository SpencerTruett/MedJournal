import React, { Profiler } from "react"
import { Link } from "react-router-dom"
import NavLink from "./NavLink"
// import "./NavBar.css"


export default (props) => {
    
// The three links for my main nav bar at the top of the page: Profile, home, and logout 
    return (
        <ul className="navbar">
            <li className="navbar__item">
                <NavLink to="/profile" {...props}>Profile</NavLink> 
            </li>

            <li className="navbar__item">
                <NavLink to="/" {...props}>Home</NavLink>    
            </li>

{/* Logs out the active user  */}
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