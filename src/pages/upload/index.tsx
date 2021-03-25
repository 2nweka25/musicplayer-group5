import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import Artwork from "../../components/artwork";
import Navbar from "../../components/navbar";

interface Props {}

const Upload = (props: Props) => {
  return (
    <div>
      <Navbar />
      <Container>
        <Typography variant="h5">Upload Music</Typography>

        <Box textAlign="center" mt={2}>
          <Artwork src="/images/artwork/1.jpg" />
        </Box>

        <form>
          <TextField
            variant="outlined"
            label="Song Name"
            color="primary"
            fullWidth
            margin="normal"
          />

          <TextField
            variant="outlined"
            label="Song Description"
            multiline
            rows={4}
            color="primary"
            fullWidth
            margin="normal"
          />

          <TextField
            variant="outlined"
            label="Upload Link"
            color="primary"
            fullWidth
            margin="normal"
          />

          <TextField
            variant="outlined"
            label="Hashtags"
            color="primary"
            fullWidth
            margin="normal"
          />

          <Button type="submit" variant="contained" color="primary" fullWidth>
            Upload
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default Upload;
