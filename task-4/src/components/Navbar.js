import { Typography } from '@mui/material';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from './auth.js';
// import MyBlogs from './MyBlogs.js';


const Navbar = ({blogs}) => {
  
  // const state = useSelector((state) => state.postsSlice)
    const navLinkStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none' : 'none',
        }
    }

    const auth = useAuth()

    const navigate = useNavigate()


    const handleLogout = () => {
      auth.logout()
      navigate('/')
  }

    const getData = useSelector((state) => state.postsRed.posts);
    return (
        <nav>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            BLOGGERS SIDE
          </Typography>
          <NavLink to='/' variant="h6" component="div" sx={{ flexGrow: 1 }} style={navLinkStyles}>
            Home
          </NavLink>
          <NavLink to='/myblogs' variant="h6" component="div" sx={{ flexGrow: 1 }} style={navLinkStyles}>
            MyBlogs({getData.length})
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
        !auth.user ? 
        (<NavLink to='/login' variant="h6" component="div" sx={{ flexGrow: 1 }} style={navLinkStyles}>
        LogIn
      </NavLink>) : (<NavLink onClick={handleLogout} variant="h6" component="div" sx={{ flexGrow: 1 }} style={navLinkStyles}>
        Logout
      </NavLink>)
      }

        </nav>
    )
}

export default Navbar;

// import * as React from 'react';
// import PropTypes from 'prop-types';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
// import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import MenuIcon from '@mui/icons-material/Menu';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';

// const drawerWidth = 240;
// const navItems = ['Home', 'About', 'Contact'];

// function Navbar(props) {
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen((prevState) => !prevState);
//   };

//   const drawer = (
//     <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
//       <Typography variant="h6" sx={{ my: 2 }}>
//         MUI
//       </Typography>
//       <Divider />
//       <List>
//         {navItems.map((item) => (
//           <ListItem key={item} disablePadding>
//             <ListItemButton sx={{ textAlign: 'center' }}>
//               <ListItemText primary={item} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   const container = window !== undefined ? () => window().document.body : undefined;

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar component="nav">
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: 'none' } }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography
//             variant="h6"
//             component="div"
//             sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
//           >
//             MUI
//           </Typography>
//           <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
//             {navItems.map((item) => (
//               <Button key={item} sx={{ color: '#fff' }}>
//                 {item}
//               </Button>
//             ))}
//           </Box>
//         </Toolbar>
//       </AppBar>
//       <Box component="nav">
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//           sx={{
//             display: { xs: 'block', sm: 'none' },
//             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </Box>
//       <Box component="main" sx={{ p: 3 }}>
//         <Toolbar />
//       </Box>
//     </Box>
//   );
// }

// Navbar.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

// export default Navbar;