import React, { useState } from "react";
import { Container, Paper, Grid, Box, Typography, Button } from "@mui/material";
import DataSquare from "./components/DataSquare";
import CategoryTab from "./components/CategoryTab";
const ShowBudgetView = () => {
    const [budgets, setBudgets] = useState([
        {
          name: "Mi sueldo",
          category: "Principal",
          amount: 500000,
          isExpense: false,
        },
        {
          name: "Agua",
          category: "Familia o Personal",
          amount: 5000,
          isExpense: true,
          subcategory: "Cuentas",
        },
    ]);
    return (<Container
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
                <Paper sx={{ height: "90vh", width: "100%", pt: "20px", px: "30px" }}>
                    <Typography variant="h4" color="initial">
                        Resumen de mi situacion actual
                    </Typography>
                    <DataSquare />
                </Paper>
            </Box>
            <Grid item xs={12} md={7}>
                <Paper sx={{ height: "90vh", width: "100%", pt: "20px", px: "30px" }}>
                    <Typography variant="h4" color="initial">
                        Detalle de los movimientos
                    </Typography>
                    <CategoryTab />

                </Paper>
            </Grid>
        </Grid>
    </Container>);
}

export default ShowBudgetView;