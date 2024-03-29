import {useState, useContext} from "react";
import {useHistory} from "react-router-dom";
import {UserContext} from "../../context/user";
import {MessageContext} from "../../context/message";
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const Signup = () => {
    const {signup} = useContext(UserContext);
    const {setMessage} = useContext(MessageContext);
    
    const [userObj, setUserObj] = useState({
        first_name:"",
        last_name:"",
        email: "",
        password: "",
        passwordConfirmation: ""
    });

    const history = useHistory()

    const handleChange = ({target: {name, value}}) => {
      setUserObj({
          ...userObj,
          [name]: value
      })
  }

    const handleSubmit = (e) => {
        e.preventDefault()
        if ([userObj.first_name, userObj.last_name, userObj.email, userObj.password, userObj.passwordConfirmation].some(val => val.trim() === "")) {
            setMessage({message: userObj.error, color: "red"})
        }
        const success = signup({...userObj, password_confirmation: userObj.passwordConfirmation})
        if (success) {
          console.log(userObj)
          history.push("/profile")
        }
        else {
          setMessage({message: userObj.message, color: "red"})
        }
        
    }
    return (
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign up
              </Typography>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="first_name"
                      label="First Name"
                      name="first_name"
                      autoComplete="first name"
                      onChange={handleChange}
                      value={userObj.first_name}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="last_name"
                      label="Last Name"
                      name="last_name"
                      autoComplete="last name"
                      onChange={handleChange}
                      value={userObj.last_name}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      onChange={handleChange}
                      value={userObj.email}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password: Must be 6 - 24 characters long"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                      onChange={handleChange}
                      value={userObj.password}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="passwordConfirmation"
                      label="Password Confirmation"
                      type="password"
                      id="password-confirmation"
                      autoComplete="new-password"
                      onChange={handleChange}
                      value={userObj.passwordConfirmation}
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    {/* <Link href="/login" variant="body2">
                      Already have an account? Sign in
                    </Link> */}
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
    );
}

export default Signup