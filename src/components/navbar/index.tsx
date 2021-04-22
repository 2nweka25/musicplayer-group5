import Link from 'next/link'
import {
  MouseEventHandler,
  useState,
} from "react";
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


const listItems = [
  { text: "Home", path:"src/pages/_app.tsx" , Icon: Home },
  { text: "Upload Music", path: "/src/pages/upload/index.tsx", Icon: CloudUpload },
  { text: "Settings", path: "/src/pages/profile/index.tsx", Icon: Settings },
  
];


const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  //const {user} = useContext(AuthContext)
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
          {listItems.map(({ text ,path ,Icon }, i) => (
            <Link href={path}>
               <ListItem  button key={i}>
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
