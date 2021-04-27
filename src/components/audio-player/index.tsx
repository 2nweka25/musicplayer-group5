import { Box, IconButton, Slider, Typography } from "@material-ui/core";

import {
  GetApp,
  Pause,
  PlayArrow,
  Repeat,
  Replay,
  SkipNext,
  SkipPrevious,
  Star,
} from "@material-ui/icons";

import Artwork from "components/artwork";
import { useAuth } from "lib/authContext";
import useAudioPlayer from "lib/hooks/useAudioPlayer";
import User from "lib/services/user";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import ReactHowler from "react-howler";

import useStyles from "./styles";

interface Props extends Song {
  setSong: Dispatch<SetStateAction<Song | null>>;
}

const AudioPlayer = (song: Props) => {
  const { id, artist, title, audioURL, artworkURL, setSong } = song;

  const [favourite, setFavourite] = useState(false);

  const { userId } = useAuth();

  const { isPlaying, handlePlay, handlePrevious, handleNext } = useAudioPlayer(
    setSong
  );

  const classes = useStyles();

  const addFavourite = async () => {
    if (!favourite) {
      User.addToFavouriteSongs(song, userId);
      setFavourite(true);
    }
  };

  useEffect(() => {
    User.getFavouriteSongs(userId).then((favouriteSongs) => {
      const favourites = favouriteSongs.map((item) => item.id);
      favourites.includes(id) && setFavourite(true);
    });
  }, []);

  return (
    <>
      <ReactHowler src={[audioURL]} playing={isPlaying} />
      <Artwork src={artworkURL} />

      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mt={4}
      >
        <GetApp />
        {/* onClick={handleDownload} */}
        <Box>
          <Typography variant="h5">{title}</Typography>
          <Typography>{artist}</Typography>
        </Box>
        <Star
          className={favourite ? classes.favourite : ""}
          onClick={addFavourite}
        />
      </Box>
      <Box textAlign="center" mt={2}>
        <IconButton className={classes.mediaControl} onClick={handlePrevious}>
          <SkipPrevious />
        </IconButton>
        <IconButton className={classes.mediaControl} onClick={handlePlay}>
          {isPlaying ? <Pause /> : <PlayArrow />}
        </IconButton>
        <IconButton className={classes.mediaControl} onClick={handleNext}>
          <SkipNext />
        </IconButton>
      </Box>
      <Box>
        <Slider />
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Repeat />
        <Replay />
      </Box>
    </>
  );
};

export default AudioPlayer;
