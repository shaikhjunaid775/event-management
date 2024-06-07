import React from 'react';
import { Grid, Box, Typography, Card, CardContent } from '@mui/material';
import Stack from '@mui/material/Stack';
import DashboardCard from '../../../components/shared/DashboardCard';

const Overview = () => {
  return (
    <DashboardCard>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={6} sx={{display: 'flex' , justifyContent: 'space-between' , flexDirection: 'column'}}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Box sx={{ p: 0, display: 'flex', flexDirection: 'column' }}>
              <Typography variant="h1" sx={{fontSize: 29}}>Mano Ya Na Mano</Typography>
              <Typography variant="h3 subtitle2" >Event Start Time: 11:00:00</Typography>
              <Typography variant="h3 subtitle2" >Event End Time: 11:00:00</Typography>
              <Typography variant="h3 subtitle2" >Date: 08/09 June 2024</Typography>
            </Box>
          </Box>
          <Card sx={{ borderRadius: 4, lineHeight:0 , pb:0}}>
            <CardContent sx={{ pt:1, pb:0 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography sx={{ fontSize: 18 }}>Payment Status</Typography>
                <Typography sx={{ fontSize: 12.5 }} color="text.secondary" gutterBottom>
                  per pex: 4900
                </Typography>
              </Box>
            </CardContent>
            <div sx={{ p: 0, px: 2 }} className='px-4 p-2'>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box
                  sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}
                >
                  <Typography sx={{ fontSize: 14 , pb:0 }}>Total Guest</Typography>
                  <Typography
                    sx={{ fontSize: 19, fontWeight: '600', mb:0 }}
                    color="text.black"
                    gutterBottom
                  >
                    200
                  </Typography>
                </Box>
                <Box
                  sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}
                >
                  <Typography sx={{ fontSize: 14, pb:0 }}>Full Paid</Typography>
                  <Typography
                    sx={{ fontSize: 19, fontWeight: '600', mb:0 }}
                    className="text-[#34A853]"
                    gutterBottom
                  >
                    180
                  </Typography>
                </Box>
                <Box
                  sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}
                >
                  <Typography sx={{ fontSize: 14, pb:0 }}>Remaining</Typography>
                  <Typography
                    sx={{ fontSize: 19, fontWeight: '600', mb:0 }}
                    className="text-[#EA4335]"
                    gutterBottom
                  >
                    30
                  </Typography>
                </Box>
              </Box>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ p: 1, display: 'flex', flexDirection: '' , alignItems:'end', px:0 , pb:0}}>
              <Typography variant="h4" >
                Day 1,
              </Typography>
              <Typography variant="h6"> 04 Sat 2024 </Typography>
            </Box>
          </Box>
          <Stack direction="row" className='' sx={{display:'flex', justifyContent: 'space-between', pb:0.7}}>
            <div className="card bg-white px-4 p-1 rounded-xl">
              <div className="card-body">
              <Typography sx={{ fontSize: 14, pb: 0 }}>Total Guest</Typography>
                <Typography
                  sx={{ fontSize: 19, fontWeight: '600' , mb:0 }}
                  color="text.black"
                  gutterBottom
                >
                  200
                </Typography>
              </div>
            </div>
            <div className="card bg-white px-4 p-1 rounded-xl">
              <div className="card-body">
                <Typography sx={{ fontSize: 14, pb: 0 }}>Check-in</Typography>
                <Typography
                  sx={{ fontSize: 19, fontWeight: '600', mb:0 }}
                  color="text.black"
                  gutterBottom
                >
                  200
                </Typography>
              </div>
            </div>
            <div className="card bg-white px-4 p-1 rounded-xl">
              <div className="card-body">
                <Typography sx={{ fontSize: 14, pb: 0 }}>Absent</Typography>
                <Typography
                  sx={{ fontSize: 19, fontWeight: '600', mb:0 }}
                  color="text.black"
                  gutterBottom
                >
                  200
                </Typography>
              </div>
            </div>
          </Stack>
          <Card sx={{ borderRadius: 4 }}>
            <div sx={{ p: 0, px: 2 }} className='px-4 p-1'>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box
                  sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}
                >
                  <Typography sx={{ fontSize: 14 }}>Food Coupons</Typography>
                  <Typography
                    sx={{ fontSize: 19, fontWeight: '600',  mb:0 }}
                    color="text.black"
                    gutterBottom
                  >
                    220
                  </Typography>
                </Box>
                <Box
                  sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}
                >
                  <Typography sx={{ fontSize: 14 }}>Had food</Typography>
                  <Typography
                    sx={{ fontSize: 19, fontWeight: '600',  mb:0 }}
                    className="text-[#34A853]"
                    gutterBottom
                  >
                    180
                  </Typography>
                </Box>
                <Box
                  sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}
                >
                  <Typography sx={{ fontSize: 14 }}>didn't had</Typography>
                  <Typography
                    sx={{ fontSize: 19, fontWeight: '600',  mb:0 }}
                    className="text-[#EA4335]"
                    gutterBottom
                  >
                    31
                  </Typography>
                </Box>
              </Box>
            </div>
          </Card>
          </Box>
          <Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ p: 1, display: 'flex', flexDirection: '' , alignItems:'end', px:0, pb:0}}>
              <Typography variant="h4" >
                Day 2,
              </Typography>
              <Typography variant="h6"> 05 Sun 2024 </Typography>
            </Box>
          </Box>
          <Stack direction="row" className='' sx={{display:'flex', justifyContent: 'space-between', pb:0.7}}>
            <div className="card bg-white px-4 p-1 rounded-xl">
              <div className="card-body">
              <Typography sx={{ fontSize: 14 }}>Total Guest</Typography>
                <Typography
                  sx={{ fontSize: 19, fontWeight: '600' }}
                  color="text.black"
                  gutterBottom
                >
                  200
                </Typography>
              </div>
            </div>
            <div className="card bg-white px-4 p-1 rounded-xl">
              <div className="card-body">
                <Typography sx={{ fontSize: 14 }}>Check-in</Typography>
                <Typography
                  sx={{ fontSize: 19, fontWeight: '600' }}
                  color="text.black"
                  gutterBottom
                >
                  200
                </Typography>
              </div>
            </div>
            <div className="card bg-white px-4 p-1 rounded-xl">
              <div className="card-body">
                <Typography sx={{ fontSize: 14 }}>Absent</Typography>
                <Typography
                  sx={{ fontSize: 19, fontWeight: '600' }}
                  color="text.black"
                  gutterBottom
                >
                  200
                </Typography>
              </div>
            </div>
          </Stack>
          <Card sx={{ borderRadius: 4 }}>
            <div sx={{ p: 0, px: 2 }} className='px-4 p-2'>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Box
                  sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}
                >
                  <Typography sx={{ fontSize: 14 }}>food Coupons</Typography>
                  <Typography
                    sx={{ fontSize: 19, fontWeight: '600' }}
                    
                    gutterBottom
                  >
                    200
                  </Typography>
                </Box>
                <Box
                  sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}
                >
                  <Typography sx={{ fontSize: 14 }}>Had food</Typography>
                  <Typography
                    sx={{ fontSize: 19, fontWeight: '600' }}
                    className="text-[#34A853]"
                    gutterBottom
                  >
                    180
                  </Typography>
                </Box>
                <Box
                  sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}
                >
                  <Typography sx={{ fontSize: 14 }}>didn't had</Typography>
                  <Typography
                    sx={{ fontSize: 19, fontWeight: '600' }}
                    className="text-[#EA4335]"
                    gutterBottom
                  >
                    31
                  </Typography>
                </Box>
              </Box>
            </div>
          </Card>
          </Box>
          
        </Grid>
      </Grid>
    </DashboardCard>
  );
};

export default Overview;
