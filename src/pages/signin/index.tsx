import { TextField, Grid, Container, Box, Typography, Link as MuiLink, Button } from "@material-ui/core";
import React from 'react'
import Link from 'next/link'

const SignIn = () => {
    return (
        <Container>
            <Box
                textAlign="center"
                my={8}
            >
                <img src="/images/Logo.svg" alt="logo" />
            </Box>
            <Box component="form"
                mt={8}
            >
                <TextField margin="normal" fullWidth id="outlined-basic" label="Username" variant="outlined" />
                <TextField margin="normal" fullWidth id="outlined-basic" label="Password" variant="outlined" />
            </Box>

            <Box textAlign="center">
                <Typography> Don't have an account? </Typography>
                <Link href="/signup" passHref>
                    <MuiLink underline="none" color="textPrimary">
                        Sign Up
                </MuiLink>
                </Link>
            </Box>

            <Box mt={5} display="flex" justifyContent="center">
                <Box width="70%">
                    <Button type="submit" variant="contained" color="primary" fullWidth >Sign In</Button>
                </Box>
            </Box>
        </Container>
    )
}

export default SignIn