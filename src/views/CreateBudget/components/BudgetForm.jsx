import React, { useState } from "react";
import TypeSelector from "./TypeSelector";
import CategorySelector from "./CategorySelector";
import { Grid, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
const BudgetForm = ({ addBudget }) => {
  const [isExpense, setisExpense] = useState(true);
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [cError, setCError] = useState(false);
  const [aError, setAError] = useState(false);
  const [nError, setNError] = useState(false);

  const submitBudget = () => {
    if (category === "" || amount === 0 || amount < 0 || name === "") {
      category === "" ? setCError(true) : setCError(false);
      (amount === 0|| amount < 0) ? setAError(true) : setAError(false);
      name === "" ? setNError(true) : setNError(false);
    } else {
      addBudget({
        name: name,
        category: category,
        amount: amount,
        isExpense: isExpense,
        subCategory: subCategory,
      });
      resetForm();
    }
  };

  const resetForm = () => {
    setCategory("");
    setSubCategory("");
    setName("");
    setAmount(0);
  };

  return (
    <Grid
      container
      rowSpacing={2}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      sx={{ mt: "10px" }}
    >
      <Grid item xs={12}>
        <Typography variant="h5" color="text.rpimary" sx={{ my: 2 }}>
          Agrega un nombre a tu movimiento
        </Typography>
        <TextField
          error={nError}
          id="name"
          label="nombre"
          variant="outlined"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
            setNError(false);
          }}
          sx={{ width: "400px" }}
          helperText={nError ? "Tiene que poner el nombre" : null}
        />
      </Grid>
      <Grid item xs={12}>
        <TypeSelector isExpense={isExpense} setisExpense={setisExpense} />
      </Grid>
      <Grid item xs={12}>
        <CategorySelector
          isExpense={isExpense}
          category={category}
          setCategory={setCategory}
          cError={cError}
          setCError={setCError}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="subcategory"
          label="subcategoría"
          variant="outlined"
          value={subCategory}
          onChange={(event) => setSubCategory(event.target.value)}
          sx={{ width: "400px" }}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5" color="text.rpimary" sx={{ my: 2 }}>
          Agrega el monto del movimiento
        </Typography>
        <FormControl sx={{ width: "400px" }}>
          <InputLabel htmlFor="outlined-adornment-amount">Monto</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            type="number"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Monto"
            error={aError}
          />
          {aError ? (
            <FormHelperText error>Tiene que ingresar un monto valido</FormHelperText>
          ) : null}
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" onClick={submitBudget}>
          Agregar Movimiento
        </Button>
      </Grid>
    </Grid>
  );
};

export default BudgetForm;
