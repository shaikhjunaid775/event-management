import React from 'react';
import { Grid, Box, Typography, Card, CardContent } from '@mui/material';
import Stack from '@mui/material/Stack';
import DashboardCard from '../../../components/shared/DashboardCard';

const SalesOverview = () => {
  return (
    <DashboardCard>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={6}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <Typography variant="h2">Mano Ya Na Mano</Typography>
              <Typography variant="h4 subtitle2">Event Start Time: 11:00:00</Typography>
              <Typography variant="h4 subtitle2">Event End Time: 11:00:00</Typography>
              <Typography variant="h4 subtitle2">Date: 08/09 June 2024</Typography>
            </Box>
          </Box>
          <Card sx={{ borderRadius: 4 }}>
            <CardContent sx={{ pb: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography sx={{ fontSize: 21 }}>Payment Status</Typography>
                <Typography sx={{ fontSize: 13.5 }} color="text.secondary" gutterBottom>
                  per pex: 4900
                </Typography>
              </Box>
            </CardContent>
            <CardContent sx={{ p: 0, px: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box
                  sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}
                >
                  <Typography sx={{ fontSize: 17 }}>Total Guest</Typography>
                  <Typography
                    sx={{ fontSize: 22, fontWeight: '600' }}
                    color="text.black"
                    gutterBottom
                  >
                    200
                  </Typography>
                </Box>
                <Box
                  sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}
                >
                  <Typography sx={{ fontSize: 17 }}>Total Guest</Typography>
                  <Typography
                    sx={{ fontSize: 22, fontWeight: '600' }}
                    className="text-[#34A853]"
                    gutterBottom
                  >
                    200
                  </Typography>
                </Box>
                <Box
                  sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}
                >
                  <Typography sx={{ fontSize: 17 }}>Total Guest</Typography>
                  <Typography
                    sx={{ fontSize: 22, fontWeight: '600' }}
                    className="text-[#EA4335]"
                    gutterBottom
                  >
                    200
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <Typography variant="h2" sx={{ display: 'flex', alignItems: 'end' }}>
                Day 1,<Typography variant="h5"> 04 Sat 2024 </Typography>
              </Typography>
            </Box>
          </Box>
          <Stack direction="row" spacing={5}>
            <Card item sx={{ borderRadius: 4, p:0}}>
              <CardContent sx={{}} className='p-0'>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Grid
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      flexDirection: 'column',
                    }}
                  >
                    <Typography sx={{ fontSize: 17, pb: 1 }}>Total Guest</Typography>
                    <Typography
                      sx={{ fontSize: 22, fontWeight: '600' }}
                      color="text.black"
                      gutterBottom
                    >
                      200
                    </Typography>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
            <Card item sx={{ borderRadius: 4, p:0  }}>
              <CardContent sx={{}}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Grid
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      flexDirection: 'column',
                    }}
                  >
                    <Typography sx={{ fontSize: 17, pb: 1 }}>Total Guest</Typography>
                    <Typography
                      sx={{ fontSize: 22, fontWeight: '600' }}
                      color="text.black"
                      gutterBottom
                    >
                      200
                    </Typography>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
            <Card item sx={{ borderRadius: 4, p:0  }}>
              <CardContent sx={{}}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Grid
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      flexDirection: 'column',
                    }}
                  >
                    <Typography sx={{ fontSize: 17, pb: 1 }}>Total Guest</Typography>
                    <Typography
                      sx={{ fontSize: 22, fontWeight: '600' }}
                      color="text.black"
                      gutterBottom
                    >
                      200
                    </Typography>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Stack>
          <Card sx={{ borderRadius: 4 }}>
            <CardContent sx={{ pb: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography sx={{ fontSize: 21 }}>Payment Status</Typography>
                <Typography sx={{ fontSize: 13.5 }} color="text.secondary" gutterBottom>
                  per pex: 4900
                </Typography>
              </Box>
            </CardContent>
            <CardContent sx={{ p: 0, px: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box
                  sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}
                >
                  <Typography sx={{ fontSize: 17 }}>Total Guest</Typography>
                  <Typography
                    sx={{ fontSize: 22, fontWeight: '600' }}
                    color="text.black"
                    gutterBottom
                  >
                    200
                  </Typography>
                </Box>
                <Box
                  sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}
                >
                  <Typography sx={{ fontSize: 17 }}>Total Guest</Typography>
                  <Typography
                    sx={{ fontSize: 22, fontWeight: '600' }}
                    className="text-[#34A853]"
                    gutterBottom
                  >
                    200
                  </Typography>
                </Box>
                <Box
                  sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}
                >
                  <Typography sx={{ fontSize: 17 }}>Total Guest</Typography>
                  <Typography
                    sx={{ fontSize: 22, fontWeight: '600' }}
                    className="text-[#EA4335]"
                    gutterBottom
                  >
                    200
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </DashboardCard>
  );
};

export default SalesOverview;
