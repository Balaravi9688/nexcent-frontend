import React from 'react';
import { AppBar, Toolbar, Button, Grid } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PageLogo from '../../assets/logo/page_logo.jpg';

const Navbaar = () => {

  const handleMenuClose = () => {
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black' }}>
      <Toolbar>
        <Grid container alignItems="center">
          {/* Logo Section */}
          <Grid
            item
            xs={12} /* Full width on small screens */
            sm={5} /* 5 out of 12 columns on medium and larger screens */
            display="flex"
            justifyContent={{ xs: 'center', sm: 'flex-start' }} /* Center on small screens, left-align on larger screens */
            paddingLeft={{ sm: '4%' }}
          >
            <img src={PageLogo} alt="Logo" style={{ height: '30px' }} />
          </Grid>

          {/* Navigation Links */}
          <Grid
            item
            xs={12} /* Full width on small screens */
            sm={5} /* 5 out of 12 columns on medium and larger screens */
            display="flex"
            justifyContent={{ xs: 'center', sm: 'space-evenly' }} /* Center-align on small screens */
            alignItems="center"
            marginTop={{ xs: 1, sm: 0 }} /* Add space above links on small screens */
          >
            <Button color="inherit" onClick={handleMenuClose}>
              Home
            </Button>
            <Button color="inherit" onClick={handleMenuClose}>
              Features
            </Button>
            <Button color="inherit" onClick={handleMenuClose}>
              Community
            </Button>
            <Button color="inherit" onClick={handleMenuClose}>
              Blog
            </Button>
            <Button color="inherit" onClick={handleMenuClose}>
              Pricing
            </Button>
          </Grid>

          {/* Register Button */}
          <Grid
            item
            xs={12} /* Full width on small screens */
            sm={2} /* 2 out of 12 columns on medium and larger screens */
            display="flex"
            justifyContent={{ xs: 'center', sm: 'flex-end' }} /* Center on small screens, right-align on larger screens */
            marginTop={{ xs: 2, sm: 0 }} /* Add space above register button on small screens */
          >
            <Button
              variant="contained"
              color="success"
              endIcon={<ArrowForwardIcon />}
            >
              Register Now
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbaar;
