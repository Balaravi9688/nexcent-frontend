import React from 'react';
import { Grid, Box, Typography, Button } from '@mui/material';
import securityImage from '../../assets/images/security.jpg';

const Security = () => {
    return (
        <Box sx={{ py: 4 }}>
            <Grid container spacing={4} alignItems="center">
                {/* Image Section */}
                <Grid item xs={12} md={6}>
                    <Box
                        component="img"
                        src={securityImage}
                        alt="Unlock Main"
                        sx={{
                            width: '100%',
                            height: 'auto',
                            borderRadius: '8px'
                        }}
                    />
                </Grid>

                {/* Text Section */}
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
                        The unseen of spending three years at Pixelgrade
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 4 }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
                    </Typography>
                    <Button variant="contained" color="success" size="large">
                        Learn More
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Security;
