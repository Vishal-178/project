import React from "react";
import { Button, ListItem, Avatar } from "@material-ui/core";

const NavItem = ({ href, icon, title }) => {
  return (
    <Button href={href} p={0} m={0}>
      <Avatar alt="Remy Sharp" src={icon} p={0} m={0} />
    </Button>
  );
};

export default NavItem;
