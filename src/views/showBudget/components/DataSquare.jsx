import React from 'react';
import { Grid, Card, Typography, Box } from '@mui/material';
import CallMadeIcon from "@mui/icons-material/CallMade";
import CallReceivedIcon from "@mui/icons-material/CallReceived";
import SavingsIcon from '@mui/icons-material/Savings';
import PercentBar from './ProgressBar';
import AddDigit from '../../../components/AddDigit';
const DataSquare = ({ data }) => {
    return (
        <Grid
            container
            rowSpacing={2}
            spacing={2}
            sx={{ mt: 2 }}>
            <Grid
                item
                xs={6}
            >
                <Card sx={{ backgroundColor: "success.light", height: "200px", width: "full", px: 2, py: 1, display: "flex", justifyContent: "space-around", flexDirection: "column" }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <CallReceivedIcon sx={{ fontSize: "50px", color: "#388e3c" }} />
                        <Typography variant="h5" color="#414046">Ingreso total</Typography>
                    </Box>
                    <Box>
                        <Typography variant="h4" color="#414046">{AddDigit(data.moneyIn)}</Typography>
                        <Typography variant="body1" color="#414046">Al mes</Typography>
                    </Box>
                </Card>
            </Grid>
            <Grid
                item
                xs={6}
            >
                <Card sx={{ backgroundColor: "error.light", height: "200px", width: "full", px: 2, py: 1, display: "flex", justifyContent: "space-around", flexDirection: "column" }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <CallMadeIcon sx={{ fontSize: "50px", color: "#d32f2f" }} />
                        <Typography variant="h5" color="#414046">Gasto total</Typography>
                    </Box>
                    <Box>
                        <Typography variant="h4" color="#414046">{AddDigit(data.moneyOut)}</Typography>
                        <Typography variant="body1" color="#414046">Al mes</Typography>
                    </Box>
                </Card>
            </Grid>

            <Grid
                item
                xs={12}
            >
                <Card sx={{ backgroundColor: "#e3f2fd", height: "150px", width: "full", px: 3, py: 1, display: "flex", justifyContent: "space-around", flexDirection: "column" }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <SavingsIcon sx={{ fontSize: "50px", color: "#114EC7" }} />
                        <Typography variant="h5" color="#414046">Ahorro Total</Typography>
                    </Box>
                    <Box>
                        <Typography variant="h4" color="#414046">{AddDigit(Math.max(data.moneyIn - data.moneyOut, 0))}</Typography>
                        <Typography variant="body1" color="#414046">Estos nos queda para otros gastos y ahorro</Typography>
                    </Box>
                </Card>
            </Grid>

            <Grid
                item
                xs={12}
            >
                <Typography variant="h5" color="#414046">Porcentaje de Ahorro</Typography>
                <Typography variant="body1" color="#414046">Este es el procentaje del monto ahorrado respecto al ingreso total </Typography>
                <PercentBar variant="determinate" value={data.savingsRatio * 100} />
            </Grid>
        </Grid>
    );
}

export default DataSquare;