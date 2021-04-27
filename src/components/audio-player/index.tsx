import { Box, IconButton, Slider, Typography } from "@material-ui/core";

import {
  GetApp,
  KeyboardArrowDown,
  Pause,
  Repeat,
  Replay,
  SkipNext,
  SkipPrevious,
  Star,
} from "@material-ui/icons";

import Artwork from "components/artwork";
import useAudioPlayer from "lib/hooks/useAudioPlayer";
import ReactHowler from "react-howler";

import useStyles from "./styles";

interface Props extends Song {}

const AudioPlayer = (song: Props) => {
  const { artist, title, audioURL, artworkURL } = song;

  const { isPlaying } = useAudioPlayer();
  const classes = useStyles();

  console.log(song);

  return (
    <>
      <ReactHowler src={[audioURL]} playing={false} />
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
        <IconButton
          className={classes.mediaControl}
          // onClick={handlePrevious}
        >
          <SkipPrevious />
        </IconButton>
        <IconButton
          className={classes.mediaControl}
          // onClick={handlePlay}
        >
          {/* {isPlaying ? <Pause /> : <PlayArrow />} */}
          <Pause />
        </IconButton>
        <IconButton
          className={classes.mediaControl}
          // onClick={handleNext}
        >
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
      <Box
        mt={2}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        // onClick={toggleComments}
      >
        <Typography>Comments</Typography>
        <KeyboardArrowDown />
      </Box>
    </>
  );
};

export default AudioPlayer;
