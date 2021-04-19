import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  mediaControl: {
    marginTop: theme.spacing(4),
    marginRight: theme.spacing(1),
    background: "#950A1B",
    boxShadow:
      "3px 5px 10px rgba(0, 0, 0, 0.2), -3px -8px 8px rgba(255, 255, 255, 0.12)",
  },

  comments: {
    background: "#262626",
    borderTopLeftRadius: "19px",
    borderTopRightRadius: "19px",
    height: "calc(100vh - 56px)",
    marginTop: "56px",
    padding: "24px",

    "& .MuiSvgIcon-root": {
      display: "block",
      margin: "0 auto",
      fontSize: "2rem",
    },
  },

  commentInput: {
    background: "#131313",
    borderRadius: "6px",
    padding: "8px",
    marginBottom: "16px",
  },
}));
