const Comments = () => (
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
);

export default Comments;
