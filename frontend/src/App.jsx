import React,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import PostForm from './pages/postForm'
function App() {
  const [count, setCount] = useState(0)

  return (
<Routes>
    <Route path="/" element={<div>Kaisan BA</div>} />
    <Route path="/postForm" element={<PostForm />} />
</Routes>
  )
}

export default App
