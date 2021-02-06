import React from "react";
import {
  Box,
  Avatar,
  Typography,
  Divider,
  ListItem,
  SvgIcon,
  InputAdornment,
  TextField,
  List,
  Drawer,
  makeStyles,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
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
    marginLeft: 260,
    backgroundColor: "#1b1b1b",
  },

  multilineColor: {
    color: "white",
  },
}));

const items = [
  {
    icon: "/image/chatAvtar/1.jpg",
    title: "Matt",
    caption: "Can you send",
  },
  {
    icon: "/image/chatAvtar/2.jpg",
    title: "Justin Engel",
    caption: "Busy typing...",
  },
  {
    icon: "/image/chatAvtar/3.jpg",
    title: "Emile",
    caption: "Can you look",
  },
  {
    icon: "/image/chatAvtar/4.jpg",
    title: "Michelle",
    caption: "Tell matt I'm busy",
  },
  {
    icon: "/image/chatAvtar/5.jpg",
    title: "Luke Engel",
    caption: "Where are you",
  },
  {
    icon: "/image/chatAvtar/6.jpg",
    title: "Elize van",
    caption: "Meeting in 45min",
  },
  {
    icon: "/image/chatAvtar/7.jpg",
    title: "Cersei",
    caption: "Do you Know",
  },
];
export default function ThirdNavBar({ openThird }) {
  const classes = useStyles();
  const content = (
    <Box>
      <TextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SvgIcon fontSize="small" color="action">
                <SearchIcon />
              </SvgIcon>
            </InputAdornment>
          ),
        }}
        placeholder="Search customer"
        variant="outlined"
      />
      <Divider />
      <List>
        {items.map((item) => (
          <ListItem button>
            <Avatar alt="Remy Sharp" src={item.icon} />
            <Box textAlign="left" ml="15px">
              <Typography
                variant="button"
                display="block"
                gutterBottom
                className={classes.multilineColor}
                ml={2}
              >
                {item.title}
              </Typography>
              <Typography
                variant="caption"
                display="block"
                gutterBottom
                className={classes.multilineColor}
              >
                {item.caption}
              </Typography>
            </Box>
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
        open={openThird}
        classes={{
          paper: classes.drawerPaperMobile,
        }}
      >
        {content}
      </Drawer>
    </div>
  );
}
