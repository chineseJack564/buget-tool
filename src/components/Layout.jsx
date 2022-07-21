import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#114EC7",
    },
    secondary: {
      main: "#604E9E",
    },
    background: {
      default: "#f6f6fc",
    },
    text: {
      primary: "#414046",
      secondary: "rgba(0, 0, 0, 0.54)",
    },
    success: {
      main: "#388e3c",
      light: "#ecf5ec",
    },
    warning: {
      main: "#f57c00",
      light: "#fdeceb",
      contrastText: "#fff",
    },
    error: {
      main: "#d32f2f",
      light: "#fdeceb",
    },
  },
  typography: {
    fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
  },
});

theme = responsiveFontSizes(theme);

const Layout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </>
  );
};

export default Layout;
