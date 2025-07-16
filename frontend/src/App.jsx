import React from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import PostForm from './pages/postForm'
import SignUpPage from './pages/SignUp'
function App() {

  return (
<Routes>
    <Route path="/" element={<div>Kaisan BA</div>} />
    <Route path="/postform" element={<PostForm />} />
    <Route path="/signup" element={<SignUpPage />} />
</Routes>
  )
}

export default App
