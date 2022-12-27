import * as React from 'react';
import { useState } from 'react';
// import {  validPassword } from './Regex.js';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {TextField, Container, Box, Paper, Alert, AlertTitle} from '@mui/material';
import {Link } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

// let input = document.querySelector('#outlined-basic')
// let pwdInput = document.getElementById('pwd-input');
// let userInput = document.getElementById('user-input');

const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [conpwd, setConpwd] = useState('');

    const [emailErr, setEmailErr] = useState(false);
    const [pwdError, setPwdError] = useState(false);
    const [phoneErr, setPhoneErr] = useState(false);
    const [conpwdErr, setConpwdErr] = useState(false);

    // const [validMsg, setValidMsg] = useState(false);
    const [open, setOpen] = useState(false);


    const validate = () => {
      const validEmail = /[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]/;
      (!validEmail.test(email))? setEmailErr(true) : setEmailErr(false)

      const validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
      (!validPassword.test(password))? setPwdError(true) : setPwdError(false)

      const validPhone = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
      (!validPhone.test(phone))? setPhoneErr(true) : setPhoneErr(false)


      if(password !== conpwd) {
        setConpwdErr(true);
      }
      else {
        setConpwdErr(false);
      }

        // if (input.value === '') {
        //   alert('Alert');
        // }
        
        if(!emailErr & !pwdError & !phoneErr) {
          setOpen(true);
          localStorage.setItem('Email', JSON.stringify(email));
          localStorage.setItem('Password', JSON.stringify(password));

          console.log("Saved in local Storage");
        }
        else {
          setOpen(false);
        }
    };

    let item = {email, phone, password}
      console.warn(item);

    const handleClose = () => {
      setOpen(false);
    };

  return (
    
      <React.Fragment>
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
              Sign Up
          </Typography>
          <br></br>
          <div>
            <TextField id="outlined-basic" label="User Name" variant="outlined" />
          </div>
          <br></br>
          <div>
            <TextField id="outlined-basic" label="Email" variant="outlined" value={email} 
            onChange={(e) => setEmail(e.target.value)}
            error={emailErr}
            helperText= {
              emailErr? "Invalid Email" : ''
            }/>
          </div>
          <br></br>
          <div>
            <TextField id="outlined-basic" label="Phone Number" variant="outlined" value={phone}
            onChange={(e) => setPhone(e.target.value)}
            error={phoneErr}
            helperText= {
              phoneErr? "Invalid Phone Number" : ''
            }/>
          </div>
          <br></br>
          <div>
            <TextField id="outlined-basic" type='password' label="Password" variant="outlined" value={password} 
            onChange={(e) => setPassword(e.target.value)}
            error={pwdError}
            helperText= {
              pwdError? "Invalid Password" : ''
            }/>
          </div> 
            <br></br>
          <div>
            <TextField id="outlined-basic" type='password' label="Confirm Password" variant="outlined" value={conpwd} 
            onChange={(e) => setConpwd(e.target.value)}
            error={conpwdErr}
            helperText= {
              conpwdErr? "Invalid Password" : ''
            }/>
          </div>             
          </CardContent>
          <CardActions>
            <Button variant="contained" onClick={validate}>Create Account</Button>
          </CardActions>
          <div>
            <Typography sx={{ fontSize: 14 }} gutterBottom>
              Already have an account?
              <Link to={`/login`}>LogIn</Link>
            </Typography>
          </div>
          
              {
                open && 
            <Dialog
                  open={open}
                  onClose={handleClose}
                >
              
                    
                    <Alert severity="success">
                          <DialogContent>
                          <DialogContentText>
                            <AlertTitle>Success</AlertTitle>
                            <strong>Your account has been succesfully created</strong>
                            <DialogActions>
                          <Button onClick={handleClose}>OK</Button>
                        </DialogActions>
                        </DialogContentText>
                        </DialogContent>
                    </Alert>
                    
              
           </Dialog>
              }
          </Paper>
        </Box>

        </Container>
           
      </React.Fragment>
      )
  
}

export default SignUp;
