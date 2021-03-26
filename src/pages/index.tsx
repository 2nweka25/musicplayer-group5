import {
  Button,
  Container,
  InputAdornment,
  Typography,
  Link as MuiLink,
} from "@material-ui/core";
import Link from "next/link";

import { Search } from "@material-ui/icons";
import React from "react";
import Navbar from "../components/navbar";
import Song from "../components/song";
import useStyles, { Searchbar } from "./styles";

const Index = () => {
  const classes = useStyles();

  return (
    <>
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

        <section className={classes.homeSection}>
          <div className={classes.sectionTitle}>
            <Typography variant="h5">New Releases</Typography>
            <Link href="/all" passHref>
              <MuiLink underline="none" color="textSecondary">
                Show all
              </MuiLink>
            </Link>
          </div>

          <div className={classes.sectionRow}>
            <Song
              name="Example Song"
              artist="Example Name"
              artwork="/images/artwork/1.jpg"
            />

            <Song
              name="Example Song"
              artist="Example Name"
              artwork="/images/artwork/2.jpg"
            />

            <Song
              name="Example Song"
              artist="Example Name"
              artwork="/images/artwork/3.jpg"
            />
          </div>
        </section>

        <section className={classes.homeSection}>
          <div className={classes.sectionTitle}>
            <Typography variant="h5">My Starred Songs</Typography>
            <Link href="/all" passHref>
              <MuiLink underline="none" color="textSecondary">
                Show all
              </MuiLink>
            </Link>
          </div>

          <div className={classes.sectionRow}>
            <Song
              name="Example Song"
              artist="Example Name"
              artwork="/images/artwork/4.jpg"
            />

            <Song
              name="Example Song"
              artist="Example Name"
              artwork="/images/artwork/5.jpg"
            />

            <Song
              name="Example Song"
              artist="Example Name"
              artwork="/images/artwork/6.jpg"
            />
          </div>
        </section>

        <section className={classes.homeSection}>
          <div className={classes.sectionTitle}>
            <Typography variant="h5">Discover</Typography>
            <Link href="/all" passHref>
              <MuiLink underline="none" color="textSecondary">
                Show all
              </MuiLink>
            </Link>
          </div>

          <div className={classes.sectionRow}>
            <Song
              name="Example Song"
              artist="Example Name"
              artwork="/images/artwork/7.jpg"
            />

            <Song
              name="Example Song"
              artist="Example Name"
              artwork="/images/artwork/8.jpg"
            />

            <Song
              name="Example Song"
              artist="Example Name"
              artwork="/images/artwork/9.jpg"
            />
          </div>
        </section>
      </Container>
    </>
  );
};

export default Index;
