import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import MedJournal from "./components/MedJournal"

ReactDOM.render(
    <Router>
        <MedJournal />
    </Router>
    , document.getElementById("root"))