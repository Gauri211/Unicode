import * as React from 'react';
import '../App.css';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import { useAuth } from './auth.js';

const LogIn = () => {
    const [user, setUser] = useState(''); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailErr, setEmailErr] = useState(false);
    const [pwdError, setPwdError] = useState(false);
    const auth = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const redirectPath = location.state?.path || '/'

    const Regex = () => {

      const validEmail = /[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]/;
      (!validEmail.test(email))? setEmailErr(true) : setEmailErr(false)

      const validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/; 
      (!validPassword.test(password))? setPwdError(true) : setPwdError(false)

        if((document.getElementById('email-input').value === '') || (document.getElementById('pwd-input').value === '')) {
          alert('Please fill the fields');
          
        } 
          auth.login(user, email, password)
          navigate(redirectPath, { replace: true })
        
    };
    
  return (
    
    <Container maxWidth="sm">
        <Box 
          sx={{
            '& > :not(style)': {
              m: 1, 
            },
        }}>
        <Paper elevation={3} id='paper'>
        
        
          <CardContent>
          
          <Typography variant="h4" component="div">
              Login
          </Typography>
          <br></br>
          <div>
            <TextField id="user-input" label="Username" variant="outlined" value={user} 
              onChange={e => setUser(e.target.value)} />
          </div>
          <br></br>
          <div>
            <TextField id="email-input" label="Email" variant="outlined" value={email} 
            onChange={(e) => setEmail(e.target.value)}
            error={emailErr}
            helperText= {
              emailErr? "Incorrect Email" : ''
            }/>
          </div>
          <br></br>
          <div>
            <TextField id="pwd-input" type = 'password' label="Password" variant="outlined" value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={pwdError}
            helperText= {
              pwdError? "Incorrect Password" : ''
            } />
          </div>          
          <a href='#'>Forgot password?</a>

          </CardContent>
          <form>
            <FormControlLabel control={<Checkbox/>} label="Remember Me" />
          </form>
          <CardActions>
            <Button variant="contained" onClick={Regex}>LogIn</Button>
          </CardActions>
          <div>
            <Typography sx={{ fontSize: 14 }}  gutterBottom>
              Don't have an account?
              <Link to={`/signup`}>Create Account</Link>
            </Typography>           
          </div>
          
          

          </Paper>
        </Box>

        </Container>
      );
  
}

export default LogIn;
