import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home.js';
import Myblogs from './components/Myblogs.js';
import SingleBlog from './components/SingleBlog.js';
import ViewBlog from './components/ViewBlog';
import LogIn from './components/Login.js';
import SignUp from './components/Signup.js';
import Profile from './components/Profile.js';
import Navbar from './components/Navbar.js';
import NoMatch from './components/NoMatch.js';
import Users from './components/Users.js';
import { AuthProvider } from './components/auth.js';
import Write from './components/Write.js';
import UserDetails from './components/UserDetails.js';
import { RequireAuth } from './components/RequireAuth.js';
import LandingPage from './components/LandingPage.js';
// const LazyAbout = React.lazy(() => import ('./components/About'))

const App = () => {
  return (
    <AuthProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='write' element={<Write/>} />
        </Routes>
    </AuthProvider>
  )
}


export default App;


        