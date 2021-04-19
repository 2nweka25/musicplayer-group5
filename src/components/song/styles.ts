import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  song: {
    marginRight: theme.spacing(2),
    cursor: "pointer",
    width: "100px",
    height: "97px",
  },
  songInfo: {
    display: "flex",
  },
  songName: {
    fontSize: "11px",
  },

  songArtist: {
    fontSize: "9px",
  },

  rating: {
    marginLeft: theme.spacing(2),
    display: "flex",
    alignItems: "center",

    "& .MuiSvgIcon-root": {
      color: "#F7F250",
    },
  },
}));
