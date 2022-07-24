import React from "react";
import { Chip } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import useAuth from "../hooks/useAuth";
const Navbar = () => {
  const { currentUser, handleUserLogout } = useAuth();

  return currentUser ? (
    <Chip
      color="primary"
      icon={<AccountCircleIcon />}
      sx={{
        borderRadius: "6px",
        position: "absolute",
        left: "80vw",
        width: "160px",
        justifyContent: "space-between",
      }}
      label={currentUser.lastName}
      deleteIcon={<LogoutIcon />}
      onDelete={handleUserLogout}
    />
  ) : (
    <Chip
      color="primary"
      icon={<AccountCircleIcon />}
      sx={{
        borderRadius: "6px",
        position: "absolute",
        left: "78vw",
        width: "220px",
        justifyContent: "space-between",
      }}
      label={"No se ha iniciado sesion"}
    />
  );
};

export default Navbar;
