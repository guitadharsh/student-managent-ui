import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'

function Home() {

  const theme = createTheme();
  const navigate = useNavigate()
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const role = useSelector((state)=> state.auth.role);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              HIVE
            </Typography>
            {
              
            }
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              We believe that every student has the potential to succeed and achieve their goals, and our program is designed to help them do just that. Our team of dedicated educators and mentors work with students to provide the support and resources they need to thrive in school and beyond. We are committed to empowering the next generation of leaders.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              {
                !isAuthenticated && 
                (
                  <>
                  <Button variant="contained" onClick={()=>{navigate('/login')}}>Login</Button>
                  <Button variant="outlined" onClick={()=> {navigate('/register')}}>Register</Button>
                  </>
                )
              }
            </Stack>
          </Container>
        </Box>
      </main>
    </ThemeProvider>
  )
}

export default Home