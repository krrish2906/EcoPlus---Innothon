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
    <Route path="/" element={<div>Kaisan BA</div>} />
    <Route path="/postform" element={<PostForm />} />
    <Route path="/signup" element={<SignUpPage />} />
    <Route path="/Home" element={<Home/>}/>
</Routes>
  )
}

export default App
