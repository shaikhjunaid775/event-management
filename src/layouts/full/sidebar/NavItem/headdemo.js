import React from 'react';
import { Box, AppBar, Toolbar, styled, Stack, IconButton, Badge, Typography } from '@mui/material';
import PropTypes from 'prop-types';

// components
import Profile from './Profile';
import { IconBellRinging, IconMenu } from '@tabler/icons';

const Header = (props) => {
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

  return (
    <AppBarStyled position="sticky" color="default">
      <ToolbarStyled>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: "100%",
          }}
        >
          <Box>
            <Typography
              variant="subtitle2"
              fontWeight={600}
              sx={{
                fontSize: '20px',
                color: 'black',
              }}
            >
              Hi, Shailesh Bhailkar
            </Typography>
            <Stack direction="row" spacing={1}>
              <span class="bg-[#D8FFDC] text-[#5FAD68] text-xs font-medium me-2 px-2.5 py-0.5 rounded-full ">
                Super Admin
              </span>
            </Stack>
          </Box>
          <Box>
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
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: "100%"}}>
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
