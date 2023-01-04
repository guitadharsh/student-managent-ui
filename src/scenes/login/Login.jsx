import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser, setRole, setStudent, setPublic, setAdmin } from '../../store/auth';
import { MenuItem } from '@mui/material';

export default function SignIn() {
  
  const theme = createTheme();
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const role = useSelector((state) => state.auth.role)


  // submit function
  const HandleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
      roles: data.get('roles')
    });

    // switching routers
    switch (data.get('roles')) {
      case 'student':
        navigate('/student')
        dispatch(setUser(true))
        dispatch(setStudent())
        console.log(role)

        break;


      case 'public':
        navigate('/public')
        dispatch(setUser(true))
        dispatch(setPublic())
        break;


      case 'admin':
        navigate('/admin')
        dispatch(setUser(true))
        dispatch(setAdmin())
        break;

        default : alert('Enter role')
    }
  };


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={HandleSubmit} noValidate sx={{ mt: 1 }}>


            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <TextField
              variant="outlined"
              select
              label="Role"
              name='roles'
              sx={{ width: '100%', margin: '1rem 0' }}
            >
              <MenuItem value='student'>Student</MenuItem>
              <MenuItem value='public'>Public</MenuItem>
              <MenuItem value='admin'>admin</MenuItem>
            </TextField>


            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
            <Grid container>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}