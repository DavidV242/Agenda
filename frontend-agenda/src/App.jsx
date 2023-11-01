import React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from "./pages/Login"
import Users from "./pages/Users"


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' Component={Login}/>
      <Route path='/users' Component={Users}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
