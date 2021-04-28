import {
  TextField,
  Container,
  Box,
  Typography,
  Link as MuiLink,
  Button,
} from "@material-ui/core";
import React, { useState } from "react";
import Link from "next/link";
import Auth from "lib/services/auth";
import { useRouter } from "next/router";

const SignIn = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e: any) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const user = await Auth.signIn(formData);
      if (user) {
        router.push("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Box textAlign="center" my={8}>
        <img src="/images/Logo.svg" alt="logo" />
      </Box>
      <Box component="form" mt={8} onSubmit={handleSubmit}>
        <TextField
          margin="normal"
          fullWidth
          id="outlined-basic"
          label="Email"
          variant="outlined"
          name="email"
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          fullWidth
          id="outlined-basic"
          label="Password"
          variant="outlined"
          name="password"
          onChange={handleChange}
        />

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
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Sign In
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default SignIn;
