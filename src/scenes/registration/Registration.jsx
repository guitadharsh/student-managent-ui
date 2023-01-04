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
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { InputLabel, MenuItem } from '@mui/material';
import { useState } from 'react';
import { setRole } from '../../store/auth';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import dayjs from 'dayjs';



export default function SignUp() {

  const [student, setStudent] = useState(false)
  const [role, setrole] = useState('')
  const [value, setValue] = React.useState(dayjs('2023-01-03'));

  const theme = createTheme();
  const navigate = useNavigate()


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password')
    });

    navigate('/login')
  };


  const handleChange = (event) => {
    if (event.target.value === 'student') {
      setStudent(true)
    }
    else {
      setStudent(false)
    }
  }

  const handleDate = (newValue) => {
    setValue(newValue);
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
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="fullName"
                  required
                  fullWidth
                  id="fullname"
                  label="Full Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  value={role}
                  variant="outlined"
                  select
                  label="Role"
                  name='role'
                  sx={{ width: '100%' }}
                  onChange={handleChange}
                >
                  <MenuItem value='student'>Student</MenuItem>
                  <MenuItem value='public'>Public</MenuItem>
                </TextField>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required    
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="confirm password"
                  label="Confirm Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              {
                student ? (
                  <>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        variant="outlined"
                        select
                        label="Gender"
                        name='roles'
                        sx={{ width: '100%' }}
                      >
                        <MenuItem value='male'>Male</MenuItem>
                        <MenuItem value='female'>Female</MenuItem>
                      </TextField>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DesktopDatePicker
                          label="Date of Birth"
                          inputFormat="MM/DD/YYYY"
                          value={value}
                          onChange={handleDate}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </LocalizationProvider>
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        autoComplete="college-name"
                        name="college"
                        required
                        fullWidth
                        id="college"
                        label="College Name"
                        autoFocus
                      />

                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        autoComplete="course"
                        name="course"
                        required
                        fullWidth
                        id="course"
                        label="Course"
                        autoFocus
                      />
                    </Grid>
                  </>
                ) : ''
              }

            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Create Account
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2" onClick={() => navigate('/login')}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}