import { TextField, Grid, Container, Box, Typography, Link as MuiLink, Button } from "@material-ui/core";
import React, { EventHandler, FormEventHandler, useState } from 'react'
import Link from 'next/link'
import { auth } from "../../lib/firebase";
import axios from "axios";



const SignUp = () => {

    const [formData, setFormData] = useState({ firstname: "", lastname: "", email: "", password: "" })

    const handleChange = (e) => {
        const { value, name } = e;
        setFormData({ ...formData, [name]: value })
        console.log(formData)
    }

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();

        const user = await auth.createUserWithEmailAndPassword(
            formData.email,
            formData.password
        )


        const { data } = await axios.post("/auth", {
            email: formData.email,
            password: formData.password
        })

    }



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
                        <TextField id="outlined-basic" label="Firstname" variant="outlined" name="firstname" onChange={handleChange} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="outlined-basic" label="Lastname" variant="outlined" name="lastname" onChange={handleChange} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth id="outlined-basic" label="Username" variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth id="outlined-basic" label="Email" variant="outlined" name="email" onChange={handleChange} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth id="outlined-basic" label="Password" variant="outlined" name="password" onChange={handleChange} />
                    </Grid>
                </Grid>


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

            </Box>



        </Container>
    )
}

export default SignUp