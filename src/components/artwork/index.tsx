import React from "react";
import useStyles from "./styles";

interface Props {
  src: string;
}

const Artwork = ({ src }: Props) => {
  const classes = useStyles();
  return <img className={classes.artwork} src={src} alt="Song Artwork" />;
};

export default Artwork;
