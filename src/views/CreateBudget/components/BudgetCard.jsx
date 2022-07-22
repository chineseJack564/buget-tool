import React from "react";
import { Paper, Typography, IconButton } from "@mui/material";
import CallMadeIcon from "@mui/icons-material/CallMade";
import CallReceivedIcon from "@mui/icons-material/CallReceived";
import Grid from "@mui/material/Grid";
import PersonIcon from "@mui/icons-material/Person";
import HouseIcon from "@mui/icons-material/House";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import WorkIcon from "@mui/icons-material/Work";
import DeleteIcon from "@mui/icons-material/Delete";

const BudgetCard = ({ budget, remove }) => {
  const CategoryIcon = (category) => {
    switch (category) {
      case "Hogar":
        return <HouseIcon fontSize="large" color="error" />;
      case "Familia o Personal":
        return <PersonIcon fontSize="large" color="error" />;
      case "Financieros":
        return <RequestQuoteIcon fontSize="large" color="error" />;
      case "Principal":
        return <WorkIcon fontSize="large" color="success" />;
      case "Secundario":
        return <MonetizationOnIcon fontSize="large" color="success" />;
      default:
        return <HouseIcon fontSize="large" color="error" />;
    }
  };

  return (
    <Paper sx={{ width: "100%", height: "100px", mt: 2, minHeight: "100px"}} variant="outlined">
      <Grid container spacing={0} sx={{ height: "100%" }}>
        <Grid
          item
          xs={2}
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {CategoryIcon(budget.category)}
          <Typography
            variant="body1"
            color="#414046"
            textAlign={"center"}
            sx={{ maxWidth: "75px" }}
          >
            {budget.category}
          </Typography>
        </Grid>
        <Grid
          item
          xs={5}
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            pl: "30px",
          }}
        >
          <Typography variant="h5" color="#414046" textAlign={"left"}>
            {budget.name}
          </Typography>
          <Typography variant="body1" color="#414046" textAlign={"left"}>
            {budget.subcategory}
          </Typography>
        </Grid>
        <Grid
          item
          xs={3}
          sx={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {budget.isExpense ? (
            <CallMadeIcon fontSize="large" color="error" />
          ) : (
            <CallReceivedIcon fontSize="large" color="success" />
          )}
          <Typography
            variant="h5"
            color="#414046"
            textAlign={"center"}
            sx={{ ml: "8px" }}
          >
            {budget.amount}
          </Typography>
        </Grid>
        <Grid
          item
          xs={2}
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton aria-label="delete" size="large" onClick={remove}>
            <DeleteIcon fontSize="inherit" />
          </IconButton>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default BudgetCard;
