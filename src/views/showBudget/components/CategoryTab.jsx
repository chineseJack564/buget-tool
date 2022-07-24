import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import CallMadeIcon from "@mui/icons-material/CallMade";
import CallReceivedIcon from "@mui/icons-material/CallReceived";
import { Box } from "@mui/material";
import BudgetCardShow from "./BudgetCardShow"

export default function CategoryTab({movementIn, movementOut}) {
    const [tab, setTab] = useState(0);
  
    const handleChange = (event, newValue) => {
      setTab(newValue);
    };
  
    return (
      <>
      <Tabs value={tab} onChange={handleChange} aria-label="Category Tabs" sx={{width: "50%", mt: 2}}>
        <Tab icon={<CallMadeIcon />} label="GASTOS" sx={{width: "50%"}}/>
        <Tab icon={<CallReceivedIcon />} label="INGRESOS" sx={{width: "50%"}}/>
      </Tabs> 
      <Box
              component="div"
              sx={{
                display: "flex",
                flexDirection: "column",
                overflowY: "auto",
                maxHeight: "660px",
                height: "660px",
                mt: 1
              }}
            >
            {tab === 0 ? movementOut.map((budget, index) => (
                <BudgetCardShow
                  budget={budget}
                  key={index}
                />
              )) : movementIn.map((budget, index) => (
                <BudgetCardShow
                  budget={budget}
                  key={index}
                />
              ))}
      </Box>
      </>
    );
}