import { TextField, Container, Box, Typography, Link as MuiLink, Button, Avatar, InputAdornment } from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit'
import useStyles from "./styles.module"
import React from 'react'
import Link from 'next/link'


const SignIn = () => {
    const classes = useStyles()
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
                <TextField margin="normal" fullWidth id="outlined-basic" label="Fullname" variant="outlined" InputProps={{
                    endAdornment: <InputAdornment position="end">
                        <EditIcon />
                    </InputAdornment>
                }} />
                <TextField margin="normal" fullWidth id="outlined-basic" label="Username" variant="outlined" InputProps={{
                    endAdornment: <InputAdornment position="end">
                        <EditIcon />
                    </InputAdornment>
                }} />
                <TextField margin="normal" fullWidth id="outlined-basic" label="Email" variant="outlined" InputProps={{
                    endAdornment: <InputAdornment position="end">
                        <EditIcon />
                    </InputAdornment>
                }} />
            </Box>

            <Box mt={2} display="flex" justifyContent="center">
                <Button type="submit" variant="outlined" color="primary" fullWidth >Reset password link</Button>
            </Box>

            <Box mt={6} width="70%" margin="auto" >
                <Link href="/signup" passHref>
                    <Button type="submit" variant="contained" color="primary" fullWidth >Logout</Button>
                </Link>
            </Box>


        </Container>
    )
}

export default SignIn