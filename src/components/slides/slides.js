import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import slideImage from '../../assets/images/slide-image.jpg';

const Hero = () => {
    return (
        <Box sx={{ flexGrow: 1, padding: 10, background: '#F5F7FA'}}>
            <Grid container spacing={15} display={'flex'} alignItems="center">
                <Grid item xs={12} md={6} sx={{ textAlign: 'left' }}>
                    <Typography variant="h3" fontWeight={'bold'}>
                        Lessons and insights <span style={{ color: '#4CAF4F' }}>from 8 years</span>
                    </Typography>
                    <Typography variant="body2" paddingY={'5%'}>
                        Where to grow your business as a photographer: site or social media?
                    </Typography>
                    <Button
                        variant="contained"
                        color="success"
                    >
                        Register
                    </Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={slideImage} alt="Hero" style={{ width: '80%', height: 'auto', maxWidth: '400px' }} />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Hero;
