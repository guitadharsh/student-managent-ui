import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import { logout } from '../../store/auth';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };



  // redux functions importing
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const role = useSelector((state) => state.auth.role)

  const handleLogout = () => {
    dispatch(logout());
    navigate('/')
    handleMenuClose()
  }

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem onClick={handleLogout}>Logout</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {
            isAuthenticated &&
            (
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
            )
          }
          {
            (role === 'student') &&
            <>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: 'none', sm: 'block', fontWeight: 800, cursor: 'pointer' } }}
                onClick={() => { navigate('/student') }}
              >
                HIVE
              </Typography>
            </>
          }

          {
            (role === 'admin') &&
            <>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: 'none', sm: 'block', fontWeight: 800, cursor: 'pointer' } }}
                onClick={() => { navigate('/admin') }}
              >
                HIVE
              </Typography>
            </>
          }

          {
            (role === 'public') &&
            <>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: 'none', sm: 'block', fontWeight: 800, cursor: 'pointer' } }}
                onClick={() => { navigate('/public') }}
              >
                HIVE
              </Typography>
            </>
          }

          {
            (role === 'student') &&
            (
              <>
                <p onClick={() => navigate('/student/courses')} style={{ marginLeft: '25rem', cursor: 'pointer', fontWeight: 500 }}>Courses</p>
                <p onClick={() => navigate('/student/post')} style={{ marginLeft: '1rem', cursor: 'pointer', fontWeight: 500 }}>Posts</p>
                <p style={{ marginLeft: '1rem', cursor: 'pointer', fontWeight: 500 }}>Club</p>
              </>
            )
          }

          {
            (role === 'public') &&
            (
              <>
                <p onClick={() => navigate('/public/sheduleCourses')} style={{ marginLeft: '25rem', cursor: 'pointer', fontWeight: 500 }}>Class</p>
                <p onClick={() => navigate('/public/addPost')} style={{ marginLeft: '1rem', cursor: 'pointer', fontWeight: 500 }}>Post</p>
                <p onClick={() => navigate('/public/certificateUpload')} style={{ marginLeft: '1rem', cursor: 'pointer', fontWeight: 500 }}>Certificate</p>
              </>
            )
          }

          {
            (role === 'admin') &&
            (
              <>
                <p onClick={() => navigate('')} style={{ marginLeft: '25rem', cursor: 'pointer', fontWeight: 500 }}>Courses</p>
                <p onClick={() => navigate('')} style={{ marginLeft: '1rem', cursor: 'pointer', fontWeight: 500 }}>Posts</p>
              </>
            )
          }

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {
              (role === 'admin') && <p>Welcome, Admin</p>
            }

            {
              isAuthenticated &&
              (
                <>
                  <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="error">
                      <MailIcon />
                    </Badge>
                  </IconButton>


                  <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                  >
                    <Badge badgeContent={17} color="error">
                      <NotificationsIcon />
                    </Badge>
                  </IconButton>

                  <IconButton
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                </>
              )
            }

            {
              !isAuthenticated &&
              (
                <Box>
                  <Button color="primary"
                    size="large"
                    variant="filled"
                    onClick={() => { navigate('/login') }}
                  >
                    Login
                  </Button>
                  <Button
                    color="primary"
                    size="large"
                    variant="filled"
                    onClick={() => { navigate('/register') }}
                  >
                    Register
                  </Button>
                </Box>
              )
            }

          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              {
                isAuthenticated &&
                (
                  <MoreIcon />
                )
              }
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box >
  );
}