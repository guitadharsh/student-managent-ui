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
import { MenuItem } from '@mui/material';
import { setRole } from '../../store/auth';


const theme = createTheme();


export default function NewPost() {

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      title: data.get('title'),
      password: data.get('password'),
    });
  };


  const [role, setrole] = React.useState('')
  const handleChange = (event) => {
    setRole(event.target.value)
  }

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
          <Typography component="h1" variant="h5">
            Create New Post
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="title"
              label="Title"
              name="title"
              autoFocus
              size='small'
            />
            <TextField
              value={role}
              variant="outlined"
              select
              label="Post Type"
              name='post-type'
              sx={{ width: '100%', mt: 1 }}
              onChange={handleChange}
              size="small"
            >
              <MenuItem value='student'>Student</MenuItem>
              <MenuItem value='public'>Public</MenuItem>
            </TextField>
            <TextField
              margin="normal"
              required
              fullWidth
              name="price"
              label="Price"
              type="text"
              id="price"
              size='small'
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="date"
              label="Date"
              name="date"
              autoFocus
              size='small'
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Post
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}