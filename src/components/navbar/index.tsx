import React from "react";
import useStyles from "./styles";
import { AppBar, Toolbar } from "@material-ui/core";
import { ArrowBackIos, Menu } from "@material-ui/icons";

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar color="transparent" elevation={0} position="static">
      <Toolbar className={classes.toolbar}>
        <ArrowBackIos />
        <Menu />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
