import React,{useRef, useState} from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';


 const pages = ['Dashboard', 'Markets', 'Extensions', 'Vote'];
 const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export  function Header({handleOpen}) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
 
  // const [highlightStyle, setHighlightStyle] = useState({left: '0px', top: '0px',  positon:'absolute',visibility: 'visible', transitionDuration: '0.2s'});




  
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [highlightStyle, setHighlightStyle] = useState({ left: '0px', top:0,opacity: 0 });
  const buttonRefs = useRef([]);

  const handleMouseEnter = (index) => {
    setHighlightStyle({
      left: `${buttonRefs.current[index].offsetLeft}px`,
      top:0,
      opacity: 1
    });
    console.log(highlightStyle)
  };
  // const handleMouseLeave=()


  return (
    <AppBar position="static" sx={{boxShadow:"none"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
         
      {pages.map((page, index) => (
        <MenuItem >
          <Typography  textAlign="center">{page}</Typography>
        </MenuItem>
      ))}
            </Menu>
          </Box>
          <AdbIcon  sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <div style={{ position: 'relative', flexGrow: 1 }}>
     <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
       <Button
          className="header-nav-button-highlight"
          sx={{ ...highlightStyle, position: 'absolute' }}
        ></Button>

        {pages.map((page, index) => (
        < Button
            ref={(el) => (buttonRefs.current[index] = el)}
            onMouseEnter={() => handleMouseEnter(index)}
            key={page}
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: 'white', display: 'block' }}
          >
            {page}
          </Button>
        ))}
      </Box>
    </div>
          <Box sx={{ flexGrow: 0 }}>
            {/* <Tooltip title="Open settings"> */}
              <Box onClick={handleOpen} sx={{ p: 1,backgroundColor:"#1D2833",border:"1px solid brown",borderRadius:"20px",cursor:"pointer" }}>
                <Typography  color="white"> connect wallet</Typography>
              </Box>
            {/* </Tooltip> */}
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
