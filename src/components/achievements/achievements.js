import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import achieveLogo1 from '../../assets/logo/achievements/achiements_logo1.jpg';
import achieveLogo2 from '../../assets/logo/achievements/achiements_logo2.jpg';
import achieveLogo3 from '../../assets/logo/achievements/achiements_logo3.jpg';
import achieveLogo4 from '../../assets/logo/achievements/achiements_logo4.jpg';

const Achievements = () => {
    return (
        <Box sx={{ py: 4, background: '#F5F7FA' }}>
            {/* Main Section */}
            <Grid container justifyContent={"space-around"} alignItems="center">

                {/* Left Section */}
                <Grid item xs={12} md={4}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                        Helping a local <span style={{ color: '#4CAF4F' }}>business reinvent itself</span>
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 2 }}>
                        We reached here with our hard work and dedication
                    </Typography>
                </Grid>

                {/* Right Section - Cards */}
                <Grid item xs={12} md={6}>
                    <Grid container spacing={4}>
                        {/* First Row */}
                        <Grid item xs={6}>
                            <Box textAlign="center">
                                <Box
                                    component="img"
                                    src={achieveLogo1}
                                    alt="Members"
                                    sx={{ width: '30px', height: 'auto'}}
                                />
                                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>2,245,341</Typography>
                                <Typography variant="body3">Members</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box textAlign="center">
                                <Box
                                    component="img"
                                    src={achieveLogo2}
                                    alt="Clubs"
                                    sx={{ width: '50px', height: 'auto'}}
                                />
                                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>46,328</Typography>
                                <Typography variant="body2">Clubs</Typography>
                            </Box>
                        </Grid>


                        {/* Second Row */}
                        <Grid item xs={6}>
                            <Box textAlign="center">
                                <Box
                                    component="img"
                                    src={achieveLogo3}
                                    alt="Event Bookings"
                                    sx={{ width: '50px', height: 'auto'}}
                                />
                                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>828,867</Typography>
                                <Typography variant="body2">Event Bookings</Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={6}>
                            <Box textAlign="center">
                                <Box
                                    component="img"
                                    src={achieveLogo4}
                                    alt="Payments"
                                    sx={{ width: '50px', height: 'auto', mb: 2 }}
                                />
                                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>1,926,436</Typography>
                                <Typography variant="body2">Payments</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Achievements;
