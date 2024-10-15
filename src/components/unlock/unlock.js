import React from 'react';
import { Grid, Typography, Box, Button } from '@mui/material';
import unlockImage from '../../assets/images/unlock.jpg';

const Unlock = () => {
    return (
        <Box sx={{ py: 4 }}>
            {/* Main Section */}
            <Grid container spacing={4} alignItems="center" justifyContent="center">

                {/* Image Section */}
                <Grid item xs={12} md={6}>
                    <Box textAlign="center">
                        <Box
                            component="img"
                            src={unlockImage}
                            alt="Unlock Image"
                            sx={{ width: '100%', height: 'auto', maxWidth: '500px' }}
                        />
                    </Box>
                </Grid>

                {/* Text Section */}
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
                        How to design your site footer like we did
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 4 }}>
                        Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt
                        molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at
                        libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at
                        porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna
                        tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent
                        felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus
                        ipsum id gravida.
                    </Typography>
                    <Button variant="contained" color="success">
                        Learn More
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Unlock;
