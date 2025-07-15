import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import SignUpPage from './pages/SignUp'
import LogInPage from './pages/Login'
function App() {

    return (
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/auth/signup" element={<SignUpPage />} />
        <Route path="/auth/login" element={<LogInPage />} />
      </Routes>
    )
}

export default App
