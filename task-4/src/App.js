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
// const LazyAbout = React.lazy(() => import ('./components/About'))

const App = () => {
  return (
    <AuthProvider>
    <Navbar />
        <Routes>
              <Route path = '/' element = {<Home />} />
              <Route path = '/myblogs' element = {<Myblogs/>} />
              <Route path = '/posts/:id' element = {<SingleBlog/>} /> 
              <Route path = '/blogs/:title' element = {<ViewBlog/>} /> 
              <Route path = '/users' element = {<Users />} >
                  <Route path = ':userId' element = {<UserDetails />} />
              </Route>
              <Route path = '/login' element = {<LogIn />} />
              <Route path = '/signup' element = {<SignUp />} />                  
              <Route path = '/write' element = {<Write />} />                  
              <Route path = '/profile' element = {<Profile />} />                  
              <Route path = '*' element = {<NoMatch />} />                  
        </Routes>
    </AuthProvider>
  )
}


export default App;


        