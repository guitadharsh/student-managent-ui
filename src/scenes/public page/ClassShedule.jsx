import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { Button, CardContent, Grid, MenuItem, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Table from './Table'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import dayjs from 'dayjs';


function ClassShedule() {
  const [value, setValue] = React.useState(dayjs('03-02-2023'));
  const handleDate = (newValue) => {
    setValue(newValue);
  };


  return (
    <>
      <Box
        container
        spacing={0}
        display="flex"
        direction={{ sm: 'row', md: 'column', lg: 'column', lx: 'column' }}
        alignItems="center"
        justifyContent="space-around"
        sx={{ pt: 1, p: 5 }}
      >
        <Card sx={{ maxWidth: 300, p: 1, backgroundColor: '#E7EBF0' }}>
          <CardContent>
            <Typography variant="h6" color="initial" sx={{ mb: 3 }}>Schedule class</Typography>

            <Box component="form" noValidate sx={{ mt: 1 }}>

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DesktopDatePicker
                    label="Date"
                    inputFormat="DD/MM/YYYY"
                    value={value}
                    onChange={handleDate}
                    renderInput={(params) => <TextField {...params} />}
                    size='small'
                    sx={{ minWidth: '100%', margin: '1rem 0' }}
                  />
                </LocalizationProvider>

              <TextField
                margin="normal"
                required
                fullWidth
                id="batch"
                label="Title"
                name="title"
                autoFocus
                size='small'
              />

              <TextField
                variant="outlined"
                select
                label="Batch"
                name='batch'
                sx={{ width: '100%', margin: '1rem 0' }}
                size='small'
              >
                <MenuItem value='a'>A</MenuItem>
                <MenuItem value='b'>B</MenuItem>
                <MenuItem value='c'>C</MenuItem>
                <MenuItem value='d'>D</MenuItem>
                <MenuItem value='e'>E</MenuItem>
                <MenuItem value='f'>F</MenuItem>
              </TextField>



              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Login
              </Button>
            </Box>
          </CardContent>
        </Card>

        <Card sx={{ minWidth: 500, p: 1, backgroundColor: '#E7EBF0' }}>
          <CardContent>
            <Typography variant="subtitle1" color="initial">Class History</Typography>
            <Table />
          </CardContent>
        </Card>
      </Box>
    </>
  )
}

export default ClassShedule