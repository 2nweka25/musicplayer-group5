import { TextField, Grid, Container, Box, Typography, Link as MuiLink, Button } from "@material-ui/core";
import React from 'react'
import Link from 'next/link'



const SignUp = () => {
    return (
        <Container>
            <Box
                textAlign="center"
                my={3}
            >
                <img src="/images/Logo.svg" alt="logo" />
            </Box>
            <Box component="form"
                my={3}
            >
                <Grid container
                    direction="row"
                    justify="center"
                    alignItems="flex-end"
                    spacing={2}
                >
                    <Grid item xs={6}>
                        <TextField id="outlined-basic" label="Firstname" variant="outlined" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="outlined-basic" label="Lastname" variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth id="outlined-basic" label="Username" variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth id="outlined-basic" label="Email" variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth id="outlined-basic" label="Password" variant="outlined" />
                    </Grid>
                </Grid>
            </Box>


            <Box textAlign="center">
                <Typography> Already have an account? </Typography>
                <Link href="/signin" passHref>
                    <MuiLink underline="none" color="textPrimary">
                        Sign In
                </MuiLink>
                </Link>
            </Box>

            <Box mt={5} display="flex" justifyContent="center">
                <Box width="70%">
                    <Button type="submit" variant="contained" color="primary" fullWidth >Sign Up</Button>
                </Box>
            </Box>

        </Container>
    )
}

export default SignUp