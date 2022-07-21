import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Navbar = () => {
  return (
    <AppBar position="sticky" color="background" >
      <Toolbar>
        <Typography variant="h6">Glau</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
