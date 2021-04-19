import React from "react";
import useStyles from "./styles";
import { Typography } from "@material-ui/core";
import Artwork from "../artwork";
import { Star } from "@material-ui/icons";
import Link from "next/link";

interface Props {
  id: string;
  artist: string;
  artworkURL: string;
  audioURL: string;
  comments: [];
  owner: string;
  title: string;
}

const Song = ({ id, artworkURL, title, artist }: Props) => {
  const classes = useStyles();

  return (
    <Link href={`/play-song/${id}`} passHref>
      <div className={classes.song}>
        <Artwork src={artworkURL} />
        <div className={classes.songInfo}>
          <div>
            <Typography className={classes.songName}>{title}</Typography>
            <Typography className={classes.songArtist} color="textSecondary">
              {artist}
            </Typography>
          </div>

          <div className={classes.rating}>
            <Star fontSize="small" />
            <Typography component="span">2</Typography>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Song;
