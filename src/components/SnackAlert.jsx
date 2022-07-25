import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SnackAlert({ open, setOpen, success }) {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={success ? "success" : "error"} sx={{ width: "100%" }}>
        {success ? "Presupuesto creado con éxito!" : "Error de servidor, inténtalo de nuevo!"}
      </Alert>
    </Snackbar>
  );
}
