import React from 'react';
import { Container, Paper, Grid, Box, Typography, Button } from "@mui/material";
import DataSquare from "./components/DataSquare";
import CategoryTab from "./components/CategoryTab";
import { useLocation } from "react-router";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router";
const ShowBudgetView = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const movementOut = state.rows.filter(row => row.isExpense);
  const movementIn = state.rows.filter(row => !row.isExpense);
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
      <Grid container spacing={2}>
        <Box
          item
          xs={0}
          md={5}
          display={{ xs: "none", md: "block" }}
          component={Grid}
        >
          <Paper sx={{ height: "90vh", width: "100%", pt: "20px", px: "30px"}}>
            <Typography variant="h4" color="initial">
              Resumen de mi situacion actual
            </Typography>
            <DataSquare data={state} />
            <Typography variant="body1" color="#414046" sx={{mt:2}}>
              Lo anterior fue generado por el presupuesto : {state.name}
            </Typography>
            <Button variant="contained" startIcon={<ArrowBackIcon />} sx={{mt: 6}}
            onClick={() => navigate("/create-budget")}>
              Crear otro presupuesto
            </Button>
          </Paper>
        </Box>
        <Grid item xs={12} md={7}>
          <Paper sx={{ height: "90vh", width: "100%", pt: "20px", px: "30px" }}>
            <Typography variant="h4" color="initial">
              Detalle de los movimientos
            </Typography>
            <CategoryTab movementIn={movementIn} movementOut={movementOut}/>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ShowBudgetView;
