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
import useAudioPlayer from "lib/hooks/useAudioPlayer";
import { Dispatch, SetStateAction } from "react";
import ReactHowler from "react-howler";

import useStyles from "./styles";

interface Props extends Song {
  setSong: Dispatch<SetStateAction<Song | null>>;
}

const AudioPlayer = (song: Props) => {
  const { artist, title, audioURL, artworkURL, setSong } = song;

  const { isPlaying, handlePlay, handlePrevious, handleNext } = useAudioPlayer(
    setSong
  );

  const classes = useStyles();

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
        <Star />
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
