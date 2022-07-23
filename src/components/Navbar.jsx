import React from "react";
import { Chip } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

const Navbar = () => {
  const handleDelete = () =>{
    console.log("logOut")
  }
  return (
    <Chip color="primary" icon={<AccountCircleIcon />} sx={{
      borderRadius: "6px",
      position: "absolute",
      left: "80vw",
      width: "160px",
      justifyContent: "space-between"
    }} label= {"userName"}
      deleteIcon={<LogoutIcon/>}
      onDelete={handleDelete}
      />
  );
};

export default Navbar;
