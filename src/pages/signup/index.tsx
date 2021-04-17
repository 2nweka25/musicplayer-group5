import { TextField, Grid, Container, Box, Typography, Link as MuiLink, Button } from "@material-ui/core"
import React, { useState, FC } from 'react'
import { useRouter } from "next/router"
import Link from 'next/link'
import axios from "axios"

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

const SignUp: FC<FormData> = ({ }) => {
    const router = useRouter()

    const [formData, setFormData] = useState({ username: "", firstname: "", lastname: "", email: "", password: "" })

    const handleChange = (e) => {
        const { value, name } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/auth/signup', formData)
            if (response.status === 201) router.push("/");
        } catch (error) {
            console.log(error.message);
        }
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
                onSubmit={handleSubmit}
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
                        <TextField fullWidth id="outlined-basic" label="Username" variant="outlined" name="username" onChange={handleChange} />
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