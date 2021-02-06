import React from "react";
import {
  Avatar,
  Box,
  makeStyles,
  Drawer,
  List,
  IconButton,
  ListItem,
  ListItemIcon,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SecondNavBar from "../SecondNavBar/index";
const drawerWidth = 60;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaperMobile: {
    width: drawerWidth,
    backgroundColor: "#101010",
  },

  iconPadding: {
    paddingLeft: "4px",
    paddingRight: "0px",
  },
  multilineColor: {
    color: "white",
  },
}));
const items = [
  {
    icon: "/image/whatsapp.png",
  },
  {
    icon: "/image/gmail.png",
  },
  {
    icon: "/image/skype.png",
  },
];

export default function FirstNaveBar({ open }) {
  const [openSecond, setOpenSecond] = React.useState(false);

  const handleDrawerOpenSecond = () => {
    if (openSecond === false) {
      setOpenSecond(true);
    } else {
      setOpenSecond(false);
    }
  };
  const classes = useStyles();
  const content = (
    <Box>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="end"
        onClick={handleDrawerOpenSecond}
      >
        <MenuIcon className={classes.multilineColor} />
      </IconButton>
      <SecondNavBar openSecond={openSecond} />

      <List>
        {items.map((item) => (
          <ListItem button className={classes.iconPadding}>
            <ListItemIcon>
              <Avatar alt="Remy Sharp" src={item.icon} />
            </ListItemIcon>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open
        classes={{
          paper: classes.drawerPaperMobile,
        }}
      >
        {content}
      </Drawer>
    </div>
  );
}
