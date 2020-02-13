import React, { Profiler } from "react"
import { Link } from "react-router-dom"
import NavLink from "./NavLink"
import "./Nav.css"


export default (props) => {
    
// The three links for my main nav bar at the top of the page: Profile, home, and logout 
    return (
        <section className="navbar">
            <div className="navbar__item">
                <NavLink className="navbar__link" to="/profile" {...props}>Profile</NavLink> 
            </div>

            <div className="navbar__item">
                <NavLink className="navbar__link" to="/" {...props}>Home</NavLink>    
            </div>

{/* Logs out the active user  */}
            {
                localStorage.getItem("activeUser")
                    ? <div className="navbar__item">
                        <Link className="navbar__link"
                            to=""
                            onClick={e => {
                                e.preventDefault()
                                localStorage.removeItem("activeUser")
                                props.history.push("/")
                            }}
                        >Logout</Link>
                    </div>
                    : ""
            }
        </section>
    )
}