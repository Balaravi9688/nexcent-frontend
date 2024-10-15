import React from 'react';
import { Grid, Box, Typography, Button, Card, CardMedia, CardContent } from '@mui/material';
import img1 from '../../assets/images/community/community_a.jpg';
import img2 from '../../assets/images/community/community_b.jpg';
import img3 from '../../assets/images/community/community_c.jpg';

const CommunityUpdate = () => {
  return (
    <Box sx={{ py: 4 }}>
      {/* Main Text Section */}
      <Box textAlign="center" mb={4}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
          Caring is the new marketing
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: '600px', margin: '0 auto' }}>
          The Nextcent blog is the best place to read about the latest membership insights, trends, and more. See who's joining the community, read about how our community members are increasing their membership income, and much more.
        </Typography>
      </Box>

      {/* Cards Section */}
      <Grid container spacing={4} justifyContent="center">
        {/* Card 1 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: "90%", position: 'relative', overflow: 'visible' }}>
            {/* Image */}
            <CardMedia component="img" height="300" image={img1} alt="Creating Streamlined Safeguarding" />

            {/* Text Content */}
            <CardContent
              sx={{
                position: 'absolute',
                bottom: '-30%', // Pull it out of the image
                left: "10%",
                right: "10%",
                backgroundColor: 'white',
                color: 'black',
                padding: '16px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Optional: Adds shadow for floating effect
                textAlign: 'center', // Centers the content horizontally
              }}
            >
              <Typography variant="h6" gutterBottom>
                Creating Streamlined Safeguarding Processes with OneRen
              </Typography>
              <Button variant="text" color="success" endIcon={<span>&#8594;</span>}>
                Read More
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Card 2 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: "90%", position: 'relative', overflow: 'visible' }}>
            {/* Image */}
            <CardMedia component="img" height="300" image={img2} alt="Creating Streamlined Safeguarding" />

            {/* Text Content */}
            <CardContent
              sx={{
                position: 'absolute',
                bottom: '-30%', // Pull it out of the image
                left: "10%",
                right: "10%",
                backgroundColor: 'white',
                color: 'black',
                padding: '16px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Optional: Adds shadow for floating effect
                textAlign: 'center', // Centers the content horizontally
              }}
            >
              <Typography variant="h6" gutterBottom>
                What are your safeguarding responsibilities & how can you manage them?
              </Typography>
              <Button variant="text" color="success" endIcon={<span>&#8594;</span>}>
                Read More
              </Button>
            </CardContent>
          </Card>
        </Grid>
        {/* Card 3 */}

        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: "90%", position: 'relative', overflow: 'visible' }}>
            {/* Image */}
            <CardMedia component="img" height="300" image={img3} alt="Creating Streamlined Safeguarding" />

            {/* Text Content */}
            <CardContent
              sx={{
                position: 'absolute',
                bottom: '-30%', // Pull it out of the image
                left: "10%",
                right: "10%",
                backgroundColor: 'white',
                color: 'black',
                padding: '16px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Optional: Adds shadow for floating effect
                textAlign: 'center', // Centers the content horizontally
              }}
            >
              <Typography variant="h6" gutterBottom>
                Revamping the Membership Model with Triathlon Australia
              </Typography>
              <Button variant="text" color="success" endIcon={<span>&#8594;</span>}>
                Read More
              </Button>
            </CardContent>
          </Card>
        </Grid>

      </Grid>
    </Box>
  );
};

export default CommunityUpdate;
