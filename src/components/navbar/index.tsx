import { useState } from "react";
import useStyles from "./styles";
import {
  AppBar,
  Avatar,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@material-ui/core";

import {
  ArrowBackIos,
  ChevronLeft,
  CloudUpload,
  Home,
  Inbox,
  Mail,
  Menu,
  Settings,
} from "@material-ui/icons";

const listItems = [
  { text: "Home", Icon: Home },
  { text: "Upload Music", Icon: CloudUpload },
  { text: "Settings", Icon: Settings },
];

const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(!open);

  return (
    <>
      <AppBar color="transparent" elevation={0} position="static">
        <Toolbar className={classes.toolbar}>
          <ArrowBackIos />
          <Menu onClick={handleClick} />
        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="temporary"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <ChevronLeft onClick={handleClick} />
          <Avatar src="/images/avatar.svg" alt="profile" />
        </div>

        <List>
          {listItems.map(({ text, Icon }, i) => (
            <ListItem button key={i}>
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
    </>
  );
};

export default Navbar;
