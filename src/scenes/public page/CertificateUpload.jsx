import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions, Grid, TextField } from '@mui/material';
import { Container } from '@mui/system';

export default function CertificateUpload() {

   return (
      <Box sx={{ minWidth: '100%', minHeight: '100%', pt: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'coloumn' }}>
         <Card sx={{ maxWidth: 345 }}>
            {/* <CardActionArea> */}
            <CardMedia
               component="img"
               height="140"
               image="https://www.fontmirror.com/app_public/files/t/1/featured_image/2020/01/featured_2384.jpg"
               alt="green iguana"
            />
            <CardContent>
               <Typography gutterBottom variant="subtitle1" component="div">
                  Upload Certificate
               </Typography>
            </CardContent>
            {/* </CardActionArea> */}
            <CardActions>

               <Grid container spacing={2}>
                  <Grid item xs={6}>
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
                  </Grid>
                  <Grid item xs={6}>
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
                  </Grid>
                  <Grid item xs={12}>
                     <Button variant='contained'>Upload</Button>
                  </Grid>
               </Grid>
            </CardActions>
         </Card>
      </Box>
   );
}