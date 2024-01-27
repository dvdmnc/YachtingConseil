import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {  CardActionArea } from '@mui/material';
import Box from '@mui/system/Box'

export default function MultiActionAreaCard({image,title,content}) {
  return (
    <Card className='card-box'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={image}
          alt={title}
        />
        <CardContent sx={{textAlign:'center'}}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Box sx={{padding: '30px'}}>
            {content}
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}