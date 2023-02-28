import React, { Component } from 'react'
import { Box, TextField, Typography, Button } from '@mui/material';


class LoginForm extends Component {

    constructor() {
        super();
        this.state = {
            SignUp: false
        };
    }

    render() {
        return (
                <form>
                    <Box
                        display={'flex'}
                        flexDirection={'column'}
                        position={'relative'}
                        maxWidth={500}
                        alignItems="center"
                        margin="auto"
                        padding={10}
                        borderRadius={5}
                        boxShadow={"5px 5px 10px #ccc"}
                        bgcolor="white"
                    sx={{
                        ":hover": {
                            boxShadow: "10px 10px 20px #ccc"
                        }
                    }} >


                    <Typography variant='h2' padding={3} textAlign='center'>
                        {this.state.SignUp ? "Login" : "Sign Up"}
                    </Typography>


                    <TextField margin='normal' type={"text"} placeholder='Name' />
                    <TextField margin='normal' type={"email"} placeholder='Email' />
                    {this.state.SignUp && <TextField margin='normal' type={'password'} placeholder='Password' />}


                    <Button sx={{ marginTop: 3, borderRadius: 10 }} color='warning' variant='outlined' >
                        {this.state.SignUp ? "Login" : "Sign Up"}
                    </Button>

                    <Button onClick={() => this.setState({ SignUp: !(this.state.SignUp) })} sx={{ marginTop: 3, borderRadius: 10 }} >
                        {this.state.SignUp ? "New User? Sign Up" : "Back to Login"}
                    </Button>
                </Box>
            </form>
        );
    }
}

export default LoginForm;