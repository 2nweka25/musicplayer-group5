import { MouseEventHandler, useEffect, useState } from "react";

import {
  Box,
  Button,
  Container,
  FormGroup,
  IconButton,
  InputBase,
  Modal,
  Slide,
  Slider,
  Typography,
} from "@material-ui/core";

import {
  GetApp,
  KeyboardArrowDown,
  Pause,
  PlayArrow,
  Repeat,
  Replay,
  SkipNext,
  SkipPrevious,
  Star,
} from "@material-ui/icons";

import Artwork from "../../components/artwork";
import Navbar from "../../components/navbar";
import { useRouter } from "next/router";

import ReactHowler from "react-howler";
import Songs from "../../lib/services/song";
import useStyles from "./styles";
import Song from "../../components/song";
import Comment from "../../components/comment";

interface Song {
  artist: string;
  artworkURL: string;
  audioURL: string;
  comments: [];
  owner: string;
  title: string;
}

const PlaySong = () => {
  const classes = useStyles();
  const router = useRouter();
  const { id } = router.query;

  const [song, setSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    if (!id) return;

    Songs.findById(id).then((fetchedSong: Song) => setSong(fetchedSong));
  }, [id]);

  const handlePlay: MouseEventHandler<HTMLButtonElement> = (e) => {
    setIsPlaying(!isPlaying);
  };

  const handleNext: MouseEventHandler<HTMLButtonElement> = (e)=> {
    Songs.getRandomSong().then((randomSong)=> setSong(randomSong));
    
  const handleNext: MouseEventHandler<HTMLButtonElement> = (e) => {
    Songs.getRandomSong().then((randomSong) => setSong(randomSong));
  };

  const toggleComments: MouseEventHandler<SVGSVGElement | HTMLElement> = () => {
    setShowComments(!showComments);
  };

  return (
    <>
      <ReactHowler
        src={`https://cors-anywhere.herokuapp.com/${song?.audioURL}`}
        playing={isPlaying}
      />
      <Navbar />
      <Container>
        <Artwork src={song?.artworkURL} />
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          mt={4}
        >
          <GetApp />
          <Box>
            <Typography variant="h5">{song?.title}</Typography>
            <Typography>{song?.artist}</Typography>
          </Box>
          <Star />
        </Box>
        <Box textAlign="center" mt={2}>
          <IconButton className={classes.mediaControl}>
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

        <Box
          mt={2}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          onClick={toggleComments}
        >
          <Typography>Comments</Typography>
          <KeyboardArrowDown />
        </Box>
      </Container>

      <Modal open={showComments} onBackdropClick={toggleComments}>
        <Slide in={showComments} direction="up">
          <Box className={classes.comments}>
            <KeyboardArrowDown onClick={toggleComments} />
            <Typography variant="h5">Comments</Typography>

            <Box
              height="90%"
              display="flex"
              flexDirection="column"
              justifyContent="flex-end"
            >
              <Comment text="This is a comment" />
              <Comment
                text="This is a comment from the artist of the song"
                createdByArtist
              />

              <Box component="form" mt={4}>
                <FormGroup>
                  <InputBase
                    className={classes.commentInput}
                    placeholder="Write a comment..."
                    rows={3}
                    multiline
                  />

                  <Button variant="contained" color="primary" disableElevation>
                    Post
                  </Button>
                </FormGroup>
              </Box>
            </Box>
          </Box>
        </Slide>
      </Modal>
    </>
  );
};

export default PlaySong;
