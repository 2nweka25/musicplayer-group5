import { Avatar, styled, Typography } from "@material-ui/core";

interface Props {
  text: string;
  createdByArtist?: boolean;
}

const Comment = ({ text, createdByArtist = false }: Props) => {
  return (
    <StyledComment createdByArtist={createdByArtist}>
      <Avatar />
      <Typography>{text}</Typography>
    </StyledComment>
  );
};

export default Comment;

const StyledComment = styled("div")(({ theme, createdByArtist }: any) => ({
  display: "flex",
  marginBottom: "16px",
  flexDirection: createdByArtist ? "row-reverse" : "row",

  "& p": {
    borderRadius: "6px",
    flex: 1,
    padding: "8px",
    marginLeft: !createdByArtist ? "8px" : "",
    marginRight: createdByArtist && "8px",
    color: createdByArtist ? "black" : "white",
    background: createdByArtist ? "white" : "#131313",
  },
}));
