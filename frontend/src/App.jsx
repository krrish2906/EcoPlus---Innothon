import React from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import PostForm from './pages/postForm'
import SignUpPage from './pages/SignUp'
import LogInPage from './pages/Login'
import Home from './pages/Home'

function App() {

  return (
    <Routes>
      <Route path="/" element={<SignUpPage />} />
      <Route path="/Home" element={<Home/>}/>
      <Route path="/postform" element={<PostForm/>}/>
    </Routes>
  )
}

export default App
