import React from "react";
import { Box, Typography } from "@mui/material";

const Frame = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '50vh',
                backgroundColor: '#F5F7FA',
                textAlign: 'center',
            }}
        >
            <Typography variant="h3" fontWeight={"bold"} gutterBottom>
                Pellentesque suscipit
            </Typography>
        </Box>
    );
};

export default Frame;
