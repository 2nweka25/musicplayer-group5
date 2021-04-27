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

import Artwork from "components/artwork";
import Navbar from "components/navbar";
import { useRouter } from "next/router";

import ReactHowler from "react-howler";
import Songs from "lib/services/song";
import Comments from "lib/services/comments";
import downloadSong from "lib/services/download";
// import useStyles from "./styles";
import Song from "components/song";
import Comment from "components/comment";
import { useAuth } from "lib/authContext";

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
  // const classes = useStyles();
  const router = useRouter();
  const loggedInUser = useAuth();

  const { id } = router.query;

  const [song, setSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [formData, setFormData] = useState({
    songId: id,
    text: "",
    postedBy: "",
  });

  useEffect(() => {
    setFormData({ ...formData, postedBy: loggedInUser.userId });
  }, []);

  useEffect(() => {
    if (!id) return;
    const songs = Songs.findById(id);
    const comments = Songs.getComments(id);
    //  const download = Songs.getAudioUrl(id)

    Promise.all([songs, comments]).then((data) => {
      const song = data[0];
      const comments = data[1];
      //  const download = data[2];
      setSong({ ...song, comments });
    });
  }, [id]);

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
    const user = await Comments.postComment(formData);
  };

  const handleDownload: MouseEventHandler<
    SVGSVGElement | HTMLElement
  > = async () => {
    const user = await downloadSong.downloadSongUrl();
  };

  return (
    <>
      <ReactHowler
        src={`https://cors-anywhere.herokuapp.com/${song?.audioURL}`}
        playing={isPlaying}
      />

      <Artwork src={song?.artworkURL} />
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mt={4}
      >
        <GetApp onClick={handleDownload}></GetApp>
        <Box>
          <Typography variant="h5">{song?.title}</Typography>
          <Typography>{song?.artist}</Typography>
        </Box>
        <Star />
      </Box>
      <Box textAlign="center" mt={2}>
        <IconButton
          style={{
            marginTop: "32px",
            marginRight: "8px",
            background: "#950A1B",
            boxShadow:
              "3px 5px 10px rgba(0, 0, 0, 0.2), -3px -8px 8px rgba(255, 255, 255, 0.12)",
          }}
          onClick={handlePrevious}
        >
          <SkipPrevious />
        </IconButton>
        <IconButton
          style={{
            marginTop: "32px",
            marginRight: "8px",
            background: "#950A1B",
            boxShadow:
              "3px 5px 10px rgba(0, 0, 0, 0.2), -3px -8px 8px rgba(255, 255, 255, 0.12)",
          }}
          onClick={handlePlay}
        >
          {isPlaying ? <Pause /> : <PlayArrow />}
        </IconButton>
        <IconButton
          style={{
            marginTop: "32px",
            marginRight: "8px",
            background: "#950A1B",
            boxShadow:
              "3px 5px 10px rgba(0, 0, 0, 0.2), -3px -8px 8px rgba(255, 255, 255, 0.12)",
          }}
          onClick={handleNext}
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
        onClick={toggleComments}
      >
        <Typography>Comments</Typography>
        <KeyboardArrowDown />
      </Box>

      <Modal open={showComments} onBackdropClick={toggleComments}>
        <Slide in={showComments} direction="up">
          <Box
            style={{
              background: "#262626",
              borderTopLeftRadius: "19px",
              borderTopRightRadius: "19px",
              height: "calc(100vh - 56px)",
              marginTop: "56px",
              padding: "24px",
            }}
          >
            <KeyboardArrowDown
              style={{ display: "block", margin: "0 auto", fontSize: "2rem" }}
              onClick={toggleComments}
            />
            <Typography variant="h5">Comments</Typography>

            <Box
              height="90%"
              display="flex"
              flexDirection="column"
              justifyContent="flex-end"
            >
              {song?.comments.map((comment, i) => (
                <Comment key={i} {...comment} />
              ))}

              <Box component="form" mt={4} onSubmit={handleSubmit}>
                <FormGroup>
                  <InputBase
                    name="text"
                    style={{
                      background: "#131313",
                      borderRadius: "6px",
                      padding: "8px",
                      marginBottom: "16px",
                    }}
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
