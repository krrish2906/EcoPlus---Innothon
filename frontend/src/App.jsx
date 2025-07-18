import React from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import PostForm from './pages/postForm'
import SignUpPage from './pages/SignUp'
import LogInPage from './pages/Login'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/user/profile" element={<ProfilePage />} />
      <Route path="/auth/signup" element={<SignUpPage />} />
      <Route path="/auth/login" element={<LogInPage />} />
    </Routes>
  )
}

export default App
