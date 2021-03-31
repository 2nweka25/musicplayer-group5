import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#FC1616",
    },

    background: {
      default: "#131313",
    },

    text: {
      secondary: "#D1D1D1",
    },
  },

  overrides: {
    MuiButton: {
      root: {
        textTransform: "none",
      },
    },

    MuiLink: {
      root: {
        color: "#0E4DA4",
      },
    },
  },
});

export default theme;
