import * as React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useAuth } from './auth.js';
// import MyBlogs from './MyBlogs.js';


const Navbar = () => {
  
  // const state = useSelector((state) => state.postsSlice)
    const navLinkStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none' : 'underline',
        }
    }

    const auth = useAuth()

    const getData = useSelector((state) => state.postsRed.posts);
    console.log(getData);

    return (
        <nav>

          {/* <NavLink to='/home' variant="h6" component="div" sx={{ flexGrow: 1 }} style={navLinkStyles}>
            Home
          </NavLink> */}
          <NavLink to='/' variant="h6" component="div" sx={{ flexGrow: 1 }} style={navLinkStyles}>
            Blogs({getData.length})
          </NavLink>
          {/* <NavLink to='/about' variant="h6" component="div" sx={{ flexGrow: 1 }} style={navLinkStyles}>
            About
          </NavLink> */}
          <NavLink to='/write' variant="h6" component="div" sx={{ flexGrow: 1 }} style={navLinkStyles}>
            Write
          </NavLink>    
          <NavLink to='/profile' variant="h6" component="div" sx={{ flexGrow: 1 }} style={navLinkStyles}>
            Profile
          </NavLink>  
        
      {
        !auth.user && 
        (<NavLink to='/login' variant="h6" component="div" sx={{ flexGrow: 1 }} style={navLinkStyles}>
        LogIn
      </NavLink>)
      }

        </nav>
    )
}

export default Navbar;