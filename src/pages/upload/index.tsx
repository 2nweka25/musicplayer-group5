import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState, useContext } from "react";
import Artwork from "../../components/artwork";
import Navbar from "../../components/navbar";
import uploadService from "../../lib/services/upload";
import AuthContext from "../../lib/authContext"

interface Props { }

const Upload = (props: Props) => {
  const user = useContext(AuthContext)

  const [data, setData] = useState({ title: "", description: "", songUrl: "", imgUrl: "/images/artwork/1.jpg", tags: "" })

  const handleInput = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (user) {
      const upload = await uploadService.uploadHandle({ ...data, ...user })
      console.log(upload)
    }
  }

  return (
    <div>
      <Navbar />
      <Container>
        <Typography variant="h5">Upload Music</Typography>

        <Box textAlign="center" mt={2}>
          <Artwork src="/images/artwork/1.jpg" />
        </Box>

        <form onSubmit={handleSubmit}>
          <TextField
            name="title"
            variant="outlined"
            label="Song Name"
            color="primary"
            fullWidth
            margin="normal"
            onChange={handleInput}
          />

          <TextField
            name="description"
            variant="outlined"
            label="Song Description"
            multiline
            rows={4}
            color="primary"
            fullWidth
            margin="normal"
            onChange={handleInput}
          />

          <TextField
            name="songUrl"
            variant="outlined"
            label="Song Url"
            color="primary"
            fullWidth
            margin="normal"
            onChange={handleInput}
          />

          <TextField
            name="tags"
            variant="outlined"
            label="Hashtags"
            color="primary"
            fullWidth
            margin="normal"
            onChange={handleInput}
          />

          <Box mt={2} width="70%" margin="auto">
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Upload
            </Button>
          </Box>
        </form>
      </Container>
    </div>
  );
};

export default Upload;
