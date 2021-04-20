import {
  ChangeEventHandler,
  FormEventHandler,
  MouseEventHandler,
  useEffect,
  useState,
} from "react";

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
import Comments from "../../lib/services/comments";
import useStyles from "./styles";
import Song from "../../components/song";
import Comment from "../../components/comment";

interface Comment {
  text: string;
  postedBy: string;
}

interface Song {
  artist: string;
  artworkURL: string;
  audioURL: string;
  owner: string;
  comments: Comment[];
  title: string;
}

const PlaySong = () => {
  const classes = useStyles();
  const router = useRouter();

  const { id } = router.query;

  const [song, setSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [formData, setFormData] = useState({ comments: "" });

  useEffect(() => {
    if (!id) return;
    const songs = Songs.findById(id);
    const comments = Songs.getComments(id);

    Promise.all([songs, comments]).then((data) => {
      const song = data[0];
      const comments = data[1];
      setSong({ ...song, comments });
    });

    console.log("id of song changed", id);
  }, [id]);

  console.log(song);

  const handlePlay: MouseEventHandler<HTMLButtonElement> = (e) => {
    setIsPlaying(!isPlaying);
  };

  const handleNext: MouseEventHandler<HTMLButtonElement> = async () => {
    const randomSong = await Songs.getRandomSong();
    setSong(randomSong);
    router.push(`/play-song/${randomSong.id}`, undefined, { shallow: true });
  };

  const handlePrevious: MouseEventHandler<HTMLButtonElement> = () => {
    router.back();
  };

  const toggleComments: MouseEventHandler<SVGSVGElement | HTMLElement> = () => {
    setShowComments(!showComments);
  };

  const handleChange: ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  > = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit: FormEventHandler<HTMLElement> = async (e) => {
    e.preventDefault();
    console.log(formData);
    // const user = await Comments.postComment(formData.comments);
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
              {song.comments.map((comment, i) => (
                <Comment key={i} {...comment} />
              ))}

              <Box component="form" mt={4} onSubmit={handleSubmit}>
                <FormGroup>
                  <InputBase
                    name="comments"
                    className={classes.commentInput}
                    placeholder="Write a comment..."
                    rows={3}
                    multiline
                    onChange={handleChange}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disableElevation
                  >
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

// hello
