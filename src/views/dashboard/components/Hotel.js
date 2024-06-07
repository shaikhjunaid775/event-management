import React from 'react';
import { Grid, Box, Typography, Card } from '@mui/material';
import Stack from '@mui/material/Stack';
import SearchIcon from '@mui/icons-material/Search';
import DashboardCard from '../../../components/shared/DashboardCard';
import SeatMatrix from "./components/SeatMatrix"

import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';

function Hotel() {
  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const primarylight = '#ecf2ff';
  const successlight = theme.palette.success.light;

  // chart
  const optionscolumnchart = {
    chart: {
      type: 'donut',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
    },
    colors: [primary,  '#F9F9FD'],
    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 360,
        donut: {
          size: '75%',
          background: 'transparent',
        },
      },
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
      fillSeriesColor: false,
    },
    stroke: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    responsive: [
      {
        breakpoint: 991,
        options: {
          chart: {
            width: 20,
          },
        },
      },
    ],
  };
  const seriescolumnchart = [40, 60];

  return (
    <div>
      <DashboardCard>
        <Grid container spacing={4}>
          <Grid
            item
            xs={12}
            lg={6}
            sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', pt:0 }}
          >
            {/* Description Box */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between' ,pb:1 }}>
              <Box sx={{ p: 0, display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h1" sx={{fontSize: 29}}>Orchid Hotel, Lonavala</Typography>
                <Typography variant="h3 subtitle2">Mano ya na mano</Typography>
                <Typography variant="h3 subtitle2">Date: 08-09 June 2024</Typography>
                <Typography variant="h3 subtitle2">2 Days Program</Typography>
              </Box>
            </Box>

            {/* Total Room Cards */}
            <Stack direction="row" className='' sx={{display:'flex', justifyContent: 'space-between', pb:0.7}}>
            <div className="card bg-white px-4 p-1 rounded-xl">
              <div className="card-body">
              <Typography sx={{ fontSize: 14, pb: 0 }}>Total Rooms</Typography>
                <Typography
                  sx={{ fontSize: 19, fontWeight: '600' , mb:0 }}
                  color="text.black"
                  gutterBottom
                >
                  50
                </Typography>
              </div>
            </div>
            <div className="card bg-white px-4 p-1 rounded-xl">
              <div className="card-body">
                <Typography sx={{ fontSize: 14, pb: 0 }}>Floor</Typography>
                <Typography
                  sx={{ fontSize: 19, fontWeight: '600', mb:0 }}
                  color="text.black"
                  gutterBottom
                >
                  5
                </Typography>
              </div>
            </div>
            <div className="card bg-white px-4 p-1 rounded-xl">
              <div className="card-body">
                <Typography sx={{ fontSize: 14, pb: 0 }}>Total Guest</Typography>
                <Typography
                  sx={{ fontSize: 19, fontWeight: '600', mb:0 }}
                  color="text.black"
                  gutterBottom
                >
                  180
                </Typography>
              </div>
            </div>
          </Stack>

            {/* Total Guest Card */}
            <Card sx={{ borderRadius: 4, lineHeight: 0, p: 0 }}>
              <div sx={{ p: 0, px: 2 }} className="px-4 p-2">
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      flexDirection: 'column',
                    }}
                  >
                    <Typography sx={{ fontSize: 14 }}>Total Kit</Typography>
                    <Typography
                      sx={{ fontSize: 22, fontWeight: '600' }}
                      color="text.black"
                      gutterBottom
                    >
                      180
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      flexDirection: 'column',
                    }}
                  >
                    <Typography sx={{ fontSize: 14 }}>Standard Guest</Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}
                      gap={3}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          flexDirection: 'column',
                        }}
                      >
                        <Typography sx={{ fontSize: 10 }}>Check-in</Typography>
                        <Typography
                          sx={{ fontSize: 18, fontWeight: '600' }}
                          className="text-[#34A853]"
                          gutterBottom
                        >
                          180
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          flexDirection: 'column',
                        }}
                      >
                        <Typography sx={{ fontSize: 10 }}>Absent</Typography>
                        <Typography
                          sx={{ fontSize: 18, fontWeight: '600' }}
                          className="text-[#EA4335]"
                          gutterBottom
                        >
                          18
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      flexDirection: 'column',
                    }}
                  >
                    <Typography sx={{ fontSize: 14 }}>VIP Guest</Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}
                      gap={3}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          flexDirection: 'column',
                        }}
                      >
                        <Typography sx={{ fontSize: 10 }}>Check-in</Typography>
                        <Typography
                          sx={{ fontSize: 18, fontWeight: '600' }}
                          className="text-[#34A853]"
                          gutterBottom
                        >
                          2
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          flexDirection: 'column',
                        }}
                      >
                        <Typography sx={{ fontSize: 10 }}>Absent</Typography>
                        <Typography
                          sx={{ fontSize: 18, fontWeight: '600' }}
                          className="text-[#EA4335]"
                          gutterBottom
                        >
                          1
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </div>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            lg={6}
            sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', pt:0 }}
          >
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }} spacing={3}>
                <Grid item xs={7} sm={7} sx={{ p: 1 }}>
                  <Typography variant="h4" sx={{ pt: 0.5 }}>
                    Rooms Summary
                  </Typography>
                  <Box sx={{ position: 'relative' }}>
                    <form className=" ">
                      <div className="relative">
                        <div className="absolute top-1.5 left-2">
                          <SearchIcon />
                        </div>
                        <input
                          type="text"
                          className="h-8 w-full mx-auto text-gray-900 bg-gray-50  pl-10 pr-20 rounded-full z-0 focus:shadow focus:outline-none"
                          placeholder="Search for PNR, Guest Name, Mobile No."
                        />
                        <div className="absolute top-1.5 right-2">
                          <button className="w-16 text-white rounded-full bg-blue-400 hover:bg-blue-500">
                            Search
                          </button>
                        </div>
                      </div>
                    </form>
                  </Box>
                </Grid>
                <Grid item xs={5} sm={5} sx={{ position: 'relative', p: 0 }}>
                  <Chart
                    options={optionscolumnchart}
                    series={seriescolumnchart}
                    type="donut"
                    height="100px"
                  />
                </Grid>
              </Box>
              <SeatMatrix />
          </Grid>
        </Grid>
      </DashboardCard>
    </div>
  );
}

export default Hotel;
