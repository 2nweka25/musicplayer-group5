import {
  InputBase,
  Container,
  InputAdornment,
  Typography,
  Link as MuiLink,
  styled,
} from "@material-ui/core";
import Link from "next/link";

import { Search } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import Navbar from "components/navbar";
import Song from "components/song";
// import useStyles, { Searchbar } from "./styles";
import Playlists from "lib/services/playlists";
import { InferGetStaticPropsType } from "next";

export const getStaticProps = async () => {
  const playlists: Playlists = await Playlists.getAll();

  return { props: { playlists } };
};

const Index = ({
  playlists,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <main>
      <Navbar />
      <Container>
        <Searchbar
          placeholder="Search a song"
          fullWidth
          endAdornment={
            <InputAdornment position="end">
              <Search />
            </InputAdornment>
          }
        />

        {playlists.map(({ name, songs }) => (
          <Playlist key={name}>
            <Metadata>
              <Typography variant="h5">{name}</Typography>

              <Link href="/all" passHref>
                <MuiLink underline="none" color="textSecondary">
                  Show All
                </MuiLink>
              </Link>
            </Metadata>

            <Songs>
              {songs.map((song) => (
                <Song key={song.id} {...song} />
              ))}
            </Songs>
          </Playlist>
        ))}
      </Container>
    </main>
  );
};

const Searchbar = styled(InputBase)(({ theme }) => ({
  padding: "4px 16px",
  background: "#F0F0F0",
  color: "#949191",
  borderRadius: "20px",
  marginBottom: theme.spacing(2),
}));

const Playlist = styled("section")(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

const Metadata = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: theme.spacing(3),
}));

const Songs = styled("div")({
  display: "flex",
});

export default Index;
