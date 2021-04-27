import {
  Box,
  Button,
  FormGroup,
  InputBase,
  Modal,
  Slide,
  Typography,
} from "@material-ui/core";
import { KeyboardArrowDown } from "@material-ui/icons";
import { useAuth } from "lib/authContext";
import useComments from "lib/hooks/useComments";
import { FormEventHandler, useState } from "react";
import Comment from "./comment";

interface Props {
  songId?: string;
  comments: Comments;
  setComments: any;
}

const Comments = ({ songId, comments, setComments }: Props) => {
  const { showComments, toggleComments, postComment } = useComments(
    setComments
  );

  const { userId } = useAuth();

  const [comment, setComment] = useState({
    postedBy: userId,
    text: "",
  });

  const createComment: FormEventHandler = (e) => {
    e.preventDefault();
    postComment(comment, songId);
    setComment({ ...comment, text: "" });
  };

  return (
    <>
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
              {comments?.map((comment, i) => (
                <Comment key={i} {...comment} />
              ))}

              <Box component="form" mt={4} onSubmit={createComment}>
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
                    value={comment.text}
                    onChange={({ target }) =>
                      setComment({ ...comment, text: target.value })
                    }
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

export default Comments;
