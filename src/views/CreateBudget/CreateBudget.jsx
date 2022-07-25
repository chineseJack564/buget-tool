import React, { useState } from "react";
import { Container, Paper, Grid, Box, Typography, Button } from "@mui/material";
import BudgetForm from "./components/BudgetForm";
import BudgetCard from "./components/BudgetCard";
import InlineEdit from "./components/InlineEdit";
import useAuth from "../../hooks/useAuth";
import API from "../../Api";
import { useNavigate } from "react-router-dom";
import SnackAlert from "../../components/SnackAlert";

const CreateBudgetView = () => {
  const [budgetName, setBudgetName] = useState("Mi presupuesto");
  const [budgets, setBudgets] = useState([]);
  const {currentUser} = useAuth();
  const [alert, setAlert] = useState(false);
  const navigate = useNavigate();

  const addBudget = (budget) => setBudgets([...budgets, budget]);
  const removeBudget = (index) =>
    setBudgets(budgets.filter((budget) => budgets.indexOf(budget) !== index));
  
  const handleSend = () => {
    API.post('budgets', {
      name: budgetName,
      rows: budgets
    },{
      headers: { Authorization: `Bearer ${currentUser.accessToken}` },
    }).then(
      res => navigate("/budget-resume", {state: res.data})
    ).catch(err => setAlert(true))
  }

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
          <Paper sx={{ height: "90vh", width: "100%", pt: "20px", px: "30px" }}>
            <Typography variant="h4" color="initial">
              Agregar un movimiento
            </Typography>
            <Typography variant="body1" color="#414046" sx={{ pt: "6px" }}>
              Aquí puedes crear un ítem de tu presupuesto, ya sea ingreso o
              gasto
            </Typography>
            <BudgetForm addBudget={addBudget}></BudgetForm>
          </Paper>
        </Box>
        <Grid item xs={12} md={7}>
          <Paper sx={{ height: "90vh", width: "100%", pt: "20px", px: "30px" }}>
            <InlineEdit name={budgetName} setName={setBudgetName}/>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="h5" color="#414046" sx={{ mt: "8px" }}>
                Movimientos
              </Typography>
                <Button variant="contained" color="primary" disabled={budgets.length === 0 ? true :false} onClick={handleSend}>
                    Mandar presupuesto
                </Button>
            </Box>

            {budgets.length === 0 ? (
              <Typography variant="h5" color="#414046" sx={{ mt: "20px" }}>
                No hay movimientos agregados
              </Typography>
            ) : null}
            <Box
              component="div"
              sx={{
                display: "flex",
                flexDirection: "column",
                overflowY: "auto",
                maxHeight: "700px",
                height: "700px",
              }}
            >
              {budgets.map((budget, index) => (
                <BudgetCard
                  budget={budget}
                  key={index}
                  remove={() => removeBudget(index)}
                />
              ))}
            </Box>
          </Paper>
        </Grid>
      </Grid>
      <SnackAlert open={alert} setOpen={setAlert} success={false}/>
    </Container>
  );
};

export default CreateBudgetView;
