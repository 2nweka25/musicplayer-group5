import { makeStyles, Theme } from "@material-ui/core/styles";

interface StyleProps {
  createdByArtist: boolean;
}

export default makeStyles<Theme, StyleProps>((theme) => ({
  comment: ({ createdByArtist }) => ({
    display: "flex",
    flexDirection: createdByArtist ? "row-reverse" : "row",

    marginBottom: "16px",

    "& p": {
      borderRadius: "6px",
      flex: 1,

      padding: "8px",

      marginLeft: !createdByArtist && "8px",

      marginRight: createdByArtist && "8px",

      color: createdByArtist ? "black" : "white",

      background: createdByArtist ? "white" : "#131313",
    },
  }),
}));
