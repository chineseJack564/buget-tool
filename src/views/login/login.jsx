import React, { useState} from "react";
import Container from "@mui/material/Container";
import { Paper, Grid, Typography, Box, Alert } from "@mui/material";
import logoWhite from "./assets/logo_white.png";
import budget from "./assets/budget.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import useAuth from "../../hooks/useAuth";
import API from "../../Api";
import ErrorIcon from '@mui/icons-material/Error';
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [loginValues, setLoginvalues] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { handleUserLogin } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = () => {
    setLoading(true);
    setErrorMessage("");
    API.post("auth", loginValues)
      .then((res) => {
        handleUserLogin(res.data)
        setLoading(false);
        navigate("create-budget")
      })
      .catch((err) => {
        setErrorMessage(err.response.data);
        setLoading(false);
      });
  };

  const handleChange = (event) => {
    setLoginvalues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

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
                px: { xs: "20px", md: "60px", lg: "100px", xl: "150px" },
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
              square
            >
              <Typography variant="h3" color="initial" sx={{ mb: "80px" }}>
                Bienvenido de vuelta!
              </Typography>
              {errorMessage !== "" ? <Alert
                severity="error"
                sx={{ backgroundColor: "error.light", color: "error.main", mb: 3 }}
                icon={<ErrorIcon sx={{color: "error.main" }}/>}
              >
                {errorMessage}
              </Alert> : null}
              
              <TextField
                type={"email"}
                id="email"
                label="Email"
                variant="outlined"
                name="email"
                onChange={handleChange}
              />
              <TextField
                id="password"
                label="Password"
                variant="outlined"
                type="password"
                name="password"
                sx={{
                  mt: "20px",
                }}
                onChange={handleChange}
              />
              <Button
                variant="contained"
                sx={{ height: "50px", mt: "20px" }}
                disabled={loading}
                onClick={handleSubmit}
              >
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
