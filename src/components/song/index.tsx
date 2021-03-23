import React from "react";
import useStyles from "./styles";
import { Typography } from "@material-ui/core";
import Artwork from "../artwork";
import { Star } from "@material-ui/icons";

interface Props {
  name: string;
  artist: string;
  artwork: string;
}

const Song = ({ name, artist, artwork }: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.song}>
      <Artwork src={artwork} />
      <div className={classes.songInfo}>
        <div>
          <Typography className={classes.songName}>Example Song</Typography>
          <Typography className={classes.songArtist} color="textSecondary">
            Example Name
          </Typography>
        </div>

        <div className={classes.rating}>
          <Star fontSize="small" />
          <Typography component="span">2</Typography>
        </div>
      </div>
    </div>
  );
};

export default Song;
