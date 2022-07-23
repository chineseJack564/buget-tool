import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const ProgressBar = styled(LinearProgress)(({ theme }) => ({
    height: 30,
    borderRadius: 15,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 15,
        backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
}));

const PercentBar = ({ value }) => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
            <Box sx={{ width: '95%', mr: 1 }}>
                <ProgressBar variant="determinate" value={value} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
                <Typography variant="body2" color="text.primary">{`${Math.round(
                    value
                )}%`}</Typography>
            </Box>
        </Box>
    );
}

export default PercentBar;
