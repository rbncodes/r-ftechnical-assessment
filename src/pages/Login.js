import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Box, Button, Typography, TextField, Alert } from '@mui/material';

const Login = () => {
    const navigate = useNavigate(); 

    const dispatch = useDispatch();
    const [inputs, setInputs] =useState({
        email:"",
        password:"",
    });

    const [errorMessage, setErrorMessage] = useState('');

      const handleChange = (e) => {
         setInputs((prevState) => ({
            ...prevState,
            [e.target.name] : e.target.value
         }));
      };

      const handleLogin = (e) => {
        e.preventDefault();
        if (!inputs.email.match(/^\S+@\S+\.\S+$/)) {
            setErrorMessage('Invalid email address');
        } else if (
            !inputs.password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
            )
        )  {
            setErrorMessage(
                'Invalid password: Minimum 8 characters, at least 1 capital letter, 1 number and 1 special character'
            );
        } else {
            setErrorMessage('');
            //show spinner
            const spinnerTimeout = setTimeout(() => {
                dispatch({ type: 'SET_USER', payload: { email: inputs.email, password: inputs.password } });
              //redirect to home page
              navigate('/home');
            }, 2000);
           // clear spinnerTimeout on unmount
           return () => clearTimeout(spinnerTimeout);
        }
          
    };


    return (
        <div>
            <form onSubmit={handleLogin}>
                <Box 
                  display='flex'
                  flexDirection={"column"}
                  maxWidth={400} 
                  alignItems="center" 
                  justifyContent={"center"}
                  margin="auto" 
                  marginTop={5}
                  padding={5}
                  borderRadius={5}
                  boxShadow={'5px 5px 10px #ccc'}

                  >
                    <Typography>Login</Typography>
                     <TextField 
                       onChange={handleChange}
                       name="email"
                       value={inputs.email}
                       margin="normal" 
                       type={'email'} 
                       variant="outlined"
                       placeholder="Email" />

                     <TextField
                       onChange={handleChange}
                       name="password"
                       value={inputs.password}
                       margin="normal" 
                       type={'password'} 
                       variant="outlined" 
                       placeholder="Password" />

                     {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
                     <Button
                       type="submit"
                       variant="contained" 
                       color="warning"
                       >
                        Login
                     </Button> 

                </Box>
            </form>
        </div>

    );
};

export default Login;