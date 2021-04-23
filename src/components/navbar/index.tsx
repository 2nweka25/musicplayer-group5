import Link from "next/link";
import { MouseEventHandler, useState } from "react";
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
  Menu,
  Settings,
} from "@material-ui/icons";
import AuthContext from "../../lib/authContext";
import { useRouter } from "next/router";

const listItems = [
  { text: "Home", path: "/signin", Icon: Home },
  { text: "Upload Music", path: "/upload", Icon: CloudUpload },
  { text: "Settings", path: "/profile", Icon: Settings },
];

const Navbar = () => {
  const router = useRouter();
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  //const {user} = useContext(AuthContext)
  const handleClick = () => setOpen(!open);

  return (
    <>
      <AppBar color="transparent" elevation={0} position="static">
        <Toolbar className={classes.toolbar}>
          <ArrowBackIos onClick={() => router.back()} />
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
          {listItems.map(({ text, path, Icon }, i) => (
            <Link href={path} key={i}>
              <ListItem button>
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
      </Drawer>
    </>
  );
};

export default Navbar;
