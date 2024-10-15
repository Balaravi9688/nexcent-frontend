import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import clientlogo1 from '../../assets/logo/clients/client1.jpg';
import clientlogo2 from '../../assets/logo/clients/client2.jpg';
import clientlogo3 from '../../assets/logo/clients/client3.jpg';
import clientlogo4 from '../../assets/logo/clients/client4.jpg';
import clientlogo5 from '../../assets/logo/clients/client5.jpg';
import clientlogo6 from '../../assets/logo/clients/client6.jpg';
import clientlogo7 from '../../assets/logo/clients/client7.jpg';

const ClientSection = () => {
  return (
    <Box sx={{ flexGrow: 1, py: 4 }}>
      {/* Clients Text Section */}
      <Grid container justifyContent="center" sx={{ mb: 4 }}>
        <Grid item xs={12}>
          <Typography variant="h4" component="h2" align="center" sx={{ fontWeight: 'bold' }}>
            Our Clients
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" align="center" sx={{ mt: 2 }}>
            We have been working with some Fortune 500+ clients
          </Typography>
        </Grid>
      </Grid>

      {/* Clients Logo Section */}
      <Grid container spacing={2} paddingLeft={"10%"} justifyContent="space-around" width={"90%"}>
        {[clientlogo1, clientlogo2, clientlogo3, clientlogo4, clientlogo5, clientlogo6, clientlogo7].map((logo, index) => (
          <Grid item key={index} sx={{ display: 'flex', justifyContent: 'center', minWidth: '100px' }}>
            <Box
              component="img"
              src={logo}
              alt={`Client logo ${index + 1}`}
              sx={{ width: '45%', maxWidth: '100px', height: 'auto' }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ClientSection;
