import * as React from 'react';
import { useState } from 'react';
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
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const SignUp = () => {


    const [user, setUser] = useState('');
    const [userErr, setUserErr] = useState(false);
    
    const [email, setEmail] = useState('');
    const [emailErr, setEmailErr] = useState(false);

    const [password, setPassword] = useState('');
    const [pwdError, setPwdError] = useState(false);

    const [conpwd, setConpwd] = useState('');
    const [conpwdErr, setConpwdErr] = useState(false);

    const [phone, setPhone] = useState('');
    const [phoneErr, setPhoneErr] = useState(false);
    

    // const [validMsg, setValidMsg] = useState(false);

    const [open, setOpen] = useState(false);

    const validate = async (e) => {

      e.preventDefault();

      const validUser = /^[a-zA-Z0-9_-]{5,16}$/;
      (!validUser.test(user))? setUserErr(true) : setUserErr(false)

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
        
        // if(!emailErr && !pwdError && !phoneErr) {
        //   setOpen(true);
        // }
        // else {
        //   setOpen(false);
        // }

        // localStorage.setItem("details", JSON.stringify({user, email, password}));
    };



    // let item = {email, phone, password}
      // console.warn(item);

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
              <AccountCircleIcon sx={{ fontSize: 40 }} /> Sign Up
          </Typography>
          <br></br>
          <div>
            <TextField id="outlined-basic" label="User Name" variant="outlined" value={user} 
            onChange={(e) => setUser(e.target.value)}
            error={userErr}
            helperText= {
              userErr? "Invalid Username" : ''
            }/>
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
          <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
    <Typography>Date of Birth:</Typography>
    <TextField type="date" id="outlined-basic" />
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
