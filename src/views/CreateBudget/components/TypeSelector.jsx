import React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Typography from '@mui/material/Typography'

export default function TypeSelector({isExpense, setisExpense}) {
    
    const handleChange = (event, newAlignment) => {
        setisExpense(newAlignment);
    };
  
    return (
    <>
    <Typography variant="h5" color="text.primary" sx={{mb: "10px"}}>Tipo de movimiento</Typography>
      <ToggleButtonGroup
        color="primary"
        value={isExpense}
        exclusive
        onChange={handleChange}
      >
        <ToggleButton value={true} color='error'>Gasto</ToggleButton>
        <ToggleButton value={false} color='success'>Ingreso</ToggleButton>
      </ToggleButtonGroup>
    </>
    );
  }