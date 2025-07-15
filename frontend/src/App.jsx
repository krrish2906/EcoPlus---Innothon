import React from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import PostForm from './pages/postForm'
import SignUpPage from './pages/SignUp'
import LogInPage from './pages/Login'
function App() {

  return (
    <Routes>
      <Route path="/" element={<SignUpPage />} />
    </Routes>
  )
}

export default App
