import { AppBar, Box, InputBase, Toolbar, Typography } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { Autocomplete } from "@react-google-maps/api";
import React, { useState } from "react";
import useStyles from "./style";
const Header = ({ setCoordinates }) => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Travel Companion
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
