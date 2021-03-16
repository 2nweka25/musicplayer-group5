import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    minHeight: "100vh",
    padding: "0 0.5rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  main: {
    padding: "5rem 0",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    width: "100%",
    height: "100px",
    borderTop: "1px solid #eaeaea",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    "& > img": {
      marginLeft: "0.5rem",
    },

    "& > a": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },

  title: {
    margin: "0",
    lineHeight: 1.15,
    fontSize: "4rem",

    "& > a": { color: "#0070f3", textDecoration: "none" },
  },

  description: { textAlign: "center", lineHeight: 1.5, fontSize: "1.5rem" },

  code: {
    background: "#fafafa",
    borderRadius: "5px",
    padding: "0.75rem",
    fontSize: "1.1rem",
    fontFamily:
      "Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,\r\n    Bitstream Vera Sans Mono, Courier New, monospace",
  },

  grid: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    maxWidth: "800px",
    marginTop: "3rem",
  },
  card: {
    margin: "1rem",
    flexBasis: "45%",
    padding: "1.5rem",
    textAlign: "left",
    color: "inherit",
    textDecoration: "none",
    border: "1px solid #eaeaea",
    borderRadius: "10px",
    transition: "color 0.15s ease, border-color 0.15s ease",

    "& > h3": {
      margin: "0 0 1rem 0",
      fontSize: "1.5rem",
    },

    "& > p": {
      margin: "0",
      fontSize: "1.25rem",
      lineHeight: 1.5,
    },

    "& > :hover": {
      color: "#0070f3",
      borderColor: "#0070f3",
    },
  },

  logo: { height: "1em" },
}));
