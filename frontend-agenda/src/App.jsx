import React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from "./pages/Login"


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' Component={Login}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
