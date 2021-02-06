import React from "react";
import {
  Box,
  Typography,
  Divider,
  ListItem,
  ListItemText,
  List,
  Drawer,
  makeStyles,
} from "@material-ui/core";
import ThirdNavBar from "../ThirdNavBar/index";
const drawerWidth = 200;

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
    marginLeft: 60,
    backgroundColor: "#131313",
  },

  multilineColor: {
    color: "#838383",
  },
  heading: {
    color: "white",
  },
}));

export default function SecondNavBar({ openSecond }) {
  const classes = useStyles();
  const [openThird, setOpenThird] = React.useState(false);

  const handleDrawerOpenThird = () => {
    if (openThird === false) {
      setOpenThird(true);
    } else {
      setOpenThird(false);
    }
  };
  const content = (
    <Box>
      <Typography
        variant="h6"
        gutterBottom
        align="center"
        className={classes.heading}
      >
        Inbox
      </Typography>
      <Divider />
      <List>
        {["All", "Message", "Unread", "Important"].map((text, index) => (
          <ListItem button onClick={handleDrawerOpenThird}>
            <ListItemText primary={text} className={classes.multilineColor} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Teams", "Groups", "Channels", "Location", "Media"].map(
          (text, index) => (
            <ListItem button onClick={handleDrawerOpenThird}>
              <ListItemText primary={text} className={classes.multilineColor} />
            </ListItem>
          )
        )}
      </List>
      <Divider />
      <List>
        {["Helps", "Settings"].map((text, index) => (
          <ListItem button onClick={handleDrawerOpenThird}>
            <ListItemText primary={text} className={classes.multilineColor} />
          </ListItem>
        ))}
      </List>
      <ThirdNavBar openThird={openThird} />
    </Box>
  );
  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={openSecond}
        classes={{
          paper: classes.drawerPaperMobile,
        }}
      >
        {content}
      </Drawer>
    </div>
  );
}
