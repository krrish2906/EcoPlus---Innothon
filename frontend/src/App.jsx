import React from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import PostForm from './pages/postForm'
import SignUpPage from './pages/SignUp'
import LogInPage from './pages/Login'
import PostsPage from './pages/PostsPage'
import ProfilePage from './pages/ProfilePage'
import HomePage from './pages/HomePage'
function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/user/profile" element={<ProfilePage />} />
      <Route path="/community" element={<CommunityPage />} />
      <Route path="/auth/signup" element={<SignUpPage />} />
      <Route path="/auth/login" element={<LogInPage />} />
      <Route path="/postform" element={<PostForm />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/posts" element={<PostsPage />} />
    </Routes>
  )
}

export default App  
