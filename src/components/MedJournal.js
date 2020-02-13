import React from "react"
import { Route, Redirect} from "react-router-dom"
import ApplicationViews from "./ApplicationViews"
import NavBar from "./nav/NavBar"
import Login from "./auth/Login"
import Register from "./auth/Register"


// The routs for the nav bar and application views in the app; also holds the login and register pages 
export default () => (
    <>
        <Route render={() => {
            if (localStorage.getItem("activeUser")) {
                return (
                    <>
                        <Route render={props => <NavBar {...props} />} />
                        <Route render={props => <ApplicationViews {...props} />} />
                    </>
                )
            } else {
                return <Redirect to="/login" />
            }
        }} />

        <Route path="/login" render={props => <Login {...props} />} />
        <Route path="/register" render={props => <Register {...props} />} />
    </>
)