import {
  Button,
  Container,
  InputAdornment,
  Typography,
  Link as MuiLink,
  Box,
} from "@material-ui/core";
import Link from "next/link";

import { Search } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Song from "../components/song";
// import useStyles, { Searchbar } from "./styles";
import Playlists from "../lib/services/playlists";

interface Song {
  id: string;
  artist: string;
  artworkURL: string;
  audioURL: string;
  comments: [];
  owner: string;
  title: string;
}

interface Playlist {
  name: string;
  songs: Song[];
}

const Index = () => {
  // const classes = useStyles();
  const [playlists, setPlaylsits] = useState<Playlist[] | null>(null);

  useEffect(() => {
    const discover = Playlists.getDiscover();
    const newReleases = Playlists.getNewReleases();

    Promise.all([discover, newReleases]).then((data) => setPlaylsits(data));
  }, []);

  return (
    <div style={{ height: "100vh" }}>
      <Navbar />
      <Container>
        {/* <Searchbar
          placeholder="Search a song"
          fullWidth
          endAdornment={
            <InputAdornment position="end">
              <Search />
            </InputAdornment>
          }
        /> */}

        {playlists?.map(({ name, songs }) => (
          <Box key={name} component="section" mb={8}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              mb={3}
            >
              <Typography variant="h5">{name}</Typography>
              {/* <Link href="/all" passHref>
                <MuiLink underline="none" color="textSecondary">
                  Show all
                </MuiLink>
              </Link> */}
            </Box>

            <Box display="flex">
              {songs.map((song) => (
                <Song key={song.id} {...song} />
              ))}
            </Box>
          </Box>
        ))}
      </Container>
    </div>
  );
};

export default Index;
