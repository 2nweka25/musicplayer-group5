import {
  Avatar,
  Box,
  Button,
  styled,
  Typography,
  Link as MuiLink,
} from "@material-ui/core";
import Carousel from "components/carousel";
import Songs from "lib/services/song";
import { useEffect, useState } from "react";

const uploadedSongs = [
  {
    artist: "Alan Walker",
    artworkURL:
      "https://firebasestorage.googleapis.com/v0/b/musicplayer-app.appspot.com/o/artwork%2Falan-walker-spectre.jpg?alt=media&token=687e15ed-941c-4d5c-9d25-6b41573eaa2a",
    audioURL:
      "https://firebasestorage.googleapis.com/v0/b/musicplayer-app.appspot.com/o/songs%2F3.Alan%20Walker%20-%20Spectre.mp3?alt=media&token=7c0a1a07-f75d-4f63-94e8-aec7f262fec4",
    comments: [],
    id: "7ZAPHfa7hUPjtRQkH0En",
    owner: "",
    title: "Spectre",
  },
  {
    artist: "Elektromania",
    artworkURL:
      "https://firebasestorage.googleapis.com/v0/b/musicplayer-app.appspot.com/o/artwork%2Felektromania-sky-high.jpeg?alt=media&token=9772317d-474b-4dac-b293-e6e56099638c",
    audioURL:
      "https://firebasestorage.googleapis.com/v0/b/musicplayer-app.appspot.com/o/songs%2F8.Elektronomia%20-%20Sky%20High.mp3?alt=media&token=524af855-9242-42d5-a4cb-cb05e4232cb5",
    comments: [],
    id: "AeV7v7Buf81mHsSmgoXX",
    owner: "",
    title: "Sky High",
  },
  {
    title: "On & On",
    artworkURL:
      "https://firebasestorage.googleapis.com/v0/b/musicplayer-app.appspot.com/o/artwork%2Fcartoon-on-and-on.jpg?alt=media&token=70b74e99-d026-48b1-af76-9e8cb08f1396",
    audioURL:
      "https://firebasestorage.googleapis.com/v0/b/musicplayer-app.appspot.com/o/songs%2F2.Cartoon%20-%20On%20%26%20On%20(feat.%20Daniel%20Levi).mp3?alt=media&token=70a6f3de-9ff3-481f-8a37-0435387c19d5",
    artist: "Cartoon",
    id: "W4X9I6OVCGC5FiH4e8Be",
  },
];

const UserProfile = () => {
  return (
    <>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h5">Issac Moss</Typography>
        <Button color="primary" variant="contained" style={{ width: "111px" }}>
          Follow
        </Button>
      </Box>

      <Box textAlign="center">
        <StyledAvatar src="/images/avatar.svg" />
        <MuiLink
          underline="none"
          color="textPrimary"
          style={{ color: "yellow" }}
        >
          120 Followers
        </MuiLink>
        <Biography>Aspiring musician at Solent</Biography>
      </Box>

      <Box>
        <Carousel text="Uploads" items={uploadedSongs} />
        <Carousel text="Rated Songs" items={uploadedSongs} />
      </Box>
    </>
  );
};

const StyledAvatar = styled(Avatar)({
  width: "150px",
  height: "150px",
  margin: "auto",
  marginTop: "16px",
});

const Biography = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(2),
}));

export default UserProfile;
