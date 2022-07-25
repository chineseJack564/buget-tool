import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Typography from '@mui/material/Typography'
import FormHelperText from '@mui/material/FormHelperText';

const CategorySelector = ({ isExpense, category, setCategory, cError, setCError }) => {
  const handleChange = (event) => {
    setCategory(event.target.value);
    setCError(false)
  };
  const spendCategory = ["Hogar", "Familia o Personal", "Financieros"];
  const incomeCategory = ["Principal", "Secundario"];

  const returnMenu = (isExpense) => {
    if (isExpense) {
      return spendCategory.map((item, index) => (
        <MenuItem value={item} key={index}>{item}</MenuItem>
      ));
    } else {
      return incomeCategory.map((item, index) => (
        <MenuItem value={item} key={index}>{item}</MenuItem>
      ));
    }
  };
  return (
    <>
      <FormControl sx={{ mt: 2, minWidth: 120 }}>
        <Typography variant="h5" color="text.primary" sx={{mb: 2}}>Elige la categoría del movimiento</Typography>
        <Select
          id="category-select"
          value={category}
          onChange={handleChange}
          displayEmpty
          error={cError}
        >
          {returnMenu(isExpense)}
        </Select>
        {cError ? <FormHelperText error>Tiene que elegir una categoría</FormHelperText> : null}
      </FormControl>
    </>
  );
};

export default CategorySelector;
