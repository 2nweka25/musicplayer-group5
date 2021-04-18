import { Avatar, Box, Typography } from "@material-ui/core";
import useStyles from "./styles";

interface Props {
  text: string;
  createdByArtist?: boolean;
}

const Comment = ({ text, createdByArtist = false }: Props) => {
  const classes = useStyles({ createdByArtist });

  return (
    <div className={classes.comment}>
      <Avatar />
      <Typography>{text}</Typography>
    </div>
  );
};

export default Comment;
