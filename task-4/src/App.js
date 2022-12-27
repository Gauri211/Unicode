import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home.js';
import About from './components/About.js';
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
import { PostsList } from './features/posts/PostsList'
import { AddPostForm } from './features/posts/AddPostForm'
import { SinglePostPage } from './features/posts/SinglePostPage'
import { EditPostForm } from './features/posts/EditPostForm'
// const LazyAbout = React.lazy(() => import ('./components/About'))

const App = () => {
  return (
    <AuthProvider>
    <Navbar />
        <Routes>
              <Route path = '/' element = {<RequireAuth>
                    <Home />
                  </RequireAuth>} />
              {/* <Route exact path="/posts/:postId" component={SinglePostPage} />
              <Route exact path="/editPost/:postId" component={EditPostForm} /> */}
              <Route path = '/home' element = {<RequireAuth><Home /></RequireAuth>} />
              <Route path = '/about' element = {<About/>} />
              <Route path = '/users' element = {<Users />} >
                  <Route path = ':userId' element = {<UserDetails />} />
              </Route>
              <Route path = '/login' element = {<LogIn />} />
              <Route path = '/signup' element = {<SignUp />} />                  
              <Route path = '/write' element = {<RequireAuth><Write /></RequireAuth>} />                  
              <Route path = '/profile' element = {<RequireAuth><Profile /></RequireAuth>} />                  
              <Route path = '*' element = {<NoMatch />} />                  
        </Routes>
    </AuthProvider>
  )
}


export default App;


        