import React from "react";
import {
  Box,
  Typography,
  Divider,
  Button,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  List,
  Drawer,
  makeStyles,
  Badge,
  IconButton,
  Menu,
  MenuItem,
} from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const drawerWidth = 250;

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
  },
}));
const items = [
  {
    first: "Nickname:",
    second: "Triple T",
  },
  {
    first: "Tel:",
    second: "0645855966",
  },
  {
    first: "Date of Birth:",
    second: "May 25th 1999",
  },
  {
    first: "Gender:",
    second: "Male",
  },
  {
    first: "Language",
    second: "English",
  },
];
const options = ["View", "Edit", "Selection", "View", "Help"];

const ITEM_HEIGHT = 48;
export default function ProfileNavBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const content = (
    <Box ml="10px" mt="20px">
      <Box mb="20px" display="flex">
        <Badge
          color="primary"
          variant="dot"
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <NotificationsIcon />
        </Badge>
        <Box align="left" ml="100px">
          <Button variant="outlined">Default</Button>
        </Box>
      </Box>

      <Divider />
      <Box mt="10px" mb="10px" display="flex">
        <Box mt="10px" ml="10px">
          <MailOutlineIcon />
        </Box>

        <Box ml="150px">
          <IconButton
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="long-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: "20ch",
              },
            }}
          >
            {options.map((option) => (
              <MenuItem
                key={option}
                selected={option === "Pyxis"}
                onClick={handleClose}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Box>
      <Box align="center">
        <img
          src={"/image/chatAvtar/2.jpg"}
          alt="image"
          width="150"
          height="150"
        />
        <Typography variant="h5" gutterBottom>
          Justin Engle
        </Typography>
        <Typography variant="caption" display="block" gutterBottom>
          Cape Town, RSA
        </Typography>
        <Box mt="20px" mb="20px"></Box>
        <Divider />
      </Box>
      <List>
        {items.map((item) => (
          <ListItem>
            <ListItemText button>
              <Typography variant="subtitle1" gutterBottom>
                {item.first}
              </Typography>
            </ListItemText>
            <ListItemSecondaryAction>
              <Typography button variant="caption" display="block" gutterBottom>
                {item.second}
              </Typography>
            </ListItemSecondaryAction>
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
        anchor="right"
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
