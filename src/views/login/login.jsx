import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import { Paper, Grid, Typography, Box } from "@mui/material";
import logoWhite from "./assets/logo_white.png";
import budget from "./assets/budget.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const LoginPage = () => {
  return (
    <Container
      maxWidth={"xl"}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
      disableGutters={true}
    >
      <Paper sx={{ height: "90vh", width: "100%" }}>
        <Grid container spacing={0}>
          <Box
            item
            xs={0}
            md={5}
            display={{ xs: "none", md: "block" }}
            component={Grid}
          >
            <Paper
              elevation={0}
              sx={{ backgroundColor: "#114EC7", height: "90vh", p: "30px" }}
              square
            >
              <img src={logoWhite} alt="logo" style={{ width: "20%" }} />
              <Typography
                variant="h2"
                color="white"
                sx={{ mt: "60px", fontWeight: 500 }}
              >
                La UNICA aplicación que necesitas para manejar tu plata
              </Typography>
              <Container
                maxWidth={false}
                sx={{
                  height: { md: "20%", lg: "30%" },
                  mx: "auto",
                  mt: { md: "20px", lg: "50px", xl: "80px" },
                }}
                disableGutters={true}
              >
                <img src={budget} alt="budget" style={{ height: "100%" }} />
              </Container>
            </Paper>
          </Box>
          <Grid item xs={12} md={7}>
            <Paper
              elevation={0}
              sx={{
                height: "90vh",
                px: {xs: '20px', md: "60px", lg:"100px", xl:  "150px"},
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
              square
            >
              <Typography variant="h3" color="initial" sx={{ mb: "80px" }}>
                Bienvenido de vuelta!
              </Typography>
              <TextField
                id="outlined-basic"
                label="Username"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                type="password"
                sx={{
                  mt: "20px",
                }}
              />
              <Button variant="contained" sx={{height: "50px", mt:"20px"}}>
                Login
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default LoginPage;
