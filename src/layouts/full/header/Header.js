import React from 'react';
import { useState } from 'react';
import {
  Box,
  AppBar,
  Toolbar,
  styled,
  Stack,
  IconButton,
  Badge,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import PropTypes from 'prop-types';

// components
import Profile from './Profile';
import { IconBellRinging, IconMenu } from '@tabler/icons';

const Header = (props) => {
  const [searchQuery, setSearchQuery] = useState('');
  // const filterData = (query, data) => {
  //   if (!query) {
  //     return data;
  //   } else {
  //     return data.filter((d) => d.toLowerCase().includes(query));
  //   }
  // };
  // const data = [
  //   'Paris',
  //   'London',
  //   'New York',
  //   'Tokyo',
  //   'Berlin',
  //   'Buenos Aires',
  //   'Cairo',
  //   'Canberra',
  //   'Rio de Janeiro',
  //   'Dublin',
  // ];
  // const dataFiltered = filterData(searchQuery, data);


  // const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  // const lgDown = useMediaQuery((theme) => theme.breakpoints.down('lg'));

  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    boxShadow: 'none',
    background: theme.palette.background.paper,
    justifyContent: 'center',
    backdropFilter: 'blur(4px)',
    [theme.breakpoints.up('lg')]: {
      minHeight: '70px',
    },
  }));
  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    width: '100%',
    color: theme.palette.text.secondary,
  }));

  const SearchBar = ({ setSearchQuery }) => (
    <form>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', border: 1, borderRadius: 4 }}>
        <InputBase
          id="search-bar"
          className="text p-1 px-2"
          onInput={(e) => {
            setSearchQuery(e.target.value);
          }}
          label="Enter a city name"
          variant="outlined"
          placeholder="Search..."
        />

        <IconButton>
          <SearchIcon />
        </IconButton>
      </Box>
    </form>
  );

  return (
    <AppBarStyled position="sticky" color="default">
      <ToolbarStyled>
        <Box className="gap-2"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <IconButton
            color="inherit"
            aria-label="menu"
            onClick={props.toggleMobileSidebar}
            sx={{
              display: {
                lg: 'none',
                xs: 'inline',
              },
            }}
          >
            <IconMenu width="20" height="20" />
          </IconButton>
          <Box
            sx={{
              display: {
                lg: 'inline',
                xs: 'none',
              },
            }}
          >
            <Typography
              variant="subtitle2"
              fontWeight={600}
              sx={{
                fontSize: '20px',
                color: 'black',
                display: {
                  lg: 'inline',
                  xs: 'none',
                },
              }}
            >
              Hi, Shailesh Bhailkar
            </Typography>
            <Stack direction="row" spacing={1}>
              <span className="bg-[#D8FFDC] text-[#5FAD68] text-xs font-medium me-2 px-2.5 py-0.5 rounded-full ">
                Super Admin
              </span>
            </Stack>
          </Box>
          <Box
            sx={{
              display: {
                lg: 'inline',
                xs: 'none',
              },
            }}
          >
            <Typography
              variant="subtitle2"
              fontWeight={600}
              sx={{
                fontSize: '11px',
              }}
            >
              Friday, November 18,2022
            </Typography>
            <Typography
              variant="subtitle2"
              fontWeight={600}
              sx={{
                fontSize: '11px',
              }}
            >
              Last Login: June,04 2022 16:14
            </Typography>
          </Box>
          <Box>
            <div
              style={{
                display: 'flex',
                alignSelf: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
              }}
            >
              <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
              {/* <div  style={{ padding: 3 }}>
        {dataFiltered.map((d) => (
          <div
          
            className="text"
            style={{
              padding: 5,
              justifyContent: "normal",
              fontSize: 20,
              color: "blue",
              margin: 1,
              width: "250px",
              BorderColor: "green",
              borderWidth: "10px"
            }}
            key={d.id}
          >
            {d}
          </div>
        ))}
      </div> */}
            </div>
          </Box>
          <Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              <IconButton
                size="large"
                aria-label="show 11 new notifications"
                color="inherit"
                aria-controls="msgs-menu"
                aria-haspopup="true"
                sx={{
                  ...(typeof anchorEl2 === 'object' && {
                    color: 'primary.main',
                  }),
                }}
              >
                <Badge variant="dot" color="primary">
                  <IconBellRinging size="21" stroke="1.5" />
                </Badge>
              </IconButton>

              <Stack spacing={1} direction="row" alignItems="center">
                <Profile />
              </Stack>
            </Box>
          </Box>
        </Box>
      </ToolbarStyled>
    </AppBarStyled>
  );
};

Header.propTypes = {
  sx: PropTypes.object,
};

export default Header;
