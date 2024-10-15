import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import communityLogo1 from '../../assets/logo/community/community_icon.jpg';
import communityLogo2 from '../../assets/logo/community/community_icon1.jpg';
import communityLogo3 from '../../assets/logo/community/community_icon2.jpg';

const Community = () => {
    return (
        <Box sx={{ py: 4 }}>
            {/* Text Section */}
            <Grid container justifyContent="center" textAlign="center">
                <Grid item xs={12} md={8}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                        Manage your entire community in a single system
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body1" sx={{ mt: 6 }}>
                        Who is Nextcent suitable for?
                    </Typography>
                </Grid>
            </Grid>

            {/* Community Sections */}
            <Grid container spacing={2} justifyContent="center" mt={5}>
                {/* Card 1 */}
                <Grid item xs={12} sm={6} md={3}>
                    <Box textAlign="center" height="100%" padding={'6%'}>
                        <Box
                            component="img"
                            src={communityLogo1}
                            alt="Membership Organisations"
                            sx={{ width: '100%', maxWidth: '80px', height: 'auto', mb: 2 }}
                        />
                        <Typography fontSize={30} fontWeight={"bold"}>
                            Membership Organisations
                        </Typography>
                        <Typography variant="body1" sx={{ mt: 7 }}>
                            Our membership management software provides full automation of membership renewals and payments.
                        </Typography>
                    </Box>
                </Grid>

                {/* Card 2 */}
                <Grid item xs={12} sm={6} md={3}>
                    <Box textAlign="center" height="100%" padding={'6%'}>
                        <Box
                            component="img"
                            src={communityLogo2}
                            alt="National Associations"
                            sx={{ width: '100%', maxWidth: '80px', height: 'auto', mb: 2 }}
                        />
                        <Typography fontSize={30} fontWeight={"bold"}>
                            National Associations
                        </Typography>
                        <Typography variant="body1" sx={{ mt: 7 }}>
                            Our membership management software provides full automation of membership renewals and payments.
                        </Typography>
                    </Box>
                </Grid>

                {/* Card 3 */}
                <Grid item xs={12} sm={6} md={3}>
                    <Box textAlign="center" height="100%" padding={'6%'}>
                        <Box
                            component="img"
                            src={communityLogo3}
                            alt="Clubs And Groups"
                            sx={{ width: '100%', maxWidth: '80px', height: 'auto', mb: 2 }}
                        />
                        <Typography fontSize={30} fontWeight={"bold"}>
                            Clubs And Groups
                        </Typography>
                        <Typography variant="body1" sx={{ mt: 7 }}>
                            Our membership management software provides full automation of membership renewals and payments.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Community;
