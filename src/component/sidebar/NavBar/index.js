import React from "react";
import { Box, Drawer, List, makeStyles } from "@material-ui/core";
import NavItem from "./NavItem";
import clsx from "clsx";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const items = [
  {
    href: "/whatsapp",
    icon: "/image/whatsapp.png",
    title: "whatsapp",
  },
  {
    href: "/gmail",
    icon: "/image/gmail.png",
    title: "gmail",
  },
  {
    href: "/skype",
    icon: "/image/skype.png",
    title: "skype",
  },
];

const useStyles = makeStyles(() => ({
  desktopDrawer: {
    width: 64,
    backgroundColor: "#1b1b1b",
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  desktopDrawer2: {
    backgroundColor: "#161414",
    marginLeft: 65,
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
  const content = (
    <Box>
      <Button onClick={toggleDrawer("left", true)}>Left</Button>
      <List p={0} m={0}>
        {items.map((item) => (
          <NavItem href={item.href} title={item.title} icon={item.icon} />
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <div>
        <div>
          <Drawer
            anchor="left"
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
            classes={{ paper: classes.desktopDrawer2 }}
          >
            {list("left")}
          </Drawer>
        </div>

        <Drawer
          anchor="left"
          open
          variant="persistent"
          classes={{ paper: classes.desktopDrawer }}
        >
          {content}
        </Drawer>
      </div>
    </>
  );
};

export default NavBar;
