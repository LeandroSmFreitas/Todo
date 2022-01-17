import { Routes as Router, Route } from "react-router-dom"

import React from 'react'
import HomePage from "../pages/Home"

export default function Routes() {
    return (
        <Router>
            <Route path="/" element={<HomePage/>}/>
        </Router>
    )
}
