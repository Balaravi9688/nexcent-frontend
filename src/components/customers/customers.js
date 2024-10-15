import React from 'react';
import { Grid, Typography, Box, Button } from '@mui/material';
import customerpic from '../../assets/images/cutomers.jpg';
import clientlogo1 from '../../assets/logo/clients/client1.jpg';
import clientlogo2 from '../../assets/logo/clients/client2.jpg';
import clientlogo3 from '../../assets/logo/clients/client3.jpg';
import clientlogo4 from '../../assets/logo/clients/client4.jpg';
import clientlogo5 from '../../assets/logo/clients/client5.jpg';
import clientlogo6 from '../../assets/logo/clients/client6.jpg';

const Customer = () => {
  return (
    <Box sx={{ py: 4 }}>
      {/* Main Section */}
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        
        {/* Left Side (Image) */}
        <Grid item xs={12} md={6}>
          <Box textAlign="center">
            <Box
              component="img"
              src={customerpic}
              alt="Customer"
              sx={{ width: '100%', height: 'auto', maxWidth: '500px' }}
            />
          </Box>
        </Grid>

        {/* Right Side (Text + Logos) */}
        <Grid item xs={12} md={6}>
          <Typography variant="body1" sx={{ mb: 4 }}>
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum
            risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique
            quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at
            ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices,
            quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. 
            Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id
            sem dignissim finibus ac sit amet magna.
          </Typography>

          {/* Inside Content */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#4CAF4F' }}>
              Tim Smith
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              British Dragon Boat Racing Association
            </Typography>

            {/* Logos */}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2}}>
              <Box
                component="img"
                src={clientlogo1}
                alt="Client Logo 1"
                sx={{ width: '50px', height: 'auto' }}
              />
              <Box
                component="img"
                src={clientlogo2}
                alt="Client Logo 2"
                sx={{ width: '50px', height: 'auto' }}
              />
              <Box
                component="img"
                src={clientlogo3}
                alt="Client Logo 3"
                sx={{ width: '50px', height: 'auto' }}
              />
              <Box
                component="img"
                src={clientlogo4}
                alt="Client Logo 4"
                sx={{ width: '50px', height: 'auto' }}
              />
              <Box
                component="img"
                src={clientlogo5}
                alt="Client Logo 5"
                sx={{ width: '50px', height: 'auto' }}
              />
              <Box
                component="img"
                src={clientlogo6}
                alt="Client Logo 6"
                sx={{ width: '50px', height: 'auto' }}
              />
            </Box>

            {/* Button */}
            <Button color="success" sx={{width: '35%'}}>
              Meet all customers →
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Customer;
