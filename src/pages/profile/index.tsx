import { TextField, Container, Box, Typography, Link as MuiLink, Button, Avatar, InputAdornment } from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit'
import useStyles from "./styles.module"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { auth, firestore } from "../../lib/firebase"
import { useRouter } from "next/router"
//import axios from "axios"


const Profile = () => {
    const classes = useStyles()
    const router = useRouter();

    const [localUser, setUser] = useState({ first_name: "", last_name: "", username: "", email: "" })
    const [formData, setFormData] = useState({ fullname: "", username: "", email: "" })

    // Get user Data
    useEffect(() => {
        auth.onAuthStateChanged(async function (user) {
            if (user) {
                console.log(user)
                const data = firestore.collection('users').doc(user.uid)
                const doc = await data.get();
                setUser({ ...localUser, ...doc.data() });
                return
            } else {
                console.log("Couldn't get User")
            }
        });
    }, [])

    // Watch input
    const handleInput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    // Save new details or save the previous
    // Did not wrote line by line since it would make the code much longer and complicated
    // If there is no data provided in an input line, it will resave user data along with the new data provided
    const handleSubmit = (e) => {
        e.preventDefault();
        // Update User
        auth.onAuthStateChanged(async function (user) {
            if (user) {
                firestore.collection('users').doc(user.uid).set({
                    email: formData.email !== "" ? formData.email : user.email,
                    first_name: formData.fullname !== "" ? formData.fullname.split(" ")[0] : localUser.first_name,
                    last_name: formData.fullname !== "" ? formData.fullname.split(" ")[1] : localUser.last_name,
                    username: formData.username !== "" ? formData.username : localUser.username
                });
            } else {
                console.log("Couldn't get User")
            }
            // Reload User data (instant feedback)
            auth.onAuthStateChanged(async function (user) {
                if (user) {
                    console.log(user)
                    const data = firestore.collection('users').doc(user.uid)
                    const doc = await data.get();
                    setUser({ ...localUser, ...doc.data() });
                    return
                } else {
                    console.log("Couldn't get User")
                }
            });
        });
    }
    // Sign Out and redirect to signin page
    const signout = (e) => {
        e.preventDefault();
        auth.signOut().then(() => {
            console.log("signed out")
            router.push("/signin")
        }).catch((error) => {
            console.log(`Error: ${error}`)
        });
    }

    /*
    // This meant to communicate with the api
    const getUserData = async () => {
        try {
            const response = await axios.post('/api/auth/profile')
            if (response.status === 200) {
                console.log(response.user);
                setUser(response.user);
            }
        } catch (error) {
            console.log(error.message);
        }
    }
*/


    return (
        <Container>
            <Box mt={4}>
                <Typography variant="h5">My Profile</Typography>
            </Box>
            <Avatar
                className={classes.avatar}
                src="/images/avatar.svg" alt="avatar"
            />
            <Box textAlign="center" mt={2}>
                <MuiLink underline="always" color="textPrimary" className={classes.changeAvatar}
                >
                    Change profile picture
                </MuiLink>
            </Box>
            <Box component="form"
                mt={4}
            >
                <TextField margin="normal" fullWidth id="outlined-basic" name="fullname" label={localUser && `${localUser.first_name} ${localUser.last_name}`} variant="outlined" InputProps={{
                    endAdornment: <InputAdornment position="end" onClick={handleSubmit}>
                        <EditIcon />
                    </InputAdornment>
                }} onChange={handleInput} />
                <TextField margin="normal" fullWidth id="outlined-basic" name="username" label={localUser && localUser.username} variant="outlined" InputProps={{
                    endAdornment: <InputAdornment position="end" onClick={handleSubmit}>
                        <EditIcon />
                    </InputAdornment>
                }} onChange={handleInput} />
                <TextField margin="normal" fullWidth id="outlined-basic" name="email" label={localUser && localUser.email} variant="outlined" InputProps={{
                    endAdornment: <InputAdornment position="end" onClick={handleSubmit}>
                        <EditIcon />
                    </InputAdornment>
                }} onChange={handleInput} />
            </Box>
            <Box mt={2} display="flex" justifyContent="center">
                <Button type="submit" variant="outlined" color="primary" fullWidth >Reset password link</Button>
            </Box>
            <Box mt={6} width="70%" margin="auto" >
                <Link href="/signup" passHref>
                    <Button type="submit" variant="contained" color="primary" fullWidth onClick={signout} >Logout</Button>
                </Link>
            </Box>
        </Container>
    )
}

export default Profile