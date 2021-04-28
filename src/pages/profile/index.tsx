import {
  TextField,
  Container,
  Box,
  Typography,
  Link as MuiLink,
  Button,
  Avatar,
  InputAdornment,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
// import useStyles from "./styles";
import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { firestore } from "lib/firebase";
import { useRouter } from "next/router";
import AuthContext from "lib/authContext";
import User from "lib/services/user";
import Auth from "lib/services/auth";
import Navbar from "components/navbar";
//import axios from "axios"

const Profile = () => {
  // const classes = useStyles();
  const router = useRouter();
  const user = useContext(AuthContext);

  const [localUser, setUser] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
  });
  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    email: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setUser(user);
    setLoading(false);
  }, [user]);

  const updateUser = async () => {
    // Push user data where provided, then save
    await firestore
      .collection("users")
      .doc(user.userId)
      .set({
        email: formData.email !== "" ? formData.email : user.email,
        first_name:
          formData.fullname !== ""
            ? formData.fullname.split(" ")[0]
            : localUser.first_name,
        last_name:
          formData.fullname !== ""
            ? formData.fullname.split(" ")[1]
            : localUser.last_name,
        username:
          formData.username !== "" ? formData.username : localUser.username,
      });

    // Get new user data
    const data = await User.getProfile(user.userId);
    setUser(data);
  };

  // Watch input
  const handleInput = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // If no data given, save
  const handleSubmit = (e: any) => {
    e.preventDefault();
    updateUser();
  };

  // Sign Out and redirect to signin page
  const signout = async (e: any) => {
    e.preventDefault();
    const response = await Auth.signOut();
    response ? router.push("/signin") : console.log("Something went wrong!");
  };

  if (loading) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <>
        <Box mt={4}>
          <Typography variant="h5">My Profile</Typography>
        </Box>

        <Avatar
          style={{
            width: "150px",
            height: "150px",
            margin: "auto",
            marginTop: "16px",
          }}
          src="/images/avatar.svg"
          alt="avatar"
        />
        <Box textAlign="center" mt={2}>
          <MuiLink
            underline="always"
            color="textPrimary"
            style={{ color: "yellow" }}
          >
            Change profile picture
          </MuiLink>
        </Box>
        <Box component="form" mt={4}>
          <TextField
            margin="normal"
            fullWidth
            id="outlined-basic"
            name="fullname"
            label={`${localUser?.first_name} ${localUser?.last_name}`}
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" onClick={handleSubmit}>
                  <EditIcon />
                </InputAdornment>
              ),
            }}
            onChange={handleInput}
          />
          <TextField
            margin="normal"
            fullWidth
            id="outlined-basic"
            name="username"
            label={localUser?.username}
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" onClick={handleSubmit}>
                  <EditIcon />
                </InputAdornment>
              ),
            }}
            onChange={handleInput}
          />
          <TextField
            margin="normal"
            fullWidth
            id="outlined-basic"
            name="email"
            label={localUser?.email}
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" onClick={handleSubmit}>
                  <EditIcon />
                </InputAdornment>
              ),
            }}
            onChange={handleInput}
          />
        </Box>
        <Box mt={2} display="flex" justifyContent="center">
          <Button type="submit" variant="outlined" color="primary" fullWidth>
            Reset password link
          </Button>
        </Box>
        <Box mt={6} width="70%" margin="auto">
          <Link href="/signup" passHref>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              onClick={signout}
            >
              Logout
            </Button>
          </Link>
        </Box>
      </>
    );
  }
};

export default Profile;
