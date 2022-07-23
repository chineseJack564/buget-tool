import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import CallMadeIcon from "@mui/icons-material/CallMade";
import CallReceivedIcon from "@mui/icons-material/CallReceived";

export default function CategoryTab() {
    const [value, setValue] = useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <Tabs value={value} onChange={handleChange} aria-label="Category Tabs" sx={{width: "50%", mt: 2}}>
        <Tab icon={<CallMadeIcon />} label="GASTOS" sx={{width: "50%"}}/>
        <Tab icon={<CallReceivedIcon />} label="INGRESOS" sx={{width: "50%"}}/>
      </Tabs>
    );
}