import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: {
    justifyContent: "space-between",
  },

  drawer: {
    width: 240,
    flexShrink: 0,
  },

  drawerPaper: {
    width: 240,
    background: "rgba(19, 19, 19, 1)",
  },

  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "space-between",
  },
}));
