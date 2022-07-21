import React from "react";
import { Container, Paper, Grid, Box } from "@mui/material";

const CreateBudgetView = () => {
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
          <Paper sx={{ height: "90vh", width: "100%" }}>
            
          </Paper>
        </Box>
        <Grid item xs={12} md={7}>
          <Paper sx={{ height: "90vh", width: "100%" }}></Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CreateBudgetView;
