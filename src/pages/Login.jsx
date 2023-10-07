import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {useForm , Controller} from "react-hook-form";
// import {toast} from "react-hot-toast"
import { useEffect } from 'react';
import styled from 'styled-components';



function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Login() {
    
    const navigate = useNavigate()
    const {control , handleSubmit} = useForm({
      defaultValues:{
        email:"",
        password:"",
      }
    })
    useEffect(()=>{
      const auth = localStorage.getItem('token')
      if(auth){
       navigate("/admin-setup")
      } 
     }, [])
    const loginhandler = (obj)=>{
      console.log(obj);
      const {email, password} = obj || {}
      const objtosend = {
        email,
        password,
      }
      console.log(objtosend);
      axios.post('https://wandering-pink-fedora.cyclic.app/api/login', objtosend)
      .then((res)=>{
        console.log(res.data);
        // toast.success(res.data.message)
        navigate("/admin-setup")
        localStorage.setItem("user", JSON.stringify(res.data.data))
        localStorage.setItem("token" ,res.data.token)
      })
      .catch((err)=>{
        console.log(err);
        const errhand = err.response.data.message
        // toast.error(errhand)
      })
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
        {/* <img src={samplelogo} alt="" height={120} width={120}  /> */}
        <Typography color={"black"} marginTop={5} textAlign={{md:"center", lg:"start"}} variant="h2" sx={{ fontFamily: "Dancing Script, cursive" , fontWeight:"bold"}}>Devon Eriksen</Typography>
          <Typography component="h1"  variant="h5" marginTop={5}>
            Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit(loginhandler)} noValidate sx={{ mt: 1 }}>
            <Controller  name="email" control={control} 
               render={({ field: { onChange, value } }) => (
                <TextField onChange={onChange} value={value}  required
                fullWidth
                id="email"
                label="Email Address"
                margin="normal"
                autoComplete="email"
                autoFocus
                type="email"
                />
              )}
            />
            <Controller  name="password" control={control} 
               render={({ field: { onChange, value } }) => (
                <TextField onChange={onChange} value={value}  required
                fullWidth
                id="password"
                label="Password"
                margin="normal"
                autoComplete="current-password"
                autoFocus
                type="password"
                />
              )}
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 10 }}
            >
              Login
            </Button>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </ThemeProvider>
  );
}
