import React from 'react'
import './App.css'
import {  Route, Routes  } from 'react-router-dom'
import PostForm from './pages/postForm'
import SignUpPage from './pages/SignUp'
import LogInPage from './pages/Login'
import PostsPage from './pages/PostsPage'
import ProfilePage from './pages/ProfilePage'
import NavBar from './components/NavBar'

function App() {

  return (
    <div>
      <NavBar />
      <Routes>
      <Route index element={<PostsPage />} />
        <Route path="user/profile" element={<ProfilePage />} />
        <Route path="auth/signup" element={<SignUpPage />} />
        <Route path="auth/login" element={<LogInPage />} />
        <Route path="postform" element={<PostForm />} />
      </Routes>
      </div>
  
  )
} 

export default App  
