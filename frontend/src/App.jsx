import React from 'react'
import './App.css'
import {  Route, Routes  } from 'react-router-dom'
import PostForm from './pages/postForm'
import SignUpPage from './pages/SignUp'
import LogInPage from './pages/Login'
import PostsPage from './pages/home'
import ProfilePage from './pages/ProfilePage'
import NavBar from './components/NavBar'
import CommunityPage from './pages/CommunityPage'
import {useSelector} from 'react-redux'
import {Navigate} from 'react-router-dom'
import AllCommunity from './pages/AllCommunity'
<<<<<<< HEAD
import Events from './pages/Events'
import EventForm from './pages/EventForm'
=======
import Post from './pages/post'

>>>>>>> 146497d83ab6b023bf96b088c86b4b66bb3378e8
function App() {

  const isLogin = useSelector((state) => state.auth.isLogin);
  return (
    <div>
      {isLogin && <NavBar />}
      <Routes>
      <Route index element={isLogin ? <PostsPage /> : <Navigate to="/auth/login" />} />
      <Route path="user/profile" element={isLogin ? <ProfilePage /> : <Navigate to="/auth/login" />} />
      <Route path="community" element={isLogin ? <CommunityPage /> : <Navigate to="/auth/login" />} />
      <Route path="auth/signup" element={!isLogin ? <SignUpPage /> : <Navigate to="/" />} />
      <Route path="auth/login" element={!isLogin ? <LogInPage /> : <Navigate to="/" />} />
      <Route path="postform" element={isLogin ? <PostForm /> : <Navigate to="/auth/login" />} />
      <Route path="communities" element={isLogin ? <AllCommunity /> : <Navigate to="/auth/login" />} />
<<<<<<< HEAD
      <Route path="events" element={isLogin ? <Events /> : <Navigate to="/auth/login" />} />
      <Route path="eventform" element={isLogin ? <EventForm /> : <Navigate to="/auth/login" />} />
=======
      <Route path="post/:id" element={isLogin ? <Post /> : <Navigate to="/auth/login" />} />
>>>>>>> 146497d83ab6b023bf96b088c86b4b66bb3378e8
      </Routes>
      </div>
    )
}

export default App
