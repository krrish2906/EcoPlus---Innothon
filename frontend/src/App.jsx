import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import SignUpPage from './pages/SignUp'
function App() {

  return (
    <Routes>
      <Route path="/" element={<SignUpPage />} />
    </Routes>
  )
}

export default App
